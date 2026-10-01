---
title: "Sviluppo web app per aziende, su misura | Fiscet"
description: "Web app su misura per aziende: preventivatori, dashboard, aree clienti, prenotazioni. Funzionano nel browser e su smartphone, senza store."
h1: "Sviluppo di web app su misura per aziende"
faq:
  - q: "Quanto costa una web app su misura?"
    a: "Dipende da quante funzioni servono e da quali programmi deve collegarsi. [DA CONFERMARE: fascia indicativa per una web app semplice, ad esempio un preventivatore o un'area clienti.] Dopo la prima chiamata ricevi un preventivo scritto, con il perimetro della prima versione."
  - q: "Funziona anche su smartphone?"
    a: "Sì. Una web app si adatta allo schermo e si può aggiungere alla schermata Home del telefono, dove si apre come un'app, senza passare dagli store."
  - q: "Si può collegare al gestionale o al sito che uso già?"
    a: "Nella maggior parte dei casi sì, se il programma esistente permette di scambiare dati (tramite API o esportazioni). Lo si verifica nella prima chiamata, prima di fare il preventivo."
  - q: "Chi si occupa di server, sicurezza e aggiornamenti?"
    a: "[DA CONFERMARE: hosting e manutenzione inclusi nel prezzo, a canone mensile o a parte.]"
---

Una web app è un programma che si usa dal browser, da computer o da smartphone, senza installare nulla. Per una piccola impresa è spesso il modo più diretto per trasformare un lavoro fatto a mano, tra fogli Excel, email e telefonate, in uno strumento che fa una parte del lavoro al posto tuo.

## Cosa si può costruire

- **Preventivatore online.** Il cliente sceglie le opzioni sul tuo sito e vede subito un prezzo indicativo. A te arriva una richiesta già completa, invece di una mail da cui partire con dieci domande.
- **Area riservata per i clienti.** Documenti, ordini e stato delle pratiche consultabili in autonomia, a qualsiasi ora, senza che qualcuno debba rispondere al telefono.
- **Prenotazioni e appuntamenti.** Un calendario che segue le tue regole (durate, risorse, pause, giorni di chiusura), con conferme e promemoria automatici.
- **Dashboard aziendale.** I numeri che oggi ricostruisci a mano a fine mese (vendite, ordini, scadenze) in una pagina sempre aggiornata.
- **Strumenti interni.** Rapportini dei tecnici compilati dal telefono, checklist di controllo qualità, gestione delle richieste tra reparti.

## Web app o app da scaricare?

Un'app tradizionale si scarica da App Store o Google Play e va sviluppata e pubblicata per ciascuna piattaforma, con le regole e i tempi di approvazione degli store. Una web app funziona nel browser, si aggiorna una volta sola per tutti gli utenti e si può comunque installare sulla schermata del telefono.

Per la maggior parte degli strumenti aziendali la web app è sufficiente e costa meno. L'app da scaricare ha senso quando servono funzioni del telefono che il browser non offre, o quando la presenza negli store è parte del prodotto.

## Come la sviluppo

Ogni web app parte da **FisServer**, la base software che ho costruito e collaudato su altri progetti: accesso degli utenti, ruoli e permessi, separazione dei dati tra aziende, sicurezza, API. Queste parti non si riscrivono ogni volta, quindi il tempo del progetto va nelle funzioni che servono a te.

Per l'interfaccia uso Next.js. Quando servono funzioni di intelligenza artificiale, come un assistente che risponde alle domande dei clienti, uso il Vercel AI SDK. Due esempi concreti:

- **FisEvents**: piattaforma per creare il sito di un evento e gestire gli iscritti.
- **FisApart**: assistente conversazionale che risponde ai clienti di un sito di prenotazioni.

## Come si procede

1. **Una chiamata** per capire il processo di oggi e il risultato che vuoi ottenere.
2. **Un perimetro scritto**: cosa fa la prima versione, cosa resta per dopo, costi e tempi.
3. **La prima versione funzionante** `[DA CONFERMARE: in genere in X settimane]`, da provare con i tuoi dati reali.
4. **Miglioramenti e nuove funzioni**, una alla volta, mentre lo strumento è già in uso.

Se non sai ancora se ti serve uno strumento su misura o un software già pronto, puoi partire da [Build vs Buy](https://bvb.fiscet.it), lo strumento gratuito che analizza il tuo caso.
