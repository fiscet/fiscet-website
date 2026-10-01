'use client';

import { Button } from '@/components/ui/button';
import PrivacyModal from '@/components/PrivacyModal';
import { useCookieConsent } from '@/components/cookie-consent/CookieConsentContext';
import type { Dictionary } from '@/lib/i18n';

export default function CookieBanner({
  cookie,
  privacy
}: {
  cookie: Dictionary['cookie'];
  privacy: Dictionary['privacy'];
}) {
  const { consent, hydrated, accept, reject } = useCookieConsent();

  if (!hydrated || consent !== null) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-label={cookie.ariaLabel}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-4 py-4 shadow-lg backdrop-blur"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          {cookie.textBefore}
          <PrivacyModal privacy={privacy} />
          {cookie.textAfter}
        </p>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline" size="sm" onClick={reject}>
            {cookie.reject}
          </Button>
          <Button size="sm" onClick={accept}>
            {cookie.accept}
          </Button>
        </div>
      </div>
    </div>
  );
}
