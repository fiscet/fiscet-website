'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { useState } from 'react';
import type { Dictionary } from '@/lib/i18n';

export default function PrivacyModal({
  privacy,
  label,
  className = 'text-primary hover:underline'
}: {
  privacy: Dictionary['privacy'];
  // Button text, when it differs from the inline link label.
  label?: string;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={className}
      >
        {label ?? privacy.linkLabel}
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{privacy.title}</DialogTitle>
          </DialogHeader>

          <div className="prose prose-lg">
            <p className="mb-4">{privacy.intro}</p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">
              {privacy.collectionTitle}
            </h2>
            <p className="mb-4">{privacy.collectionIntro}</p>
            <ul className="list-disc pl-6 mb-4">
              {privacy.collectionItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">
              {privacy.protectionTitle}
            </h2>
            <p className="mb-4">{privacy.protectionIntro}</p>
            <ul className="list-disc pl-6 mb-4">
              {privacy.protectionItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">
              {privacy.cookiesTitle}
            </h2>
            {privacy.cookiesParagraphs.map((paragraph) => (
              <p key={paragraph} className="mb-4">
                {paragraph}
              </p>
            ))}

            <h2 className="text-2xl font-semibold mt-6 mb-4">
              {privacy.contactTitle}
            </h2>
            <p className="mb-4">{privacy.contactText}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
