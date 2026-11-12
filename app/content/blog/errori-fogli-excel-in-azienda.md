---
slug: errori-fogli-excel-in-azienda
title: "Fogli Excel in azienda: quanti errori contengono davvero"
description: "In uno studio su 50 fogli Excel aziendali, l'86% conteneva almeno un errore nei risultati. Quando un foglio regge e quando conviene cambiare strumento."
publishedAt: 2026-11-10
lang: it
seriesOrder: 0
---

Quasi tutti i fogli Excel usati per lavoro contengono qualche errore. In uno studio pubblicato nel 2009 sul Journal of Organizational and End User Computing, un gruppo di ricercatori della Tuck School of Business (Dartmouth College) ha esaminato 50 fogli di calcolo usati davvero in aziende ed enti: l'86% conteneva almeno un errore che produceva un risultato sbagliato. Le formule errate erano lo 0,87% del totale. Sembra poco, ma in un foglio con mille formule vuol dire, in media, quasi nove formule sbagliate.

Questo non significa che Excel vada abbandonato. Significa che un foglio di calcolo va trattato per quello che è: uno strumento comodo e flessibile, che però non controlla da solo la correttezza di quello che contiene. In questo articolo vediamo cosa dicono le ricerche, quali errori sono più comuni in una piccola impresa e quando un foglio ha smesso di essere un foglio ed è diventato, senza che nessuno lo decidesse, il gestionale dell'azienda.

## Cosa dicono le ricerche

Lo studio citato (Powell, Baker e Lawson, "Errors in Operational Spreadsheets") ha raccolto fogli, tra gli altri, da società di consulenza, una banca, un'università, un'azienda energetica e un ente pubblico. Con una definizione più ampia di errore, che include anche formule fragili o mal costruite, solo 3 fogli su 50 erano del tutto puliti.

Un secondo lavoro degli stessi autori, pubblicato su Decision Support Systems, ha provato a misurare l'impatto. Su 25 fogli di cinque organizzazioni sono stati trovati 117 errori: 47 non avevano alcun effetto sui numeri, 70 sì. Molti avevano un peso trascurabile, ma in un caso l'errore valeva più di 110 milioni di dollari. Gli autori arrivano a una conclusione equilibrata: gli errori sono frequenti, quelli gravi sono rari, e la qualità dipende molto da chi costruisce il foglio e da come lo fa.

Per una piccola impresa la lezione è proprio questa: il rischio non è che ogni foglio sia sbagliato, ma che nessuno sappia quale lo è.

## Un caso noto: quando il foglio non basta più

Nell'autunno del 2020 Public Health England, l'agenzia sanitaria inglese, ha dichiarato che 15.841 casi positivi di COVID-19, registrati tra il 25 settembre e il 2 ottobre, non erano finiti nei conteggi giornalieri. I risultati dei laboratori venivano caricati in un file nel vecchio formato .xls, che ammette al massimo 65.536 righe. Superato il limite, i dati in più restavano fuori dal conteggio.

Nessuna piccola impresa ha volumi di quel tipo, ma il meccanismo è lo stesso che si vede in tanti uffici: uno strumento nato per una cosa piccola viene usato per una cosa più grande, e nessuno si accorge del momento in cui smette di funzionare.

## Gli errori più comuni in una piccola impresa

Nei fogli che si trovano in un'azienda di dieci o venti persone, per tenere listini, preventivi, ordini, magazzino o scadenze, gli errori tipici sono pochi e ricorrenti:

- **Numeri scritti al posto delle formule.** Qualcuno sovrascrive un totale con un valore fisso per "sistemarlo" e da quel momento la cella non si aggiorna più.
- **Intervalli che non seguono i dati.** Una somma che arriva fino alla riga 200, mentre l'elenco nel frattempo è arrivato alla riga 230.
- **Copia e incolla tra fogli.** Una colonna incollata sopra un'altra con un ordine di righe diverso, e i prezzi finiscono sugli articoli sbagliati.
- **Versioni multiple.** "Listino_2026_def.xlsx", "Listino_2026_def2.xlsx" e una copia nell'allegato di un'email: nessuno sa più quale sia quello buono.
- **Nessuno storico.** Il foglio dice che un cliente ha uno sconto del 12%, ma non chi l'ha inserito, quando e perché.

Sono errori umani, non difetti del programma. Il punto è che il foglio di calcolo non fa nulla per impedirli.

## Quando un foglio è diventato un gestionale

Un foglio Excel funziona bene finché lo usa una persona, per un compito circoscritto, e i numeri si possono ricontrollare a occhio. Le cose cambiano quando compaiono alcuni segnali:

- il file lo aggiornano più persone, a volte nello stesso momento;
- dal foglio dipendono decisioni con un costo: prezzi ai clienti, ordini ai fornitori, pagamenti;
- per sapere una cosa bisogna incrociare due o tre file diversi;
- c'è una sola persona che "sa come funziona" e, quando è in ferie, il foglio non si tocca;
- il file è diventato lento, o qualcuno ha già dovuto dividerlo in più parti.

Se ti riconosci in due o tre di questi punti, il foglio sta facendo il lavoro di un gestionale, ma senza le protezioni di un gestionale: utenti con permessi diversi, campi obbligatori, controlli sui valori inseriti, uno storico delle modifiche. Non è un caso isolato. Secondo l'ISTAT, nel 2025 usava un software gestionale ERP il 48,8% delle PMI italiane con almeno 10 addetti, contro l'85,9% delle grandi imprese. Nelle altre, molto spesso, quel ruolo lo svolgono proprio i fogli di calcolo.

## Come ridurre gli errori se resti su Excel

Passare a un altro strumento non è sempre necessario, e non è mai una decisione da prendere in fretta. Intanto, alcune abitudini riducono molto il rischio:

1. **Separa i dati dai calcoli.** Un foglio solo per i dati inseriti a mano, un altro per formule e riepiloghi. Chi inserisce non tocca le formule.
2. **Proteggi le celle con le formule** e lascia modificabili solo quelle da compilare.
3. **Usa le tabelle di Excel** invece degli intervalli fissi: le formule si estendono da sole quando aggiungi righe.
4. **Aggiungi convalide sui dati**, per esempio elenchi a discesa per i codici articolo o limiti sui valori di sconto.
5. **Tieni un solo file condiviso**, in una cartella in cloud con la cronologia delle versioni, e smetti di mandarlo in allegato.
6. **Inserisci qualche riga di controllo**: un totale calcolato in due modi diversi che deve dare lo stesso risultato. Se non torna, lo vedi subito.

Per il caso specifico del magazzino, l'articolo su [gestione del magazzino con Excel](/blog/gestione-magazzino-excel) propone un modello gratuito e spiega dove arrivano i suoi limiti.

## Quando conviene cambiare strumento

Se le regole sopra non bastano, perché le persone che usano il file sono troppe o perché i dati vanno collegati a ordini, fatture e clienti, il passo successivo è un database con un'interfaccia pensata per chi lo usa: un gestionale già pronto o uno sviluppato sui propri processi. In entrambi i casi il guadagno principale non è la velocità, ma il fatto che certi errori diventano impossibili: un campo obbligatorio non si può lasciare vuoto, un prezzo non si può sovrascrivere senza lasciare traccia, due persone non possono lavorare su due versioni diverse.

Per capire quale delle due strade abbia più senso nel tuo caso, puoi partire dai criteri raccolti in [Gestionale pronto o su misura?](/blog/gestionale-pronto-o-su-misura).

## In sintesi

Le ricerche sui fogli di calcolo aziendali trovano errori nella grande maggioranza dei file esaminati, quasi sempre piccoli e qualche volta molto costosi. Per una piccola impresa il primo passo non è eliminare Excel, ma sapere quali fogli reggono decisioni importanti, proteggerli e controllarli. Quando un foglio è usato da più persone e tiene insieme clienti, ordini e prezzi, vale la pena chiedersi se sia ancora lo strumento giusto.

## Fonti

- [Powell, Baker, Lawson, Errors in Operational Spreadsheets, Journal of Organizational and End User Computing (2009)](https://mba.tuck.dartmouth.edu/spreadsheet/product_pubs_files/Errors.pdf)
- [Powell, Baker, Lawson, Impact of Errors in Operational Spreadsheets, Decision Support Systems (arXiv)](https://arxiv.org/pdf/0801.0715)
- [The Register, il limite del formato .xls e i casi COVID-19 non conteggiati (5 ottobre 2020)](https://www.theregister.com/2020/10/05/excel_england_coronavirus_contact_error/)
- [UKAuthority, PHE confirms file size issue caused Covid-19 undercounting](https://ukauthority.com/articles/phe-confirms-file-size-issue-caused-covid-19-undercounting/)
- [ISTAT, Imprese e ICT, anno 2025 (comunicato stampa, 15 dicembre 2025)](https://www.istat.it/comunicato-stampa/imprese-e-ict-anno-2025/)
