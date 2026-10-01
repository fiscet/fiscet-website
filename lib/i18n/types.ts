export const LOCALES = ['it', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export type ExampleName =
  | 'FisServer'
  | 'FisEvents'
  | 'FisApart'
  | 'Build vs Buy'
  | 'MamiVibe'
  | 'Studio Dentistico Marin';

// Strings may use **bold**, line breaks (\n) and [DA CONFERMARE: ...]
// placeholders: render them with <RichText />.
export type Dictionary = {
  locale: Locale;
  ogLocale: 'it_IT' | 'en_US';
  homePath: string;

  nav: {
    about: string;
    services: string;
    contact: string;
    blog: string;
    blogHref: string;
    cta: string;
    menuToggle: string;
    switchLabel: string;
    switchTitle: string;
    switchHrefLang: Locale;
  };

  home: {
    metaTitle: string;
    metaDescription: string;
    organizationDescription: string;
    h1: string;
    hero: {
      // Shown next to the author photo, above the h1.
      eyebrow: string;
      lead: string;
      stats: { value: string; label: string }[];
      cta: string;
      secondaryCta: string;
    };
    portfolioLabel: string;
    examples: Record<ExampleName, { tag: string; description: string }>;
    portfolioNote?: string;
    headless?: { title: string; paragraphs: string[] };
    tech: {
      label: string;
      alt: { payload: string; sanity: string; strapi: string; nextjs: string };
    };
    services: {
      title: string;
      items: {
        title: string;
        description: string;
        link?: { label: string; href: string };
      }[];
    };
    // Big-company tools next to their small-business version.
    bigTools?: {
      title: string;
      intro: string;
      bigLabel: string;
      smallLabel: string;
      rows: { big: string; small: string }[];
    };
    // For visitors who don't know yet what they need.
    unsure?: {
      title: string;
      intro: string;
      cases: { title: string; text: string }[];
      closing: string;
      cta: string;
      boxTitle: string;
      boxText: string;
      boxCta: string;
      boxHref: string;
    };
    when?: {
      title: string;
      intro: string;
      items: string[];
    };
    process?: {
      title: string;
      steps: { title: string; text: string }[];
      techText: string;
    };
    faq?: {
      title: string;
      items: { question: string; answer: string }[];
    };
    about: {
      title: string;
      paragraphs: string[];
      cta: string;
    };
    contact: {
      title: string;
      intro: string;
    };
  };

  contactForm: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    privacyBefore: string;
    privacyAfter: string;
    submit: string;
    submitting: string;
    errors: {
      name: string;
      email: string;
      subject: string;
      message: string;
      privacy: string;
    };
    success: { title: string; description: string };
    failure: { title: string; description: string };
  };

  privacy: {
    linkLabel: string;
    title: string;
    intro: string;
    collectionTitle: string;
    collectionIntro: string;
    collectionItems: string[];
    protectionTitle: string;
    protectionIntro: string;
    protectionItems: string[];
    cookiesTitle: string;
    cookiesParagraphs: string[];
    contactTitle: string;
    contactText: string;
  };

  cookie: {
    ariaLabel: string;
    textBefore: string;
    textAfter: string;
    reject: string;
    accept: string;
  };

  footer: {
    copyright: string;
    cookiePreferences: string;
    privacy: string;
    servicesTitle: string;
    exploreTitle: string;
  };

  blog: {
    name: string;
    title: string;
    titleSuffix: string;
    metaDescription: string;
    intro: string;
    by: string;
    published: string;
    live: string;
    comingPrefix: string;
    read: string;
    home: string;
    breadcrumbLabel: string;
    morePostsLabel: string;
    previous: string;
    next: string;
  };

  langBadge: {
    srLabel: string;
  };

  // Service pages exist only in Italian (app/(it)/[servizio]).
  servicePage?: {
    cta: string;
  };

  notFound: {
    metaTitle: string;
    title: string;
    text: string;
    cta: string;
  };
};
