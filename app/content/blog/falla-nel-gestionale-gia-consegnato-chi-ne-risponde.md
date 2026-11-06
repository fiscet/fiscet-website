---
slug: falla-nel-gestionale-gia-consegnato-chi-ne-risponde
title: "Falla nel gestionale già consegnato: chi ne risponde?"
description: "Un gestionale su misura consegnato anni fa ha una vulnerabilità e nessun canone di assistenza. Cosa dicono GDPR e Codice civile, e cosa conviene fare."
publishedAt: 2026-11-06
lang: it
seriesOrder: 0
---

In breve: se un gestionale su misura contiene una vulnerabilità e non c'è un contratto di assistenza, la responsabilità non ha una risposta unica. Una cosa però è chiara: tacere e non fare nulla è la scelta che espone di più chi ha sviluppato il software. La via più difendibile è informare il cliente per iscritto e proporre un intervento.

## Lo scenario

Immagina uno sviluppatore indipendente. Negli anni ha realizzato diversi gestionali su misura per piccole aziende: magazzino, fatturazione, prenotazioni. Li ha scritti da solo, spesso in fretta, senza un collega che rileggesse il codice. Dopo la consegna, molti clienti non pagano alcun canone di assistenza: il lavoro è finito, la fattura è stata saldata.

Oggi quel codice si può far analizzare da strumenti di intelligenza artificiale in pochi minuti. E il risultato, quasi sempre, è una lista di problemi. Non perché lo sviluppatore sia incompetente, ma perché scrivere software sicuro senza revisione è statisticamente difficile. L'OWASP, l'organizzazione di riferimento per la sicurezza delle applicazioni web, nella sua classifica 2025 mette al primo posto il controllo degli accessi errato e al secondo le configurazioni sbagliate.

I problemi più comuni sono questi:

- **Accessi non controllati**: un utente cambia un numero nell'indirizzo (`/fatture/123` diventa `/fatture/124`) e vede i dati di un altro cliente.
- **SQL injection**: un campo di testo viene inserito direttamente in una query al database, e un attaccante può leggerlo o modificarlo.
- **Password salvate in modo debole** o credenziali lasciate nel codice.
- **Configurazioni di produzione sbagliate**: modalità debug attiva, pannelli di amministrazione raggiungibili da internet, backup scaricabili da un indirizzo pubblico.
- **Componenti mai aggiornati**: framework e librerie con falle già note.

## Il problema vero: cosa fare ora che lo si sa

Correggere tutto richiede tempo e il cliente non paga. Avvisarlo rischia una risposta del tipo "dovevi pensarci prima". Tacere sembra la via più comoda. Ma a chi spetta la responsabilità se qualcuno sfrutta quella falla e sottrae i dati dei clienti dell'azienda?

La risposta onesta è che non è univoca. Dipende da chi gestisce cosa. Per capirlo servono alcuni concetti.

## Quattro concetti del GDPR

Il GDPR è il regolamento europeo sulla protezione dei dati personali. Se il gestionale contiene nomi, indirizzi, email o altri dati di persone, si applica.

**Titolare e responsabile del trattamento.** Il titolare è chi decide perché e come trattare i dati: di solito l'azienda cliente. Il responsabile è il fornitore che li tratta per conto del titolare. Una software house può diventare responsabile quando si occupa di installazione, assistenza e manutenzione che comportano accesso ai dati. Se invece il software è installato sui server del cliente, la gestione dell'infrastruttura resta al cliente.

**Articolo 28: il contratto con chi tratta i dati per tuo conto.** Non è il contratto di sviluppo. È un atto separato, spesso chiamato nomina a responsabile del trattamento, necessario solo quando il fornitore tratta dati personali per conto del cliente: per esempio gestisce l'hosting, accede al database per l'assistenza o fa migrazioni di dati. Stabilisce, tra l'altro, che il fornitore agisce solo su istruzioni documentate del cliente e applica misure di sicurezza adeguate. Se il fornitore ha accesso ai dati e questo atto manca, il Garante per la protezione dei dati personali può sanzionare entrambi. Se invece consegna il software e non ha alcun accesso ai dati, di norma non è responsabile del trattamento e l'articolo 28 non si applica.

**Articolo 32: la sicurezza.** Richiede misure tecniche e organizzative adeguate al rischio, tenendo conto dello stato dell'arte. Non significa "nessuna falla mai", ma "aver fatto quanto ragionevolmente possibile e aggiornarsi nel tempo".

**Articolo 33: la notifica.** In caso di violazione dei dati (data breach) che comporti un rischio per le persone, il titolare deve avvisare il Garante entro 72 ore dal momento in cui ne viene a conoscenza.

Sul fronte del risarcimento, l'articolo 82 pone l'obbligo in capo al fornitore che non abbia rispettato gli obblighi previsti specificamente per i responsabili.

## Cosa dice il Codice civile

A prescindere dalla privacy, c'è il rapporto contrattuale. Per il software su misura la giurisprudenza tende a considerare l'obbligazione come di risultato: il software deve funzionare come promesso. Il cliente può avere un concorso di colpa, ma questo non cancella la responsabilità del fornitore.

Un punto decisivo: l'articolo 1229 del Codice civile dichiara nulle le clausole che escludono la responsabilità per dolo o colpa grave. Anche con un contratto perfetto, chi sa di una falla grave e non fa nulla non è coperto. Pesa anche il dovere di buona fede (artt. 1175 e 1375): il fornitore ha un dovere di informazione verso il cliente.

## Cosa si rischia davvero: due casi

**Postel (2024).** Il Garante ha sanzionato Postel con 900.000 euro (provvedimento del 4 luglio 2024, reso noto il 22 ottobre 2024). Per quasi un anno l'azienda non è intervenuta su una vulnerabilità già nota e segnalata; le correzioni erano disponibili da novembre 2022. Tra le violazioni contestate gli articoli 32 e 33 del GDPR. Postel era però titolare dei propri sistemi, quindi il caso non è un precedente diretto per uno sviluppatore. Mostra però come viene valutato il comportamento: sapere e non agire pesa più della falla in sé.

**TuPassi.** Il Garante ha sanzionato sia Roma Capitale (500.000 euro) sia lo sviluppatore del sistema di prenotazione (40.000 euro), imponendo a quest'ultimo anche misure correttive. L'Autorità ha quindi colpito direttamente il fornitore, e i suoi rilievi possono aprire la strada a richieste di risarcimento civile contro chi consegna un prodotto con carenze di progettazione.

## Le tre strade

1. **Non fare nulla.** È la peggiore: da quando sai, la tua posizione cambia.
2. **Correggere in silenzio.** Risolve il problema tecnico, ma modifica un sistema altrui senza mandato, impedisce al cliente di decidere e, se c'è già stata una violazione, può cancellare le tracce utili. Se qualcosa si rompe, sei solo.
3. **Dirlo, per iscritto, con una proposta.** È la più scomoda nell'immediato e la più difendibile.

## Cosa fare, concretamente

- **Ordina i problemi per gravità.** Accessi non controllati, SQL injection e credenziali esposte vengono prima di tutto.
- **Salva i log prima di cambiare qualcosa** e cerca segni di sfruttamento passato.
- **Scrivi al cliente** (email o PEC): cosa hai trovato, che rischio comporta, cosa proponi, entro quando. Tono tecnico, non allarmista.
- **Correggi i problemi critici con un accordo semplice**, anche gratuito, e proponi un canone di assistenza per il resto.
- **Se emergono segni di violazione, avvisa subito il cliente.** Le 72 ore sono le sue.
- **Per i lavori futuri**: contratto con perimetro, canone di manutenzione, limitazione di responsabilità ragionevole e, se avrai accesso ai dati, nomina a responsabile ex art. 28.

Alla risposta "dovevi pensarci prima" c'è una replica corretta: il rischio esiste che io te lo dica o no. Dirlo ti dà la possibilità di decidere.

## Un fronte ancora aperto

Il Cyber Resilience Act (Regolamento UE 2024/2847) introduce obblighi di segnalazione delle vulnerabilità sfruttate dall'11 settembre 2026, con sanzioni fino a 15 milioni di euro, anche per prodotti già sul mercato. Non è però chiaro se un gestionale scritto su misura per un solo cliente rientri tra i "prodotti messi a disposizione sul mercato". È un punto da seguire, non una certezza.

## Se il gestionale è nella tua azienda

Vale la pena chiedere al fornitore se il software è mai stato sottoposto a un controllo di sicurezza, chi lo aggiorna oggi e che cosa prevede il contratto in caso di incidente. Sono domande legittime, e porle prima è più semplice che gestire un problema dopo. Per chi deve impostare un gestionale su misura con regole chiare di manutenzione, c'è la pagina sullo [sviluppo di web app e gestionali](/sviluppo-web-app).

## Fonti

- [Postel, sanzione di 900mila euro (Garante privacy, newsletter 22 ottobre 2024)](https://www.garanteprivacy.it/garante/doc.jsp?ID=10066116)
- [Postel: patch disponibili da novembre 2022 (Punto Informatico)](https://www.punto-informatico.it/postel-multa-900000-euro-data-breach-2023/)
- [Data breach, il Garante Privacy sanziona Postel: le violazioni accertate (Diritto.it)](https://www.diritto.it/data-breach-il-garante-privacy-sanziona-postel/)
- [TuPassi, sanzioni del Garante a Roma Capitale e al fornitore (AGI)](https://www.agi.it/cronaca/news/2021-01-25/privacy-garante-sanzione-comune-e-roma-roma-per-servizio-tupassi-11146644/)
- [TuPassi: perché la sanzione del Garante è un monito per gli sviluppatori (Cybersecurity360)](https://www.cybersecurity360.it/?p=43111)
- [OWASP Top 10 2025: cosa cambia (Orca Security)](https://orca.security/resources/blog/owasp-top-10-2025-key-changes/)
- [Software house e ruolo di responsabile del trattamento (Agenda Digitale)](https://www.agendadigitale.eu/?p=237544)
- [Il ruolo del responsabile del trattamento e l'art. 28 (ICT Security Magazine)](https://www.ictsecuritymagazine.com/articoli/il-ruolo-del-responsabile-del-trattamento-nella-gestione-della-sicurezza-dei-dati-aspetti-contrattuali-e-pratici/)
- [Responsabilità del fornitore e art. 82 GDPR (Cybersecurity360)](https://www.cybersecurity360.it/?p=53992)
- [Software su misura e responsabilità della software house (Canella Camaiora)](https://canellacamaiora.it/?p=33172)
- [Artt. 32 e 33 GDPR, notifica entro 72 ore (Money.it)](https://www.money.it/se-stai-sviluppando-un-app-per-la-tua-azienda-non-puoi-ignorare-questo-aspetto)
- [Cyber Resilience Act, obblighi di notifica dell'art. 14 (Agenda Digitale)](https://www.agendadigitale.eu/sicurezza/cyber-resilience-act-al-via-gli-obblighi-di-notifica-dellarticolo-14/)
- [CRA: le segnalazioni valgono anche per i prodotti già sul mercato (cyberresilienceact.eu)](https://www.cyberresilienceact.eu/it/news/legacy-products-in-scope-cra-reporting-11-september-2026.html)
