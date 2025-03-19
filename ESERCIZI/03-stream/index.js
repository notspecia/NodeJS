import { writeFileSync, readFileSync, createReadStream } from 'fs';


// con questo for scriviamo il nostro file MOLTO GRANDE con tanti bytes
// for (let i = 0; i < 10000; i++) {
//     writeFileSync('./streamProva.txt', `ciao ${i}\n`, { flag: 'a' });
// }



// -------------------------------------------



/*
Convertire il Buffer in stringa
- Se vuoi leggere il contenuto in formato testuale, devi convertirlo in stringa:
- Inseriamo un set di caratteri come utf8
ora si leggerà:
ciao 0
ciao 1
ciao 2
...
ciao 9999
*/
console.log(readFileSync('./streamProva.txt', 'utf8'));


/*
Cosa fa se non specifichiamo la lettura del contenuto in forma testuale??
- Legge tutto il file sincronamente (readFileSync è bloccante).
- Restituisce i dati come Buffer, invece di una stringa leggibile.
cosa si vedrà in console:
<Buffer 63 69 61 6f 20 30 0a 63 69 61 6f 20 31 0a 63 69 61 6f 20 32 0a ...>
*/
console.log(readFileSync('./streamProva.txt'));


/*
Meglio usare le stream per file grandi!
- Ecco come leggere il file in modo più efficiente con le Readable Streams:
*/
const streamFile = createReadStream('./streamProva.txt');

streamFile.on('data', (chunk) => {
    console.log('Chunk ricevuto:\n', chunk);
});