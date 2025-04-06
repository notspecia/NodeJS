/*QUERY STRING
NON sono dati sensibili quindi possono essere passati in GET dato che qui li usiamo come una query di ricerca!

QUERY STRING: tutto quello che è presente dopo il "?", è della roba che a noi potrebbe non fregare niente, solo se viene gestita
QUERY PARAMETERS: invece al contrario, se sono presenti dei parametri DOBBIAMO gestirli e ci deve fregare
*/
import express, { json } from 'express';
import { utenti } from './utenti.js';
const app = express();


/* 
!E FACOLTATIVA LA QUERY STRING! NON VA INSERITA NEL PARAMETRO DELLA .get(ROTTA)
proviamo ad inserire all'interno una rotta con GET "/utenti" una query string di prova che LOGGHIAMO IN CONSOLE "?nome=pippo"
se volessimo mettere + query string le separiamo con la &: "?nome=luca%cognome=rossi" 
*/
app.get("/utenti-prova", (req, res) => {
    console.log(req.query);
    res.send("<h1>Ho scritto una query string!</h1>");
});

/*
ora inseriamo 2 query string insieme in questa rotta in cui specifichiamo:
- 01. query string = "?nome=luca"
- 02. query string = "&limit=2" 
andremo a prendere e fare una GET dei primi 2 degli utenti di nome LUCA
*/
app.get("/utenti-specifici", (req, res) => {

    // destructuring dell'oggetto query string inserite nella rotta
    console.log(req.query);
    const { nome, limit } = req.query;

    // controllo a priori se esiste un params nome per evitare di generare un errore!
    if (!nome) {
        return res.status(400).send("<h1>parametri query string non passati correttamente!!</h1>");
    }

    // filtriamo un nuovo ARRAY con tutti gli utenti con nome passato come quello nella QUERY STRING (luca)
    const utentiFiltrati = utenti.filter((utente) => utente.nome.toLowerCase() === nome);

    /* 
    andiamo a usare .slice() cancellando gli utenti di nome luca filtrati prima, lasciando solo I PRIMI 2
    mandiamo gli utenti filtrati grazie alle query params (nome + limite) 
    */
    if (!limit) {
        return res.status(200).json(utentiFiltrati);
    }
    res.status(200).json(utentiFiltrati.slice(0, +limit));
});





app.listen(3000);