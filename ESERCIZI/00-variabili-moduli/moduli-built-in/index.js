/* MODULI bult-in

I moduli built-in di Node.js sono moduli predefiniti che offrono funzionalità essenziali
e sono già inclusi nell'ambiente di esecuzione di Node.js. Non è necessario installarli.

Alcuni esempi di moduli built-in:
- modulo 'os' per ottenere informazioni sul sistema operativo,
- modulo 'path' per la manipolazione dei percorsi di file,

Questi moduli sono pronti per essere utilizzati senza dover fare installazioni aggiuntive.
*/
import os from 'os';
import path from 'path';


// -------------------------------------------------------
// -------------------- OS -------------------------------
// -------------------------------------------------------

// otteniamo le inforamzioni del nostro sistema operativo (OS) che vogliamo tramite i moduli built-in (architettura (arch), versione, x64, user...)
const mioPC = {
    nome: os.type(),
    utente: os.userInfo(),
    versione: os.version(),
    tempoAcceso: os.uptime(),
    architettura: os.arch(),
    memoria: os.totalmem()
}
console.log(mioPC)
console.log(mioPC.nome);
console.log(mioPC.memoria);


// ---------------------------------------------------------
// -------------------- PATH -------------------------------
// ---------------------------------------------------------

// ci permette di vedere i sepratori dei path dei file, utilizzati in questo O/S, mi servirà sicuramente quando DOVRO COMPORRE DEI PERCORSI!!
console.log(path.sep); // "\"

// il metodo di path .join(), ci permette di unire + stringhe creando un SINGOLO path (esempio path delle folder innestate)
const percorsoFile = path.join('/cartella', 'sottocartella', 'ciao.txt');
console.log(percorsoFile);

// il metodo di path .basename() ci da il nome base del FILE
console.log(path.basename(percorsoFile));

/* 
il metodo di path .resolve(), ci permette di ottenere un percorso assoluto.
- i path assoluti iniziano dalla radice del file system (es. C:/ oppure /home/user/).
- i path relativi sono basati sulla posizione attuale del file.
*/
const percorsoAssoluto = path.resolve() // andiamo a creare il percorso assoluto SULLA DIR in cui siamo
console.log(percorsoAssoluto);