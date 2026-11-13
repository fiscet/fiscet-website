'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';
import PrivacyModal from '@/components/PrivacyModal';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import type { Dictionary } from '@/lib/i18n';

type GuideDict = NonNullable<Dictionary['guide']>;

function createSchema(errors: GuideDict['errors']) {
  return z.object({
    email: z.string().email(errors.email),
    privacyAccepted: z.boolean().refine((val) => val === true, {
      message: errors.privacy
    }),
    website: z.string().optional()
  });
}

type FormValues = z.infer<ReturnType<typeof createSchema>>;

export function GuideForm({
  guide: t,
  privacy
}: {
  guide: GuideDict;
  privacy: Dictionary['privacy'];
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const schema = useMemo(() => createSchema(t.errors), [t.errors]);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: '', privacyAccepted: false, website: '' }
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    try {
      const response = await fetch('/api/guide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });
      if (response.status === 429) {
        toast.error(t.tooManyRequests.title, {
          description: t.tooManyRequests.description
        });
        return;
      }
      if (!response.ok) throw new Error('Failed to send guide');

      setSent(true);
      form.reset();
    } catch {
      toast.error(t.failure.title, { description: t.failure.description });
    } finally {
      setIsLoading(false);
    }
  }

  if (sent) {
    return (
      <div role="status" className="flex items-start gap-3">
        <CheckCircle2
          aria-hidden="true"
          className="mt-1 h-6 w-6 shrink-0 text-fis-logo"
        />
        <div>
          <p className="text-lg font-semibold">{t.success.title}</p>
          <p className="mt-1 leading-relaxed text-gray-700">
            {t.success.description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.emailLabel}</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder={t.emailPlaceholder}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Honeypot: off-screen and skipped by keyboard and screen readers. */}
        <div
          aria-hidden="true"
          className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
        >
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...form.register('website')}
          />
        </div>
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
