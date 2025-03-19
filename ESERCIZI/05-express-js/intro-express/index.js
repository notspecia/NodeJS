/*
EXPRESS.JS https://www.npmjs.com/package/express
- è un modulo quindi da importare come abbiamo fatto fin'ora con gli altri (filesystem, path...)
*/

const express = require('express');

// CREAZIONE DI UN'ISTANZA di express con tutto quello che ci offre EXPRESS (metodi, funzioni...)
const app = express();


// qui sotto INIZIAMO A GESTIRE LE VARIE ROTTE della nostra pagina tramite express! (mettere a comparazione con http server creato con node puro!)
// è l'equivalente di creare una nuova istanza con http.createServer()
// rotta home page path "/" o ""
app.get('/', (req, res) => {
    res.send('hello world!');
});

// rotta about page path "/about"
app.get('/about', (req, res) => {
    res.send('dimmi di + di te!');
});

// rotta contatti page path "/contatti"
app.get('/contatti', (req, res) => {
    res.send('scrivimi su whatsapppp');
});

// rotta di errore, che a prescindere dal metodo (GET, POST, PUT...) che viene catturata per le rotte NON SPECIFICATE
app.all('*', (req, res) => {
    res.send('<h1 style="color: red;">Risorsa NON TROVATA!</h1>');
})


// mettiamo in ascolto il nostro server dipendente da expressjs su una porta in localhost
app.listen(8000, () => {
    console.log('server con expressjs avviato con successo');
});