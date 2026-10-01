import Link from 'next/link';
import CookiePreferencesButton from '@/components/cookie-consent/CookiePreferencesButton';
import PrivacyModal from '@/components/PrivacyModal';
import { getDictionary, type Locale } from '@/lib/i18n';
import { getServiceLinks } from '@/lib/navigation';
import { SITE_NAME } from '@/lib/site';
import { homeAnchor } from '@/lib/utils';

const LINK_CLASS = 'text-white/75 hover:text-white';

export default function Footer({ locale }: { locale: Locale }) {
  const { footer, nav, home, homePath, privacy } = getDictionary(locale);
  const services = getServiceLinks(locale);

  const explore = [
    { label: nav.about, href: homeAnchor(homePath, 'about') },
    { label: nav.blog, href: nav.blogHref },
    { label: home.contact.title, href: homeAnchor(homePath, 'contact') }
  ];

  return (
    <footer className="bg-fis-logo text-[0.95rem] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[2fr_1fr_1fr]">
        <div className="max-w-sm">
          <Link href={homePath} className="text-2xl font-bold">
            {SITE_NAME}
          </Link>
          <p className="mt-3 leading-relaxed text-white/75">
            {home.organizationDescription}
          </p>
        </div>

        {services.length > 0 && (
          <nav aria-label={footer.servicesTitle}>
            <p className="font-semibold">{footer.servicesTitle}</p>
            <ul className="mt-3 space-y-2">
              {services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={LINK_CLASS}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <nav aria-label={footer.exploreTitle}>
          <p className="font-semibold">{footer.exploreTitle}</p>
          <ul className="mt-3 space-y-2">
            {explore.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={LINK_CLASS}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {footer.copyright}
          </p>
          <div className="flex gap-5">
            <PrivacyModal
              privacy={privacy}
              label={footer.privacy}
              className="cursor-pointer hover:text-white"
            />
            <CookiePreferencesButton
              label={footer.cookiePreferences}
              className="cursor-pointer hover:text-white"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
