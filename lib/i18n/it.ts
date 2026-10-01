import type { Dictionary } from './types';

// Page copy comes from docs/seo-italia/copy/home-it.md.
export const it: Dictionary = {
  locale: 'it',
  ogLocale: 'it_IT',
  homePath: '/',

  nav: {
    home: 'Home',
    about: 'Chi sono',
    services: 'Servizi',
    contact: 'Contatti',
    blog: 'Blog',
    blogHref: '/blog',
    menuToggle: 'Apri o chiudi il menu',
    switchLabel: 'EN',
    switchTitle: 'English version',
    switchHrefLang: 'en'
  },

  home: {
    // Title and description from docs/seo-italia/keyword-map.md.
    metaTitle: 'Gestionali e web app su misura per piccole imprese | Fiscet',
    metaDescription:
      'Sviluppo di gestionali, web app e siti su misura per micro e piccole imprese. Prima versione funzionante in settimane, non in mesi.',
    organizationDescription:
      'Sviluppo di gestionali, web app e siti su misura per micro e piccole imprese. Prima versione funzionante in settimane, non in mesi.',
    h1: 'Gestionali e web app su misura per piccole imprese',
    hero: {
      titleStart: 'Ti serve un gestionale',
      titleHighlight: 'in tempi brevi?',
      subtitle: 'Sì, perché non si parte da zero.',
      text: 'Ogni progetto parte da FisServer, una base software già costruita e collaudata: utenti, ruoli e permessi, sicurezza, API. Il tuo gestionale è quello che ci costruisco sopra.',
      stats: [
        { value: 'settimane', label: 'alla prima versione funzionante' },
        { value: '1', label: 'base collaudata, riutilizzata' },
        { value: '0', label: 'lavoro ripetuto da capo' }
      ],
      cta: 'Parliamone'
    },
    portfolioLabel: 'Lavori e progetti',
    examples: {
      FisServer: {
        tag: 'Base software · AdonisJS + PostgreSQL',
        description:
          'Le fondamenta da cui partono i miei gestionali: più aziende sullo stesso sistema, ruoli e permessi, accesso sicuro per gli assistenti AI.'
      },
      FisEvents: {
        tag: 'SaaS · Next.js + Sanity',
        description:
          "Siti per eventi e gestione degli iscritti in un'unica piattaforma."
      },
      FisApart: {
        tag: 'Demo AI · Vercel AI SDK',
        description:
          'Assistente conversazionale che risponde ai clienti di un sito di prenotazioni.'
      },
      'Build vs Buy': {
        tag: 'Strumento AI',
        description:
          'Aiuta le piccole imprese a decidere se comprare un software o farlo sviluppare.'
      },
      MamiVibe: {
        tag: 'Sito web · Next.js + Sanity',
        description:
          'Sito per una libera professionista: veloce, aggiornabile in autonomia.'
      }
    },
    portfolioNote:
      '[DA CONFERMARE: aggiungere dentistaconegliano.it come caso "Sito web per uno studio dentistico", se il cliente è d\'accordo. È l\'unico caso italiano e copre la keyword "sito web per dentisti".]',
    tech: {
      label: 'Tecnologie che uso',
      alt: {
        payload: 'Backend con Payload CMS e Next.js',
        sanity: 'Backend con Sanity.io e Next.js',
        strapi: 'Backend con Strapi e Next.js',
        nextjs: 'Frontend con Next.js'
      }
    },
    services: {
      title: 'Cosa posso fare per te',
      items: [
        {
          title: 'Gestionali su misura',
          description:
            'Ordini, magazzino, clienti, commesse: un unico programma costruito sul modo in cui lavori, al posto di fogli Excel e software che non si parlano.',
          link: { label: 'Quando conviene →', href: '#quando' }
        },
        {
          title: 'Web app per aziende',
          description:
            'Preventivatori, aree riservate per i clienti, prenotazioni, dashboard. Funzionano nel browser e sullo smartphone, senza installare nulla.',
          link: { label: 'Scopri di più →', href: '/sviluppo-web-app' }
        },
        {
          title: 'Portali B2B',
          description:
            'Catalogo, listini dedicati e ordini online per rivenditori e agenti, collegati ai dati che hai già.',
          link: { label: 'Scopri di più →', href: '/portale-b2b' }
        },
        {
          title: 'Siti web aziendali',
          description:
            'Siti veloci, che aggiorni in autonomia e costruiti per farti trovare su Google. Anche restyling di siti esistenti.',
          link: { label: 'Scopri di più →', href: '/siti-web-aziendali' }
        }
      ]
    },
    when: {
      title: 'Quando ha senso un gestionale su misura',
      intro:
        'Non sempre serve. Di solito conviene quando ti riconosci in almeno una di queste situazioni.',
      items: [
        "Gestisci ordini, magazzino o clienti su più file Excel, e qualcuno passa ore a copiare dati da un file all'altro.",
        'Paghi un software in abbonamento, ne usi un terzo, e le funzioni che ti servono davvero mancano.',
        'Le informazioni sono sparse tra email, WhatsApp e fogli di calcolo: per sapere a che punto è un lavoro devi chiedere a qualcuno.',
        'Il tuo modo di lavorare è quello che ti distingue dai concorrenti, e nessun software pronto lo rispecchia.'
      ],
      boxTitle: 'Non sai se ti conviene un software pronto o uno su misura?',
      boxText:
        'Build vs Buy è uno strumento gratuito che analizza il tuo caso e ti dà una risposta motivata in pochi minuti.',
      boxCta: 'Prova Build vs Buy',
      boxHref: 'https://bvb.fiscet.it'
    },
    process: {
      title: 'Come lavoro',
      steps: [
        {
          title: 'Analisi',
          text: 'Una chiamata per capire come lavori oggi, cosa non funziona e cosa deve fare il software. Ne escono un perimetro chiaro e un preventivo.'
        },
        {
          title: 'Prima versione in settimane',
          text: 'Si parte da FisServer, quindi il tempo va nelle funzioni che servono a te, non nelle fondamenta.'
        },
        {
          title: 'Uso reale e miglioramenti',
          text: 'La provi con i tuoi dati, si corregge quello che non va e si aggiunge il resto un modulo alla volta.'
        },
        {
          title: 'Assistenza nel tempo',
          text: 'Aggiornamenti e modifiche quando servono, con un unico referente: chi ha scritto il codice.'
        }
      ],
      techText:
        'Next.js per siti e web app, Sanity e Payload CMS per i contenuti, AdonisJS e PostgreSQL per i gestionali, Vercel AI SDK e Mastra per le funzioni di intelligenza artificiale.'
    },
    faq: {
      title: 'Domande frequenti',
      items: [
        {
          question: 'Quanto costa un gestionale su misura?',
          answer:
            'Dipende dal numero di moduli e dalle integrazioni con i programmi che usi già. [DA CONFERMARE: tua fascia di prezzo per un gestionale con 2-3 moduli, ad esempio "Un gestionale con 2-3 moduli parte da X euro".] Partire da una base già pronta riduce il costo rispetto a uno sviluppo da zero. Per confronto, le agenzie italiane indicano cifre molto diverse: da circa 5.000 euro per un gestionale con pochi moduli a 20.000-40.000 euro per il primo modulo di un progetto più strutturato.'
        },
        {
          question: 'In quanto tempo è pronto?',
          answer:
            '[DA CONFERMARE: es. "La prima versione funzionante è pronta in genere in 4-8 settimane"]. Poi si aggiungono le altre funzioni un modulo alla volta, mentre il sistema è già in uso.'
        },
        {
          question: 'Il software resta mio?',
          answer:
            '[DA CONFERMARE: condizioni su proprietà del codice e dei dati, licenza della base FisServer, possibilità di cambiare fornitore.]'
        },
        {
          question:
            'Posso partire da quello che uso già, come Excel o un vecchio gestionale?',
          answer:
            'Sì. I dati esistenti si importano nel nuovo sistema e, quando serve, il gestionale può scambiare dati con i programmi che tieni, ad esempio quello per la fatturazione elettronica.'
        },
        {
          question: 'Lavori anche con aziende lontane da te?',
          answer:
            'Sì, lavoro da remoto con aziende in tutta Italia. Analisi, presentazioni e aggiornamenti si fanno in videochiamata.'
        }
      ]
    },
    about: {
      title: 'Chi sono',
      paragraphs: [
        'Sono Christian Zanchetta, sviluppatore full-stack. Realizzo gestionali, web app e siti per micro e piccole imprese, lavorando da remoto con aziende in tutta Italia.',
        'Lavori direttamente con chi scrive il codice: nessun passaggio tra commerciale, project manager e sviluppatori, e le decisioni si prendono in una telefonata.',
        '[DA CONFERMARE: anni di esperienza e una riga su dove vivi, ad esempio "Italiano, vivo in Ungheria". Dirlo apertamente evita dubbi quando il cliente vede un numero o un fuso diverso.]'
      ],
      cta: 'Lavoriamo insieme'
    },
    contact: {
      title: 'Contatti',
      intro:
        'Raccontami in poche righe cosa vorresti migliorare. Ti rispondo [DA CONFERMARE: es. "entro un giorno lavorativo"] con qualche domanda per capire se e come posso aiutarti.'
    }
  },

  contactForm: {
    nameLabel: 'Nome',
    namePlaceholder: 'Il tuo nome',
    emailLabel: 'Email',
    emailPlaceholder: 'nome@azienda.it',
    subjectLabel: 'Oggetto',
    subjectPlaceholder: 'Di cosa si tratta',
    messageLabel: 'Messaggio',
    messagePlaceholder: 'Ad esempio: gestiamo gli ordini su Excel e vorremmo...',
    privacyBefore: "Ho letto l'",
    privacyAfter:
      ' e acconsento al trattamento dei dati per ricevere una risposta.',
    submit: 'Invia',
    submitting: 'Invio in corso...',
    errors: {
      name: 'Inserisci il tuo nome',
      email: 'Inserisci un indirizzo email valido',
      subject: "Scrivi un oggetto di almeno 5 caratteri",
      message: 'Scrivi almeno 10 caratteri',
      privacy: "Per inviare il messaggio devi accettare l'informativa privacy"
    },
    success: { title: 'Messaggio inviato', description: 'Ti rispondo a breve.' },
    failure: {
      title: 'Invio non riuscito',
      description: 'Riprova tra qualche minuto o scrivimi direttamente via email.'
    }
  },

  privacy: {
    linkLabel: 'informativa privacy',
    title: 'Informativa privacy',
    intro:
      'Prendo sul serio la tua privacy e voglio essere trasparente su come tratto i tuoi dati.',
    collectionTitle: 'Dati raccolti e utilizzo',
    collectionIntro:
      'Quando mi scrivi tramite il modulo di contatto, raccolgo queste informazioni:',
    collectionItems: [
      'Il tuo nome',
      'Il tuo indirizzo email',
      "L'oggetto del messaggio",
      'Il testo del messaggio'
    ],
    protectionTitle: 'Protezione dei dati',
    protectionIntro: 'Ti garantisco che:',
    protectionItems: [
      'Non conservo i tuoi dati personali oltre quanto serve per rispondere alla tua richiesta',
      'Non condivido le tue informazioni con terze parti',
      'Non uso i tuoi dati per finalità di marketing',
      'I tuoi dati non vengono inoltrati a servizi o organizzazioni esterne'
    ],
    cookiesTitle: 'Cookie e statistiche',
    cookiesParagraphs: [
      'Uso Vercel Web Analytics, che non usa cookie, non raccoglie dati personali e non ti segue su altri siti.',
      'Uso anche Google Analytics per capire come viene usato il sito. Google Analytics imposta dei cookie e viene caricato solo dopo che lo hai accettato nel banner dei cookie. Se rifiuti o ignori il banner, non viene impostato nessun cookie di Google Analytics e nessun dato viene inviato a Google. Puoi cambiare la tua scelta in qualsiasi momento con il link “Preferenze cookie” nel footer.'
    ],
    contactTitle: 'Contatti',
    contactText:
      'Se hai domande su questa informativa o su come tratto i tuoi dati, scrivimi tramite il modulo di contatto.'
  },

  cookie: {
    ariaLabel: 'Consenso ai cookie',
    textBefore:
      "Uso cookie di statistica (Google Analytics) per vedere come viene usato il sito. Vengono impostati solo se li accetti. Leggi l'",
    textAfter: '.',
    reject: 'Rifiuta',
    accept: 'Accetta'
  },

  footer: {
    copyright: 'Fiscet di Christian Zanchetta. Tutti i diritti riservati.',
    cookiePreferences: 'Preferenze cookie'
  },

  blog: {
    name: 'Blog di Fiscet',
    title: 'Blog: guide su gestionali, web app e siti | Fiscet',
    titleSuffix: ' | Fiscet',
    metaDescription:
      'Guide pratiche su gestionali, web app e siti per piccole imprese: quanto costano, come scegliere, casi reali.',
    intro:
      'Guide pratiche su gestionali, web app e siti per piccole imprese: costi, scelte e casi reali.',
    by: 'Di',
    published: 'Pubblicato',
    live: 'Online',
    comingPrefix: 'In arrivo il',
    read: 'Leggi',
    home: 'Home',
    breadcrumbLabel: 'Percorso',
    morePostsLabel: 'Altri articoli',
    previous: 'Precedente',
    next: 'Successivo'
  },

  langBadge: {
    srLabel: 'Lingua: '
  },

  servicePage: {
    cta: 'Parliamone'
  },

  notFound: {
    metaTitle: 'Pagina non trovata | Fiscet',
    title: 'Pagina non trovata',
    text: 'La pagina che cerchi non esiste o è stata spostata.',
    cta: 'Torna alla home'
  }
};
