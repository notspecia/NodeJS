import http from 'http';

// creiamo una PORTA STANDARD
const port = 8000;

/* 
creiamo il server, passando una callback function con req(richiesta) res(response) 
aggiungiamo del contenuto alla res per poi mandarla SE NON VERRA MANDATA UNA RISPOSTA, il server CARICHERA ALL'INFINITO
:type --> restituisce un SERVER a cui associare ad una variabile per metterlo in ascolto in una porta
*/
const server = http.createServer((req, res) => {
    // scriviamo la richiesta / gli header...
    res.write(`<h1>Hello, World! Il server e attivo.</h1>
    <h2>sottotitolo scritto nella res</h2>
    <p>ciao ho mandato la risposta</p>`);
    // invia la risposta al BROWSER/CLIENT CHE HA FATTO LA RICHIESTA, se non la si manda, il server caricherà all'infinito!
    res.end();
});

// facciamo partire il server appena creato, mettiamolo in ascolto in una :porta "localhost:PORTA", magari mettendo anche un 2 parametro che viene eseguito quando il server ascoltato e si apre (SI VEDRA SUL TERMINALE!)
server.listen(port, () => {
    console.log(`Server in esecuzione su http://localhost:${port}`);
});