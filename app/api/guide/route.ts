import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import * as z from 'zod';
import { clientIp, isRateLimited } from '@/lib/rate-limit';

export const runtime = 'nodejs';

const GUIDE_FILE = 'Guida-AI-PMI.pdf';
const GUIDE_TITLE =
  'Intelligenza artificiale e automazione nelle piccole imprese';

const HOUR = 60 * 60 * 1000;
const MAX_PER_IP_PER_HOUR = 5;
const MAX_PER_EMAIL_PER_HOUR = 2;

const bodySchema = z.object({
  email: z.string().trim().email().max(254),
  privacyAccepted: z.literal(true),
  // Honeypot: hidden field that real visitors never fill in.
  website: z.string().max(0).optional()
});

// The address is never logged or stored: it only travels inside the two
// emails below. Do not turn on nodemailer's logger/debug here.
export async function POST(req: Request) {
  let email: string;
  try {
    const body = bodySchema.parse(await req.json());
    email = body.email;
  } catch {
    return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
  }

  // Per IP, and per recipient so the endpoint can't be used to flood someone.
  if (
    isRateLimited(`ip:${clientIp(req)}`, MAX_PER_IP_PER_HOUR, HOUR) ||
    isRateLimited(`email:${email.toLowerCase()}`, MAX_PER_EMAIL_PER_HOUR, HOUR)
  ) {
    return NextResponse.json({ message: 'Too many requests' }, { status: 429 });
  }

  try {
    const pdf = await readFile(
      path.join(process.cwd(), 'private', 'guide', GUIDE_FILE)
    );

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      // info@ sends an automatic reply and nobody reads it: answers go to the
      // inbox that is actually read.
      replyTo: process.env.SMTP_REPLY_TO || process.env.SMTP_TO,
      // Tells out-of-office and other auto-responders not to reply to this.
      headers: { 'Auto-Submitted': 'auto-generated' },
      subject: `La tua guida: ${GUIDE_TITLE}`,
      text: [
        'Ciao,',
        '',
        `in allegato trovi la guida "${GUIDE_TITLE}".`,
        '',
        'Se vuoi parlarne in relazione alla tua impresa, rispondi pure a questa email o scrivimi da https://fiscet.it/#contact.',
        '',
        'Christian Zanchetta',
        'Fiscet · https://fiscet.it'
      ].join('\n'),
      html: `
        <p>Ciao,</p>
        <p>in allegato trovi la guida <strong>${GUIDE_TITLE}</strong>.</p>
        <p>Se vuoi parlarne in relazione alla tua impresa, rispondi pure a questa email o scrivimi dal <a href="https://fiscet.it/#contact">modulo contatti</a>.</p>
        <p>Christian Zanchetta<br>Fiscet · <a href="https://fiscet.it">fiscet.it</a></p>
      `,
      attachments: [
        {
          filename: GUIDE_FILE,
          content: pdf,
          contentType: 'application/pdf'
        }
      ]
    });

    // The notification is how the lead reaches the inbox. A failure here must
    // not hide the fact that the visitor already got the guide.
    try {
      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: process.env.SMTP_TO,
        replyTo: email,
        headers: { 'Auto-Submitted': 'auto-generated' },
        subject: 'Guida scaricata',
        text: `Qualcuno ha richiesto la guida "${GUIDE_TITLE}": ${email}`
      });
    } catch {
      console.error('Guide notification email failed');
    }

    return NextResponse.json({ message: 'Guide sent' }, { status: 200 });
  } catch {
    console.error('Guide email failed');
    return NextResponse.json({ message: 'Failed to send' }, { status: 500 });
  }
}
