'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { useState } from 'react';

export default function PrivacyModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="text-primary hover:underline"
      >
        privacy policy
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Privacy Policy</DialogTitle>
          </DialogHeader>

          <div className="prose prose-lg">
            <p className="mb-4">
              At our company, we take your privacy seriously. We want to be
              transparent about how we handle your data.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">
              Data Collection and Usage
            </h2>
            <p className="mb-4">
              When you contact us through our contact form, we collect the
              following information:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your name</li>
              <li>Your email address</li>
              <li>The subject of your message</li>
              <li>Your message content</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">
              Data Protection
            </h2>
            <p className="mb-4">We want to assure you that:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                We do not store your personal data beyond what is necessary to
                respond to your inquiry
              </li>
              <li>We do not share your information with any third parties</li>
              <li>We do not use your data for marketing purposes</li>
              <li>
                Your data is not forwarded to any external services or
                organizations
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">
              Cookies and Analytics
            </h2>
            <p className="mb-4">
              We use Vercel Web Analytics, which is cookie-free and does not
              collect personal data or track you across sites.
            </p>
            <p className="mb-4">
              We also use Google Analytics to understand how the site is used.
              Google Analytics sets cookies and is only loaded after you accept
              it in the cookie banner. If you reject or ignore the banner, no
              Google Analytics cookies are set and no data is sent to Google. You
              can change your choice at any time via the &ldquo;Cookie
              preferences&rdquo; link in the footer.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">
              Contact Information
            </h2>
            <p className="mb-4">
              If you have any questions about our privacy policy or how we
              handle your data, please feel free to contact us through our
              contact form.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
