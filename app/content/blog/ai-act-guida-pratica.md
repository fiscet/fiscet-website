---
slug: ai-act-guida-pratica
title: 'AI Act: la guida pratica per chi sviluppa e usa intelligenza artificiale'
description: "Cosa è già in vigore, cosa è stato rinviato e cosa fare subito, aggiornato alle scadenze reali di fine agosto 2026, per chi sviluppa e per chi usa l'IA."
publishedAt: 2026-08-31
seriesOrder: 44
lang: it
---

## Perché questa guida, e perché proprio ora

Il 2 agosto 2026 è stata per mesi indicata come la data in cui l'AI Act sarebbe "entrato pienamente in vigore". Non è andata così. A metà 2026 le istituzioni europee hanno approvato un pacchetto di semplificazione (il cosiddetto "Digital Omnibus") che ha rinviato proprio gli obblighi più pesanti (quelli sui sistemi ad alto rischio), mantenendo invece invariati altri obblighi che erano già in calendario.

Il risultato pratico: alcune cose sono obbligatorie da oggi, altre lo diventeranno tra uno o due anni, altre ancora sono in vigore da tempo e vengono spesso ignorate perché meno note. Questa guida distingue le tre categorie e traduce ciascuna in azioni concrete, sia per chi sviluppa sistemi di intelligenza artificiale sia per chi li usa in un'organizzazione.

Non troverai qui un commento giuridico articolo per articolo: l'obiettivo è capire cosa fare, non diventare esperti di diritto della IA.

## La logica dell'AI Act in breve

Il regolamento non tratta l'intelligenza artificiale come un blocco unico. Classifica i sistemi per livello di rischio e applica obblighi proporzionati:

| Livello di rischio | Trattamento | Esempio |
|---|---|---|
| Inaccettabile | Vietato in assoluto | Punteggio sociale dei cittadini da parte di un governo |
| Alto rischio | Consentito, con obblighi stringenti (documentazione, supervisione umana, gestione del rischio) | Software che seleziona i CV in fase di assunzione |
| Rischio limitato | Consentito, con obblighi di trasparenza | Chatbot di assistenza clienti |
| Rischio minimo | Nessun obbligo specifico | Filtro anti-spam, correttore ortografico |

Un secondo asse, altrettanto importante, distingue due ruoli:

- **Provider (fornitore)**: chi sviluppa un sistema di IA o un modello e lo immette sul mercato, anche gratuitamente.
- **Deployer (utilizzatore)**: chi usa un sistema di IA già sviluppato da altri, all'interno della propria attività professionale.

Gli obblighi cambiano parecchio a seconda del ruolo. Un'agenzia che usa un software di selezione del personale acquistato da un fornitore esterno è un deployer; il fornitore di quel software è il provider. Una persona che costruisce un'applicazione con l'API di un modello di linguaggio è, per quell'applicazione, un provider, anche se non ha addestrato alcun modello da zero.

## La timeline reale, aggiornata

Questa è la parte che quasi nessuna guida generica riporta correttamente, perché è cambiata nel corso del 2026.

| Data | Cosa è successo / cosa succede |
|---|---|
| Febbraio 2025 | Divieto delle pratiche a rischio inaccettabile (Art. 5) e obbligo generale di alfabetizzazione all'IA per il personale |
| Agosto 2025 | Obblighi per i fornitori di modelli di IA per finalità generali (GPAI) e avvio della governance europea (AI Office) |
| **2 agosto 2026** | Obblighi di trasparenza (chatbot, contenuti generati o manipolati, deepfake); piena vigilanza della Commissione sui fornitori GPAI; sanzioni pienamente applicabili |
| 2 dicembre 2026 | Fine della proroga tecnica di 4 mesi sulla marcatura (watermarking) per i sistemi già sul mercato al 2 agosto 2026; separatamente, fine del periodo transitorio per i due nuovi divieti introdotti nel 2026 (immagini intime non consensuali generate da IA, materiale di abuso sessuale su minori) |
| **2 dicembre 2027** *(rinviato da agosto 2026)* | Obblighi per i sistemi ad alto rischio "stand-alone" (Allegato III: selezione del personale, credito, giustizia, istruzione, servizi essenziali, ecc.) |
| **2 agosto 2028** *(rinviato da agosto 2027)* | Obblighi per l'IA incorporata in prodotti già regolamentati (Allegato I: dispositivi medici, macchinari, giocattoli, ecc.) |

Cosa significa in pratica: se oggi sviluppi o usi un chatbot, uno strumento che genera testo, immagini o video, sei già dentro obblighi vincolanti. Se sviluppi o usi un sistema che decide chi assumere, chi ottiene un prestito o come vengono valutati gli studenti, hai più tempo: non è un'esenzione, è un rinvio, e conviene prepararsi comunque.

## Le pratiche vietate (in vigore dal 2025)

Alcuni usi dell'IA non sono "ad alto rischio da gestire": sono vietati punto e basta, indipendentemente da chi li usa. Tra questi:

- Tecniche subliminali o manipolative che alterano il comportamento di una persona causandole un danno significativo
- Sfruttamento di vulnerabilità legate a età, disabilità o condizione economica
- Punteggio sociale ("social scoring") che porta a un trattamento pregiudizievole in contesti estranei a quello in cui i dati sono stati raccolti
- Riconoscimento delle emozioni sul posto di lavoro o negli istituti scolastici (salvo eccezioni per motivi medici o di sicurezza)
- Categorizzazione biometrica per dedurre origine etnica, opinioni politiche o orientamento sessuale
- Dal 2026: generazione non consensuale di immagini o video intimi, e generazione di materiale di abuso sessuale su minori

**Esempio per chi sviluppa**: un'agenzia di marketing che propone a un cliente un tool per "leggere le emozioni" dei dipendenti durante le riunioni tramite webcam sta proponendo qualcosa di vietato, non semplicemente rischioso. Va rifiutato o riprogettato, non "gestito con un disclaimer".

**Esempio per chi usa**: un'azienda che acquista un software HR che assegna un punteggio di affidabilità ai candidati incrociando dati social estranei alla candidatura rientra nello stesso divieto, anche se non ha sviluppato lei il software.

## Obblighi di trasparenza (in vigore dal 2 agosto 2026)

Questa è la parte più rilevante per la maggior parte di chi lavora con siti, app o contenuti digitali, perché riguarda strumenti già in uso ovunque.

Tre obblighi principali:

- **Dichiarare l'interazione con un'IA**: se un utente sta parlando con un chatbot o un sistema automatizzato, deve poterlo capire, a meno che non sia già ovvio dal contesto.
- **Marcare i contenuti generati o manipolati dall'IA**: immagini, audio, video e testo devono essere riconoscibili come artificiali attraverso soluzioni tecniche (marcatura, metadati) quando tecnicamente fattibile.
- **Dichiarare i deepfake**: contenuti che ritraggono in modo realistico persone, luoghi o eventi come autentici, quando non lo sono, vanno etichettati come tali, salvo eccezioni per opere palesemente satiriche o artistiche.

**Esempio per chi sviluppa**: se costruisci un assistente virtuale per l'e-commerce di un cliente basato su un modello di linguaggio, devi assicurarti che l'interfaccia comunichi chiaramente che non si sta parlando con una persona: un messaggio nel primo scambio o un'etichetta persistente sono sufficienti, il silenzio no.

**Esempio per chi usa**: uno studio di comunicazione che genera immagini con l'IA per una campagna pubblicitaria deve mantenere la marcatura tecnica del contenuto generato, anche dopo un editing successivo. Per le immagini questo obbligo non ha eccezioni legate alla revisione editoriale. L'eccezione per "contenuto rivisto e con responsabilità editoriale identificata" riguarda specificamente i testi generati dall'IA su temi di interesse pubblico (per esempio un articolo redazionale assistito dall'IA ma rivisto e firmato da una persona responsabile), non le immagini o i video.

## Modelli di IA per finalità generali - GPAI (in vigore dal 2025)

Riguarda chi sviluppa modelli "generalisti" (i modelli alla base di ChatGPT, Claude, Gemini e simili), non chi li usa tramite API o interfaccia.

I fornitori di questi modelli devono, tra le altre cose: mantenere una documentazione tecnica aggiornata, fornire informazioni ai fornitori di sistemi a valle che integrano il modello, rispettare il diritto d'autore anche rispetto ai dati di addestramento, e pubblicare una sintesi sufficientemente dettagliata dei contenuti usati per l'addestramento. I modelli classificati a "rischio sistemico" (per potenza di calcolo impiegata nell'addestramento) hanno obblighi aggiuntivi: valutazioni del modello, test avversariali, monitoraggio di incidenti gravi, misure di cybersicurezza.

**Esempio per chi sviluppa**: se stai facendo fine-tuning di un modello open-weight e lo distribuisci come prodotto a tua volta, potresti diventare tu stesso "fornitore" di quel modello derivato, con obblighi di documentazione verso chi lo userà.

**Esempio per chi usa**: un'azienda che integra l'API di un modello di terze parti nella propria applicazione non ha gli obblighi da fornitore di modello GPAI, ma resta comunque responsabile, come deployer, di come quel modello viene usato all'interno del proprio prodotto (per esempio sugli obblighi di trasparenza visti al punto 5).

## Sistemi ad alto rischio (rinviati, non eliminati)

Riguardano l'IA usata per decisioni che incidono in modo significativo sulle persone: selezione del personale, valutazione del credito, ammissione scolastica, gestione di infrastrutture critiche, giustizia, controllo delle frontiere, servizi assicurativi e sociali essenziali.

Gli obblighi principali includono: un sistema di gestione del rischio documentato, dati di addestramento verificati per qualità e possibili bias, supervisione umana effettiva (non solo formale), tracciabilità e log delle decisioni, valutazione di conformità prima dell'immissione sul mercato.

Il rinvio al 2 dicembre 2027 (sistemi stand-alone) e al 2 agosto 2028 (IA incorporata in prodotti regolamentati) dà tempo, ma chi opera in questi settori farebbe bene a non aspettare l'ultimo mese: i sistemi di gestione del rischio e la documentazione richiesta non si costruiscono in poche settimane.

**Esempio per chi sviluppa**: un fornitore di software per la valutazione automatica dei curriculum ha oggi la finestra temporale giusta per progettare fin da subito tracciabilità delle decisioni e possibilità di intervento umano, invece di doverle aggiungere in fretta nel 2027.

**Esempio per chi usa**: un'azienda che valuta di adottare un sistema di scoring creditizio basato su IA può usare questo tempo per chiedere al fornitore, per contratto, la documentazione di conformità che dovrà comunque esibire come deployer.

## Alfabetizzazione all'IA (obbligo attenuato, non sparito)

L'obbligo, in vigore dal 2025, richiedeva inizialmente di garantire un livello adeguato di competenza sull'IA al personale che la usa o la sviluppa. Con la revisione del 2026 il testo è stato ammorbidito: ora si richiede di adottare "misure a supporto" dello sviluppo di questa competenza, un impegno meno stringente ma comunque presente.

**Esempio pratico**: non serve un corso di certificazione formale, ma serve poter dimostrare, se richiesto, che l'organizzazione ha fatto qualcosa di concreto: una sessione interna, materiale di formazione, linee guida scritte su cosa il personale può o non può fare con gli strumenti di IA a disposizione.

## Le sanzioni

Le sanzioni sono pienamente applicabili dal 2 agosto 2026 e sono proporzionate alla gravità della violazione:

- Fino a 35 milioni di euro o il 7% del fatturato globale annuo (il valore più alto) per le pratiche vietate
- Fino a 15 milioni di euro o il 3% del fatturato per la violazione degli altri obblighi (compresi quelli sui sistemi ad alto rischio e sui modelli GPAI, quando applicabili)
- Fino a 7,5 milioni di euro o l'1% del fatturato per informazioni false o fuorvianti fornite alle autorità

Per le piccole e medie imprese e le startup, la sanzione applicata è la più bassa tra le due soglie (percentuale o importo fisso), non la più alta: una tutela pensata apposta per non schiacciare le realtà più piccole.

## Checklist operativa

**Se sviluppi sistemi di IA (anche solo un'app che usa un'API esterna):**

- [ ] Verifica se quello che stai costruendo rientra tra le pratiche vietate: in caso di dubbio, riprogetta prima di lanciare
- [ ] Se l'utente interagisce con un sistema automatizzato, rendilo esplicito nell'interfaccia
- [ ] Se generi contenuti (testo, immagini, audio, video), verifica la marcatura tecnica disponibile e mantienila lungo la catena di distribuzione del contenuto
- [ ] Se operi in un settore ad alto rischio (HR, credito, education, sanità, giustizia), inizia già ora a documentare dati di addestramento, criteri decisionali e possibilità di intervento umano
- [ ] Se distribuisci o modifichi un modello di terzi, verifica se questo ti rende a tua volta "fornitore" con obblighi di documentazione
- [ ] Tieni una minima documentazione interna delle scelte progettuali legate all'IA: in caso di controllo, è quello che verrà richiesto per primo

**Se usi sistemi di IA in azienda (anche solo un tool acquistato da terzi):**

- [ ] Fai un inventario reale degli strumenti di IA usati in azienda: non solo quelli scelti dall'IT, ma anche quelli adottati singolarmente da reparti o persone
- [ ] Per ogni strumento, individua se il fornitore ha reso disponibile la documentazione di trasparenza richiesta
- [ ] Se usi chatbot o assistenti automatizzati verso clienti, controlla che comunichino la propria natura artificiale
- [ ] Se il tuo settore rientra tra quelli ad alto rischio, comincia a chiedere ai fornitori la documentazione di conformità per contratto, anche prima della scadenza del 2027-2028
- [ ] Metti per iscritto anche solo poche righe di linee guida interne su cosa il personale può fare con gli strumenti di IA disponibili
- [ ] Aggiorna i contratti con i fornitori di IA su accesso ai dati, proprietà degli output e diritti di audit

## Fonti

- [AI Act, cosa entra in vigore dal 2 agosto 2026 e cosa slitta (Agenda Digitale)](https://www.agendadigitale.eu/sicurezza/ai-act-cosa-entra-in-vigore-dal-2-agosto-2026-e-cosa-slitta/)
- [EU AI Act's High-Risk Deadline: Deferred, Not Cancelled (Cloud Security Alliance)](https://labs.cloudsecurityalliance.org/research/csa-research-note-eu-ai-act-high-risk-deadline-omnibus-20260/)
- [EU AI Act Omnibus Agreement: Postponed High-Risk Deadlines and Other Key Changes (Gibson Dunn)](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/)
