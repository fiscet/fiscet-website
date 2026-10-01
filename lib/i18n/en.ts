import type { Dictionary } from './types';

export const en: Dictionary = {
  locale: 'en',
  ogLocale: 'en_US',
  homePath: '/en',

  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    blog: 'Blog',
    blogHref: '/en/blog',
    menuToggle: 'Toggle menu',
    switchLabel: 'IT',
    switchTitle: 'Versione italiana',
    switchHrefLang: 'it'
  },

  home: {
    h1: 'Custom Web Solutions for your business',
    hero: {
      titleStart: 'Want an app in a',
      titleHighlight: 'short time?',
      subtitle: 'Yes, because we start from FisServer.',
      text: 'Our own software foundation: multi-tenant backend, roles and permissions, APIs. Already built, already tested. Your app is what we add on top.',
      stats: [
        { value: 'weeks', label: 'to first release' },
        { value: '1', label: 'proven foundation, reused' },
        { value: '0', label: 'boilerplate rewritten' }
      ],
      cta: 'Let’s work together'
    },
    portfolioLabel: 'Portfolio',
    examples: {
      FisServer: {
        tag: 'Backend · AdonisJS + PostgreSQL',
        description:
          'Multi-tenant SaaS backend foundation with RBAC and an MCP server'
      },
      FisEvents: {
        tag: 'SaaS · Next.js + Sanity',
        description: 'Event websites and attendee management in one platform'
      },
      FisApart: {
        tag: 'AI demo · Vercel AI SDK',
        description: 'Conversational AI assistant for a booking website'
      },
      'Build vs Buy': {
        tag: 'AI tool',
        description: 'Helps SMEs decide whether to build or buy software'
      },
      MamiVibe: {
        tag: 'Website · Next.js + Sanity',
        description: 'Fast, content-driven business website on a headless CMS'
      }
    },
    headless: {
      title: 'Headless CMS Architecture',
      paragraphs: [
        'Utilize **Payload CMS**, **Sanity.io**, or **Strapi**\nto separate your content from the presentation layer, offering unmatched flexibility and performance.',
        'Utilize **Next.js** to build lightning-fast web applications that provide exceptional user experiences.'
      ]
    },
    tech: {
      label: 'Most used technologies',
      alt: {
        payload: 'Backend with Payload CMS + NextJS',
        sanity: 'Backend with Sanity.io + NextJS',
        strapi: 'Backend with Strapi + NextJS',
        nextjs: 'Frontend with Next.js'
      }
    },
    services: {
      title: 'Services',
      items: [
        {
          title: 'Develop applications in a short time',
          description:
            'Accelerate your time-to-market by leveraging pre-built backend solutions, enabling rapid application delivery without compromising quality.'
        },
        {
          title: 'Easy-to-Use Content Management',
          description:
            'Take control of your WebApplication or Website content without the technical hassle.'
        },
        {
          title: 'Headless CMS Integration',
          description:
            'Intuitive Content Management Systems (CMS): Implement user-friendly CMS platforms that make updating your website a breeze.'
        },
        {
          title: 'Training & Support',
          description:
            'Provide guidance and support to help you manage your content effectively.'
        }
      ]
    },
    about: {
      title: 'About',
      paragraphs: [
        '**Expertise in Modern Technologies:** With proficiency in Next.js and leading CMS platforms'
      ],
      cta: 'Let’s Work Together'
    },
    contact: {
      title: 'Contact Us',
      intro: 'Have a question or want to work together? Send us a message!'
    }
  },

  contactForm: {
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'your.email@example.com',
    subjectLabel: 'Subject',
    subjectPlaceholder: 'Message subject',
    messageLabel: 'Message',
    messagePlaceholder: 'Your message here...',
    privacyBefore: 'I accept the ',
    privacyAfter: '',
    submit: 'Send Message',
    submitting: 'Sending...',
    errors: {
      name: 'Name must be at least 2 characters',
      email: 'Invalid email address',
      subject: 'Subject must be at least 5 characters',
      message: 'Message must be at least 10 characters',
      privacy: 'You must accept the privacy policy to proceed'
    },
    success: {
      title: 'Success!',
      description: 'Your message has been sent successfully.'
    },
    failure: {
      title: 'Error!',
      description: 'Failed to send message. Please try again later.'
    }
  },

  privacy: {
    linkLabel: 'privacy policy',
    title: 'Privacy Policy',
    intro:
      'At our company, we take your privacy seriously. We want to be transparent about how we handle your data.',
    collectionTitle: 'Data Collection and Usage',
    collectionIntro:
      'When you contact us through our contact form, we collect the following information:',
    collectionItems: [
      'Your name',
      'Your email address',
      'The subject of your message',
      'Your message content'
    ],
    protectionTitle: 'Data Protection',
    protectionIntro: 'We want to assure you that:',
    protectionItems: [
      'We do not store your personal data beyond what is necessary to respond to your inquiry',
      'We do not share your information with any third parties',
      'We do not use your data for marketing purposes',
      'Your data is not forwarded to any external services or organizations'
    ],
    cookiesTitle: 'Cookies and Analytics',
    cookiesParagraphs: [
      'We use Vercel Web Analytics, which is cookie-free and does not collect personal data or track you across sites.',
      'We also use Google Analytics to understand how the site is used. Google Analytics sets cookies and is only loaded after you accept it in the cookie banner. If you reject or ignore the banner, no Google Analytics cookies are set and no data is sent to Google. You can change your choice at any time via the “Cookie preferences” link in the footer.'
    ],
    contactTitle: 'Contact Information',
    contactText:
      'If you have any questions about our privacy policy or how we handle your data, please feel free to contact us through our contact form.'
  },

  cookie: {
    ariaLabel: 'Cookie consent',
    textBefore:
      'We use analytics cookies (Google Analytics) to see how the site is used. They are only set if you accept. Read our ',
    textAfter: '.',
    reject: 'Reject',
    accept: 'Accept'
  },

  footer: {
    copyright: 'Fiscet by Christian Zanchetta. All rights reserved.',
    cookiePreferences: 'Cookie preferences'
  },

  blog: {
    name: 'Fiscet Blog',
    title: 'Blog · Fiscet',
    titleSuffix: ' · Fiscet Blog',
    metaDescription:
      'Profiles of deep-tech startups and the software behind them, plus notes from building web applications.',
    intro:
      'Profiles of deep-tech startups and the software behind them, plus notes from building web applications.',
    by: 'By',
    published: 'Published',
    live: 'Live',
    comingPrefix: 'Coming',
    read: 'Read',
    home: 'Home',
    breadcrumbLabel: 'Breadcrumb',
    morePostsLabel: 'More posts',
    previous: 'Previous',
    next: 'Next'
  },

  langBadge: {
    srLabel: 'Language: '
  },

  notFound: {
    metaTitle: 'Page not found | Fiscet',
    title: 'Page not found',
    text: 'The page you are looking for does not exist or has been moved.',
    cta: 'Back to the home page'
  }
};
