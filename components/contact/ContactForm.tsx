'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useMemo, useState } from 'react';
import { toast } from 'sonner';
import PrivacyModal from '@/components/PrivacyModal';
import type { Dictionary } from '@/lib/i18n';

type FormDict = Dictionary['contactForm'];

function createFormSchema(errors: FormDict['errors']) {
  return z.object({
    name: z.string().min(2, errors.name),
    email: z.string().email(errors.email),
    subject: z.string().min(5, errors.subject),
    message: z.string().min(10, errors.message),
    privacyAccepted: z.boolean().refine((val) => val === true, {
      message: errors.privacy
    })
  });
}

type FormValues = z.infer<ReturnType<typeof createFormSchema>>;

export function ContactForm({
  form: t,
  privacy
}: {
  form: FormDict;
  privacy: Dictionary['privacy'];
}) {
  const [isLoading, setIsLoading] = useState(false);
  const formSchema = useMemo(() => createFormSchema(t.errors), [t.errors]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      privacyAccepted: false
    }
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        console.error('Failed to send message:', response);
        throw new Error('Failed to send message');
      }

      toast.success(t.success.title, {
        description: t.success.description
      });

      form.reset();
    } catch (error) {
      console.error(error);
      toast.error(t.failure.title, {
        description: t.failure.description
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.nameLabel}</FormLabel>
              <FormControl>
                <Input placeholder={t.namePlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.emailLabel}</FormLabel>
              <FormControl>
                <Input placeholder={t.emailPlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.subjectLabel}</FormLabel>
              <FormControl>
                <Input placeholder={t.subjectPlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.messageLabel}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t.messagePlaceholder}
                  className="min-h-[150px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="privacyAccepted"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  <span>
                    {t.privacyBefore}
                    <PrivacyModal privacy={privacy} />
                    {t.privacyAfter}
                  </span>
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? t.submitting : t.submit}
        </Button>
      </form>
    </Form>
  );
}
