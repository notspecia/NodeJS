/* 
FILE STATICI + EXPRESSJS 
- usare commonjs con require(), per evitare problemi con il type: module, come con __dirname che non viene preso correttamente
tornare a CommonJS e usare direttamente __dirname. basta modificare il file package.json e rimuovere "type": "module"
- creazione cartella "public/" in cui inseriamo i nostri file STATICI (html, css...) che VOGLIAMO mostrare
- nessuno deve avere accesso invece, al lato server ossia i file js usati con node express per il server 
*/
const express = require('express');
const app = express();

// permette a Express di rendere disponibili i file statici nella cartella public/. (immagini e JavaScript client-side saranno accessibili direttamente dal browser)
app.use(express.static('public'));


/*
ora al posto di fare un .send() di codice markup MANDIAMO per le rotte prese con GET, 
tramite .sendFile() specifichiamo:
- nome file statico.html
- percorso assoluto (percorso assoluto della cartella in cui si trova il file app.js.) + "/public" in cui sono presenti i file statici
*/

// mandiamo in base alla request il file statico per la rotta "/" iniziale la homepage.html 
app.get('/', (req, res) => {
    console.log(__dirname + '/public'); // mostriamo il path completo del nostro file statico in public/
    res.sendFile('homepage.html', { root: __dirname + '/public' });
});

// rotta "/about" mandiamo file statico about.html
app.get('/about', (req, res) => {
    res.sendFile('about.html', { root: __dirname + '/public' });
});

// rotta "/contatti" mandiamo file statico contatti.html
app.get('/contatti', (req, res) => {
    res.sendFile('contatti.html', { root: __dirname + '/public' });
});

// rotta di errore, che a prescindere dal metodo (GET, POST, PUT...) che viene catturata per le rotte NON SPECIFICATE con file statico error.html
app.all('*', (req, res) => {
    res.sendFile('error.html', { root: __dirname + '/public' });
});


// mettiamo in ascolto il nostro server dipendente da expressjs su una porta in localhost
app.listen(8000, () => {
    console.log('server con expressjs avviato con successo');
});