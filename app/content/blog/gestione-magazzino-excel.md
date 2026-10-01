---
slug: gestione-magazzino-excel
title: "Gestione magazzino con Excel: modello gratuito e limiti"
description: "Un modello Excel gratuito per carico, scarico e giacenze, le regole per usarlo senza errori e i segnali che indicano quando passare a un gestionale."
publishedAt: 2026-10-22
lang: it
seriesOrder: 0
---

Molte piccole imprese gestiscono il magazzino con un foglio Excel, e per un po' funziona bene: costa niente, lo sanno usare tutti e si adatta a qualsiasi modo di lavorare. I problemi arrivano quando il file cresce, quando lo aggiornano più persone o quando la giacenza scritta nel foglio smette di coincidere con quella sugli scaffali.

Questa guida contiene un modello Excel gratuito, le regole per impostarlo in modo che regga nel tempo e i segnali che indicano quando è il momento di passare a un gestionale.

## Il modello gratuito

[Scarica il modello di gestione magazzino in Excel](/downloads/modello-gestione-magazzino.xlsx)

Il file ha quattro fogli:

- **Istruzioni**: come compilarlo, in una pagina.
- **Articoli**: un articolo per riga, con codice univoco, descrizione, unità di misura, scorta minima, ubicazione e fornitore.
- **Movimenti**: ogni entrata, uscita o correzione da inventario, una riga per movimento, con data, codice, tipo, quantità e documento di riferimento. Codice e tipo si scelgono da un elenco, così non si possono scrivere valori sbagliati.
- **Giacenze**: si calcola da solo a partire dai movimenti e colora in rosso gli articoli sotto la scorta minima. Non va mai compilato a mano.

Il file contiene qualche riga di esempio, da cancellare prima di iniziare.

## Le regole che lo fanno funzionare

La differenza tra un foglio di magazzino affidabile e uno inaffidabile non sta nelle formule, ma in poche regole rispettate da tutti.

**1. La giacenza non si scrive, si calcola.** Il primo errore è tenere una colonna "quantità" e modificarla a ogni entrata e uscita. Dopo qualche settimana nessuno sa più perché quel numero è quello. Si registrano i movimenti e la giacenza è la loro somma.

**2. Un codice univoco per ogni articolo.** "Vite M6", "vite m6 inox" e "VITE M6X20" sono tre articoli diversi per Excel. Il codice va deciso una volta e usato sempre, la descrizione serve solo a leggerlo.

**3. Un movimento per riga, con il documento di riferimento.** Numero di DDT, fattura o commessa. Tra sei mesi è l'unico modo per capire perché quel movimento esiste.

**4. Le differenze di inventario si registrano, non si sovrascrivono.** Se al conteggio mancano due pezzi si registra una rettifica di meno due. In questo modo le differenze restano visibili, e se si ripetono sugli stessi articoli indicano un problema da cercare.

**5. Un solo file, condiviso.** Copie inviate per email e file "magazzino_definitivo_v3" portano a giacenze diverse a seconda di chi le guarda. Se più persone devono accedere, il file va tenuto in uno spazio condiviso che permetta di lavorarci insieme, come OneDrive o SharePoint per Excel.

**6. Un inventario fisico a intervalli regolari.** Anche il foglio migliore si allontana dalla realtà. Un conteggio periodico, almeno sugli articoli che si muovono di più, riporta i numeri a terra.

## I limiti di Excel per il magazzino

Excel è un ottimo strumento di calcolo, ma non è nato per fare da archivio condiviso. Con un magazzino che cresce, i limiti emergono in un ordine abbastanza prevedibile.

- **Più persone allo stesso tempo.** Anche con un file condiviso, le modifiche contemporanee alle stesse righe e le copie locali generano conflitti difficili da ricostruire.
- **Errori silenziosi.** Una formula cancellata per sbaglio, una riga incollata fuori dalla tabella, un codice scritto con uno spazio in più. Il foglio continua a funzionare e mostra numeri sbagliati senza avvisare nessuno.
- **Nessuna traccia di chi ha cambiato cosa.** Quando un numero non torna, non c'è modo di sapere chi ha modificato quella riga e quando.
- **Nessun collegamento con il resto.** Ordini, documenti di trasporto e fatture vivono in altri file o programmi, e i dati si ricopiano a mano. Ogni copia è un'occasione di errore e un costo in ore.
- **Lotti, scadenze, matricole, più magazzini.** Si possono aggiungere colonne, ma la complessità del foglio cresce molto più in fretta dell'utilità.
- **Uso dal telefono, in magazzino.** Compilare un foglio Excel dallo smartphone tra gli scaffali è scomodo, e quindi si rimanda a fine giornata, quando i dettagli sono già dimenticati.

## Quando è il momento di passare a un gestionale

Nessuno di questi segnali da solo impone un cambio. Se però ne riconosci tre o più, il costo nascosto del foglio Excel probabilmente supera già quello di uno strumento dedicato.

- Il file lo aggiornano più di due o tre persone.
- Qualcuno passa ore ogni settimana a ricopiare dati tra il magazzino e altri file o programmi.
- All'inventario le differenze sono frequenti e non si capisce da dove vengano.
- Per rispondere a un cliente o a un agente devi chiedere a chi gestisce il file.
- Devi tracciare lotti o scadenze per obbligo o per contratto.
- Il file funziona solo perché una persona sa come usarlo, e quando è in ferie si ferma tutto.

## Le alternative al foglio Excel

**Un gestionale di magazzino pronto, in abbonamento.** È la scelta giusta quando il magazzino segue regole standard: carichi, scarichi, giacenze, inventario, magari un collegamento con la fatturazione. Si attiva in pochi giorni e il costo è un canone mensile.

**Un gestionale su misura.** Conviene quando il magazzino è legato a regole specifiche dell'azienda: materiale assegnato alle commesse, kit e distinte, conto lavoro, prelievi fatti dai tecnici in cantiere. In questi casi un software standard costringe a tenere comunque un file parallelo.

**Una via di mezzo.** Spesso il primo passo più sensato è una piccola web app che sostituisce il file mantenendo la stessa logica di questo modello (articoli, movimenti, giacenze calcolate), ma con più utenti, accesso dal telefono, storico delle modifiche e nessuna formula da rompere. È un progetto piccolo, che può diventare un gestionale completo un pezzo alla volta.

Per i costi delle diverse strade c'è la guida [Quanto costa un gestionale su misura](/blog/quanto-costa-un-gestionale-su-misura). Se vuoi capire quale conviene nel tuo caso, [Build vs Buy](https://bvb.fiscet.it) analizza la tua situazione gratuitamente.
