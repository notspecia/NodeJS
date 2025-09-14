// 01. creazione di un server EXPRESS
const express = require('express');
const app = express();

// 02. settaggio dell'enigne ejs per mandare file HTML con estensione EJS
app.set('view engine', 'ejs');


// 03. collegamento server a una porta, porta + callback all'avvio server
app.listen(8000, () => {
    console.log("ciao ti sei collegato alla porta 8000");
});


// 04. setting delle rotte (il server si aspetta almeno una rotta GET/), route path + (req, res) req contiene tutti i dati passati nella richiesta, res risposta da mandare al client
// 05. sending al client vari tipi di risposte (.send default, download file, status code + custom send, JSON)
app.get('/', (req, res) => {
    // res.send('hello') // send di una stringa
    // res.download('server.js') // passiamo al client come risposta il path del file da scaricare dal server!
    // res.sendStatus(500) // send di uno status code da mandare al client
    // res.status(500).send('problema lato server') // concatena allo stauts code un .send() personalizzato (errore 500 visibile in console)
    res.status(200).json({ messaggio: 'ciao benvenuto!' }) // mandiamo con stato 200 un JSON al client
});


// 06. sending alla rotta custom file html che mandati con engine ejs, .redner() accetta path del percorso del file dalle views/ + parametri dinamici da passare al file ejs e mandare come output
app.get('/ejs', (req, res) => {
    res.render('index', { nome: 'Gabriele' }); // path del file ejs nelle views + parametro object con dentro variabili dinamiche nel file index.ejs
})


// 07. Routers usando tramite express() una definizione di rotta con base /users (per ora qui inseriti in maniera accodata, ma in maniera + PULITA)
// sarebbe appunto meglio spostare le rotte users/ in una area definita e incapsulata per poi importarle qui nell'app principale, inserite dentro ROUTES/
// app.get('/users', (req, res) => {
//     res.send('Lista utenti')
// })

// app.get('/users/new', (req, res) => {
//     res.send('Form per aggiungere utenti')
// })


// 09. import del nostro router dentro la cartella users, e intergrazione con .use nella nostra app principale + definizione del path di base di questo Router custom 
const userRouter = require('./routes/users');
app.use('/users', userRouter); // STIAMO DICENDO tutto ciò che inizia con /users vai ad interrogare e controllare le rotte associate ad esso
