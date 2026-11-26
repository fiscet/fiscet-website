---
slug: ransomware-piccola-impresa-backup-ripristino
title: "Ransomware e backup: perché la copia collegata non basta"
description: "Nel 2025 in Italia la maggior parte delle vittime di ransomware sono piccole imprese. Come avviene, i segnali e come preparare un backup che regge."
publishedAt: 2026-11-26
lang: it
seriesOrder: 0
---

In breve: secondo la Relazione annuale al Parlamento 2025 dell'Agenzia per la Cybersicurezza Nazionale (ACN), la maggior parte delle vittime di ransomware in Italia sono piccole imprese, in particolare del settore manifatturiero, spesso con livelli di sicurezza limitati. Il ransomware cifra i dati e chiede un riscatto per restituirli. La difesa che decide se un'azienda riparte in un giorno o in un mese è un backup scollegato dalla rete e provato almeno una volta. Un disco esterno sempre attaccato al computer, o una cartella di rete sincronizzata, di solito viene cifrato insieme a tutto il resto.

## Quanto è frequente

L'ACN ha contato nel 2025 2.729 eventi cyber (in media 227 al mese, contro i 165 del 2024) e 615 incidenti con impatto confermato, cioè casi in cui l'attacco ha davvero prodotto un danno. Le vittime univoche sono cresciute di oltre il 50%. Per il ransomware la Relazione non dà un numero di attacchi, ma descrive chi viene colpito: soprattutto piccole imprese, con conseguenze che comprendono "indisponibilità prolungate di dati e servizi".

Il Rapporto Clusit 2026, presentato a marzo, conta per l'Italia 507 incidenti gravi nel 2025, contro i 357 del 2024 (più 42%). Nell'aggiornamento di settembre dedicato all'industria, Clusit indica che nel primo semestre 2026 il manifatturiero è il settore più colpito in Italia, con il 18,4% degli incidenti.

I dati sulla preparazione delle imprese vanno nella stessa direzione. Nella rilevazione ISTAT "Imprese e ICT" del 2024, solo il 32,2% delle imprese con almeno 10 addetti dichiara di usare almeno sette delle undici misure di sicurezza considerate (38,5% nella media europea). E tra le piccole e medie imprese solo il 35,0% ha documenti che descrivono misure e procedure di sicurezza informatica, contro l'83,6% delle grandi.

## Come succede in una piccola impresa

Secondo l'ACN, gli attacchi ransomware sono resi possibili soprattutto da tre cose: credenziali valide rubate in precedenza, vulnerabilità non corrette e servizi di accesso remoto esposti su internet. Per tutti gli eventi cyber del 2025, l'ACN indica come vettore iniziale l'email nel 40% dei casi, l'uso di account validi nel 24% e lo sfruttamento di vulnerabilità nell'11%.

Tradotto nella vita di un'azienda di dieci persone, lo schema tipico è questo:

- **Una password riusata.** La password della posta di un collaboratore è finita in una violazione di un altro sito. Qualcuno la prova sull'accesso remoto aziendale e funziona.
- **Un accesso remoto lasciato aperto.** Durante un'emergenza si è attivato il desktop remoto sul server per lavorare da casa, senza un secondo fattore di autenticazione. Nessuno lo ha più chiuso.
- **Un aggiornamento rimandato.** Il firewall o il NAS hanno una vulnerabilità nota da mesi, corretta dal produttore ma mai installata.
- **Un allegato aperto.** Una fattura o un avviso di spedizione che sembra vero porta a installare il programma che apre la porta.

Dopo l'ingresso, l'attaccante spesso non agisce subito. Esplora la rete, cerca il server dei file, il gestionale e le copie di sicurezza, e solo alla fine fa partire la cifratura. Per questo il backup collegato è il primo a cadere: il National Cyber Security Centre britannico, nelle sue indicazioni sui backup, descrive casi in cui il ransomware ha cifrato non solo i dati originali ma anche i dischi USB e di rete che contenevano le copie, e perfino spazi cloud collegati.

## I segnali da riconoscere

Alcuni segnali arrivano prima della cifratura e vale la pena non ignorarli:

- accessi alla posta o all'accesso remoto da luoghi o orari insoliti, oppure avvisi di "nuovo accesso" che nessuno riconosce;
- account amministratore nuovi, o password cambiate senza che nessuno l'abbia chiesto;
- antivirus disattivato su uno o più computer;
- il backup notturno che fallisce, o che risulta "riuscito" ma con dimensioni molto diverse dal solito;
- computer o server improvvisamente lenti, con il disco al lavoro senza motivo.

Quando invece compaiono file con estensioni strane e un file di testo con le istruzioni per pagare, l'attacco è già avvenuto.

## Cosa fare in concreto, anche senza spendere

1. **Fai l'elenco di quello che ti serve per lavorare.** Il NCSC suggerisce di copiare tutti i dati necessari all'attività: documenti, posta, fatture, contatti, dati dei clienti, il sito. Aggiungi il database del gestionale e le configurazioni, che spesso nessuno ricorda finché non mancano.
2. **Tieni almeno una copia scollegata.** La regola del NCSC è semplice: collegare il backup ai sistemi solo quando serve e non avere mai tutte le copie collegate nello stesso momento. In pratica, due dischi esterni a rotazione, uno dei quali resta fuori dall'ufficio, costano poco e funzionano.
3. **Se usi il cloud, verifica le versioni precedenti.** Una cartella sincronizzata copia anche i file cifrati. Serve un servizio che conservi le versioni precedenti e i file cancellati per un certo periodo, protetto da autenticazione a due fattori. Il NCSC consiglia di controllare che queste funzioni siano incluse prima di scegliere il fornitore.
4. **Prova un ripristino.** Il NCSC lo dice in modo esplicito: bisogna sapere come si ripristinano i dati e controllare che il backup contenga davvero tutto. Una volta ogni qualche mese, scegli una cartella e un archivio del gestionale e prova a recuperarli su un altro computer. Misura quanto tempo ci vuole: è il tempo in cui l'azienda sarebbe ferma.
5. **Chiudi le porte più usate.** Autenticazione a due fattori sulla posta e su ogni accesso remoto, password diverse per ogni servizio, aggiornamenti installati su firewall, NAS e server, accesso remoto disattivato se non serve. Sono le stesse misure che proteggono anche dalla [truffa del falso IBAN](/blog/truffa-falso-iban-fornitore-come-difendersi).
6. **Scrivi una pagina su cosa fare se succede.** Chi chiamare (il tecnico, la banca, l'assicurazione se c'è), dove sono le copie, chi ha le password di amministrazione. In quel momento nessuno ha la lucidità per ricostruirlo da zero.

## Se l'attacco è già avvenuto

Scollega subito dalla rete i computer colpiti, senza spegnerli se puoi: possono servire per capire cosa è successo. Non collegare i dischi di backup finché non sai che la rete è pulita, altrimenti rischi di perdere anche quelli. Presenta denuncia alla Polizia Postale e, se nei file c'erano dati personali di clienti o dipendenti, ricorda che il GDPR prevede la notifica al Garante entro 72 ore dalla scoperta, quando la violazione presenta un rischio per le persone. Prima di ripristinare, fai individuare e chiudere la via d'ingresso: ripartire con la stessa password o lo stesso accesso remoto aperto significa esporsi a un secondo attacco.

## Una questione di ordine, prima che di prodotti

Il ransomware colpisce soprattutto dove nessuno ha mai deciso dove stanno i dati, chi li copia e come si recuperano. Per una piccola impresa la parte più utile del lavoro non è comprare uno strumento, ma sapere quali sistemi contano e ridurne il numero quando possibile. Un gestionale ben costruito, con un database unico e backup automatici verificati, è più facile da proteggere di dieci cartelle sparse su computer diversi. Se ti interessa capire come si impostano copie e ripristini in un'applicazione aziendale, trovi qualche esempio nella pagina sullo [sviluppo di web app e gestionali](/sviluppo-web-app).

## Fonti

- [ACN, Relazione annuale al Parlamento 2025 (PDF, trasmessa alla Camera dei deputati, maggio 2026)](https://www.camera.it/temiap/2026/05/28/OCD177-8990.pdf)
- [Rapporto Clusit 2026: cresce l'impatto degli attacchi cyber (Cybersecurity360, 11 marzo 2026)](https://www.cybersecurity360.it/news/rapporto-clusit-cresce-limpatto-degli-attacchi-cyber-ma-anche-le-difficolta-di-analisi/)
- [Manifatturiero, quanti rischi cyber: cosa dicono i dati del Clusit (Agenda Digitale, 25 settembre 2026)](https://www.agendadigitale.eu/sicurezza/manifatturiero-quanti-rischi-cyber-cosa-dicono-i-dati-del-clusit/)
- [ISTAT, Imprese e ICT, anno 2024 (comunicato stampa)](https://www.istat.it/comunicato-stampa/imprese-e-ict-anno-2024/)
- [NCSC, Small organisations guide to cyber security: Backing up your data](https://www.ncsc.gov.uk/collection/small-organisations-guide-to-cyber-security/backing-up-your-data)
- [NCSC, Offline backups in an online world](https://www.ncsc.gov.uk/blog-post/offline-backups-in-an-online-world)
- [Regolamento UE 2016/679 (GDPR), art. 33 sulla notifica delle violazioni (EUR-Lex)](https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32016R0679)
