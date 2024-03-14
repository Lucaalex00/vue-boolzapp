# Milestone 1

● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
dall’interlocutore (bianco) assegnando due classi CSS diverse
● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
nome e immagine di ogni contatto

# Milestone 2

● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
messaggi relativi al contatto attivo all’interno del pannello della conversazione
● Click sul contatto mostra la conversazione del contatto cliccato

# Milestone 3

● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde
● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo.

# Milestone 4

● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
“mar” rimangono solo Marco e Martina)

# Milestone 5 - opzionale

● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
permette di cancellare il messaggio selezionato
● Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti

# Consigli utili:

● Si possono trascurare le scrollbar verticali, sia nel pannello dei messaggi, che nella
lista dei contatti
● I pulsanti e le icone possono non funzionare (a parte l’invio del messaggio)
● Per gestire le date, può essere utile la libreria Luxon

# Description

# .1

    ciclare all'interno dell'array di oggetti e recuperare tutti i componenti dell'oggetto con status 'SENT' e inserirli in un contenitore VERDE e poi in un altro contenitore quelli con status "RECEIVED" in sfondo bianco.

    ciclare all'interno dell'array di oggetti e recuperare SOLO il contanct in contacts... contact.name & contact.avatar e associargli le classi del CSS.

# .2

    associare al @CLICK su un utente, l'aggiunta di una classe CSS "ACTIVE" che nel momento in cui è attiva, mi riporta TUTTI i componenti "date""message""status", nel MAIN, dell'utente in questione.

# .3

    aggiungere all'input per invio messaggio un @keyup.enter e nel momento dell'"INVIO", aggiungere il testo all'interno dell'input dentro il main, sotto agli altri in una BOLLA VERDE.
        - Quando questo accade, fai partire un setTimeout di 1000ms e inserisci all'interno del MAIN, sotto all'ultimo messaggio inviato in una BOLLA BIANCA, la scritta "ok"

# .4

    inserisco nell'input di ricerca utenti, che il testo digitato dall'utente, è .includes dentro l'array CONTACTS come contact.name e SE è cosi, allora fai comparire SOLO quelli che hanno quella proprietà li.

# .5

Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
permette di cancellare il messaggio selezionato
● Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti

    inserire al menu a tendina vicino ai messaggi, il "RIMUOVI" funzionante al @click cancella il messaggio (function)

    tramite la funzione setDate e i suoi simili, creare un array con oggetto quello recuperato come ULTIMO messaggio inviato e stamparlo sotto il nome del contatto.
