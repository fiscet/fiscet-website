import type { Metadata } from 'next';
import NotFoundContent from '@/components/NotFoundContent';
import RootShell from '@/components/RootShell';
import { getDictionary } from '@/lib/i18n';

// URLs that match no route render outside both root layouts: show the
// Italian 404, since Italian is the site's main language.
export const metadata: Metadata = {
  title: getDictionary('it').notFound.metaTitle
};

export default function GlobalNotFound() {
  return (
    <RootShell locale="it">
      <NotFoundContent locale="it" />
    </RootShell>
  );
}
