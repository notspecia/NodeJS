import http from 'http';
import { writeFileSync } from "fs";

// porta di base
const port = 8000;

/*
prova di routing in base all'URL della req(richiesta) e provarla a gestirla
all'interno dell'oggetto della request, possiamo accedere a miglialia di metodi tra cui anche gli URLs, methods...
OGNI VOLTA CHE viene fatta un'azione quindi cambio URL, riviene compilata la funzione della creazione server (ripassando tutti i blocchi if)
*/
const server = http.createServer((req, res) => {

    // prendiamo alcuni parametri della request e assenamo a delle costanti
    const url = req.url;
    const method = req.method;

    //URL home page con un path vuoto === "/"
    if (url === "/") {
        res.write(`<h1>questa e la HOME PAGE benvenuto!</h1> 
        <img src='https://devacademy.it/wp-content/uploads/2019/09/nodejs-grande.jpg' width='300px' alt='immagine dalla write'/>`);

        /* 
        URL con un form di simulazione che porta con una action ad URL custom, con metodo POST! 
        inviado i dati input inseriti in una body request al path/url = "/messaggio"
        */
    } else if (url === "/acquista") {
        console.log(method);
        res.write(`<h1>acquista il tuo prodotto!</h1>
        <form action='/messaggio' method='POST'>
            <label for='nome'>Nome</label>
            <input type='text' id='nome'/> 
            <label for='cognome'>Cognome</label>
            <input type='text' id='cognome'/>
            <button type='submit'>Acquista subito!</button>
        </form>`);

        /* 
        URL a cui si viene renderizzati tramite il form con il method POST stabilito dentro esso in "/acquista",
        vogliamo all'interno di questa rotta che si viene renderizzati alla HOME = "/" + 
        creare un file con tramite il module FileSystem, con i dati scritti nel FORM in "/acquista" 
        */
    } else if (url === "/messaggio" && method === "POST") {
        console.log(method);
        res.write(`<h1>Grazie per aver acquistato il prodotto!</h1> 
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLScO00B6V668YV0xak1_83xkDC2__qSOrw&s' width='800px' alt='immagine dalla write'/>`);
        setTimeout(() => {
            writeFileSync('./cartellaProva/server.txt', `ciaonee ho scritto il file tramite il path: ${url}`);
        }, 2000);

        // scrittura di errore negli URL non stabiliti nel server!
    } else {
        res.write(`<h1>ERRORE URL NON VALIDO!</h1>
        <p>Torna alla <a href='/'>HOME</a></p>`);
    }

    // mandiamo la risposta al server elaborata prima 
    res.end();
});



server.listen(port, () => {
    console.log("avviato server");
});