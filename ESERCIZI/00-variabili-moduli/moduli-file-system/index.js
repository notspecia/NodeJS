/*
01. come leggere e scrivere file (in maniera sync / async)
02. capire il funzionamento di come gira il codice sync / async

-FS sync (blocking code): blocca le istruzione successiva ad essa se viene impostato il codice in maniera syncrona
-FS async (non blocking code): ci permette di servire + operazioni allo stesso tempo mettendole in background mentre vengono elaborate!
*/

import { readFileSync, writeFileSync, readFile, writeFile, read } from 'fs';

// --------------------------------------------------------------------
// ------------------------ FILESYSTEM SYNC ---------------------------
// --------------------------------------------------------------------

/* 
usiamo la funzione importata da "fs", per leggere un file.txt, passando path realtivo + codifica caratteri utf8
all'interno delle variabili ci saranno come valore il testo del file.txt appena letto!
TI BLOCCO FINO A QUANDO NON LO LEGGI IL FILE, DATO CHE CE UN CONSOLE.LOG() DI QUELLO CHE DEVE LEGGERE IN MANIERA SINCRONA!
*/
const letturaProva = readFileSync('./cartella/prova.txt', 'utf8');
const letturaCiao = readFileSync('./cartella/ciao.txt', 'utf8');

console.log(`sto leggendo i file.txt: ${letturaProva} && ${letturaCiao}`);


/* 
usiamo la funzione importata da "fs", per scrivere un file.txt, passando path realtivo del file + cosa si vuole scrivere, si possono compiere + operazioni:
- SOVVRASCRIVERE IL CONTENUTO DEL FILE: writeFileSync('path', 'nuovo testo che sovvrascrive');
- AGGIUNGERE SENZA SOVVRASCRIVERE DEL CONTENUTO AL FILE: dobbiamo aggiungere alla funzione un flag con 'a' di append --> {flag: 'a'}
- CREARE UN FILE DIRETTAMENTE E RIEMPIRLO CON DEL CONTENUTO: uguale alla prima procedura, ma il file a sto giro non esiste!! inserire un nuovo path relativo
*/
writeFileSync('./cartella/ciao.txt', 'ho sovvrascritto tutto ehehe');
writeFileSync('./cartella/prova.txt', ', e ho appeso altra roba <3', { flag: 'a' });
writeFileSync('./cartella/bella.txt', 'sono nuovo (solo la 01 volta)');



// ---------------------------------------------------------------------
// -------------------- FILESYSTEM ASYNC -------------------------------
// ---------------------------------------------------------------------

/*
più o meno la stessa sintassi, ma aggiungiamo per il readFile una funzione di callback () => con parametri:
- err: errore in caso la lettura del file quando verrà eseguita in maniera asyncrona, andrà in errore
- res: risultato in caso la lettura viene compiuta (non si sa quando), con valore il contenuto effettivamente letto 
TU SAI CHE DEVI LEGGERLO TIENILO A MENTE, PRENDITI IL TUO TEMPO, NON TI BLOCCO MA APPENA HAI IL RISULTATO O IN ERRORE, ME LO FAI LEGGERE
*/
readFile('./cartella/prova.txt', 'utf8', (err, res) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(res);
});


/*
ora proviamo a leggere e a scrivere in maniera asyncrona senza che blocchi dei file diversi di seguito! 
nel frattempo che viene eseguita la callback della prima lettura, intanto viene messe nei background ed elaborare le letture e le scritture asyncrone
andrà avanti con l'altro codice successivo
OSSERVARE I CONSOLE.LOG() PER CAPIRE IL FUNZIONAMENTO!!
*/
readFile('./cartella/bella.txt', 'utf8', (err, res) => {
    if (err) {
        console.log(err);
        return
    }
    const lettura1 = res; // assegniamo la lettura di questo primo file a una variabile per non perdere traccia
    readFile('./cartella/ciao.txt', 'utf8', (err, res) => {
        if (err) {
            console.log(err);
            return
        }
        const lettura2 = res;
        writeFile('./cartella/prova.txt', 'ho sovvrascritto prova con tutto in maniera async', (err, res) => {
            if (err) {
                console.log(err);
                return
            }
            console.log(`ho FINITO letto i file! ecco il 1 file: ${lettura1}, e il 2 file: ${lettura2}
ho scritto anche il file prova.txt!`); // VERRA ESEGUITO DOPO IL console.log() QUI SOTTO
        });
    });
});

// QUESTO VERRA ESEGUTIO PER PRIMO DATO CHE E SYNCRONO IL PEZZO SOPRA DI LETTURA FILE, VERRA ELABORATO IN BACKGROUND SENZA BLOCCARE
console.log("sto lavorando... NEL FRATTEMPO LEGGI!");