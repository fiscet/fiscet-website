---
slug: creare-un-gestionale-con-ai
title: "Creare un gestionale con l'AI: cosa funziona e cosa no"
description: "Si può creare un gestionale con l'intelligenza artificiale? Cosa si ottiene con gli strumenti di oggi, dove si rompe e quando serve uno sviluppatore."
publishedAt: 2026-10-06
lang: it
seriesOrder: 0
---

Tra le domande che Google associa alla ricerca "gestionale su misura" c'è questa: come posso creare un gestionale con l'intelligenza artificiale? È una domanda legittima. Strumenti come Lovable, Bolt, Replit o v0, e gli assistenti generici come ChatGPT e Claude, producono un'applicazione funzionante a partire da una descrizione scritta in italiano.

La risposta breve è che con l'AI si ottiene in un pomeriggio qualcosa che sembra un gestionale. Un gestionale su cui l'azienda può contare ogni giorno, con più persone, dati veri e clienti che si aspettano che funzioni, è un'altra cosa. Questo articolo prova a separare le due.

Premessa: uso agenti AI per scrivere codice ogni giorno. Non è un articolo contro l'AI, ma su come usarla senza farsi male.

## Cosa funziona davvero

**Un prototipo per capire cosa vuoi.** È probabilmente l'uso più utile. Descrivere il proprio processo a uno strumento AI e vedere comparire schermate, campi ed elenchi costringe a chiarire le idee: quali dati servono, chi li inserisce, cosa deve succedere dopo. Un prototipo così, anche se poi non verrà usato, è il miglior punto di partenza per parlare con uno sviluppatore.

**Strumenti personali e a basso rischio.** Un elenco di contatti per uso proprio, un calcolatore, un piccolo archivio che usi solo tu e che puoi ricostruire se si perde. Qui i limiti descritti sotto contano poco.

**Interfacce e schermate.** L'AI è molto brava a generare l'aspetto di un'applicazione: tabelle, moduli, filtri, pagine di dettaglio. È la parte che si vede, e per questo il risultato sembra più completo di quanto sia.

## Dove si rompe

I problemi di un gestionale generato con l'AI raramente si vedono il primo giorno. Emergono quando lo usano più persone, quando i dati crescono o quando serve una modifica.

**1. Chi vede cosa.** In un gestionale ogni utente deve vedere solo i dati che gli competono: l'agente i suoi clienti, il cliente i suoi ordini. È la parte più delicata da progettare e la più facile da sbagliare. Un errore qui non dà messaggi di errore: semplicemente qualcuno vede dati che non dovrebbe vedere.

**2. I controlli che stanno solo nel browser.** Un errore frequente nel codice generato è nascondere un pulsante a chi non ha i permessi, senza impedire davvero l'operazione sul server. Per l'utente sembra tutto a posto; per chi sa dove guardare, la porta è aperta.

**3. I dati nel tempo.** Il primo schema dei dati va bene per il prototipo. Quando servono nuovi campi o nuove relazioni, i dati esistenti vanno trasformati senza perderli. I backup devono esistere ed essere stati provati almeno una volta.

**4. Le modifiche successive.** Ogni richiesta all'AI riscrive una parte del codice. Senza test automatici, nessuno si accorge che la modifica di oggi ha rotto una funzione usata una volta al mese, fino al giorno in cui serve.

**5. Le integrazioni.** Fatturazione elettronica, gestionale contabile, corrieri, banca. Sono collegamenti con regole precise, documentazione da leggere e casi limite da gestire.

**6. Privacy e responsabilità.** Un gestionale contiene dati di clienti, fornitori e dipendenti. Dove sono i server, chi può accedervi, come si cancellano i dati su richiesta: sono obblighi previsti dal GDPR, non dettagli tecnici.

**7. Chi risponde quando non funziona.** Quando il gestionale si blocca durante una giornata di lavoro, serve qualcuno che conosca il codice e sappia dove mettere le mani.

## Un modo sensato di usare l'AI

**Per te, che hai un'azienda:** usa l'AI per costruire un prototipo e per mettere per iscritto i requisiti. Porta entrambi a uno sviluppatore. Risparmierai settimane di analisi e riceverai un preventivo più preciso.

**Per chi sviluppa:** l'AI accelera molto il lavoro, a patto che lavori dentro regole che non può aggirare. Nel mio caso, i gestionali partono da FisServer, una base in cui l'accesso ai dati passa da un unico punto che applica sempre azienda di appartenenza e permessi dell'utente. Anche il codice scritto con l'aiuto dell'AI deve passare da lì, quindi un errore in una schermata non può trasformarsi in un accesso ai dati di qualcun altro. Il resto lo fanno test automatici e revisione del codice.

L'AI non elimina il lavoro dello sviluppatore. Ne sposta il peso: meno tempo a scrivere codice ripetitivo, più tempo a decidere come deve funzionare il sistema e a verificare che funzioni.

## Se hai già creato un gestionale con l'AI

Prima di usarlo con dati veri e più persone, verifica questi punti:

- Un utente può vedere o modificare i dati di un altro cambiando un numero nell'indirizzo della pagina?
- I permessi sono controllati sul server o solo nascondendo pulsanti?
- Esiste un backup automatico, e hai provato almeno una volta a ripristinarlo?
- Le chiavi di accesso ai servizi esterni sono fuori dal codice visibile nel browser?
- Puoi esportare tutti i dati in un formato standard, se un giorno vorrai cambiare strumento?
- Sai dove si trovano fisicamente i server e chi li gestisce?

Se anche una sola risposta è "non lo so", conviene far controllare il progetto da uno sviluppatore prima di metterci dentro i dati dei clienti. Spesso il prototipo si può salvare: serve rimettere in sicurezza le fondamenta, non rifare tutto.

Per capire quanto costa uno sviluppo professionale c'è la guida [Quanto costa un gestionale su misura](/blog/quanto-costa-un-gestionale-su-misura). Se vuoi un parere sul tuo prototipo, puoi scrivermi dalla [pagina dei contatti](/#contact).
