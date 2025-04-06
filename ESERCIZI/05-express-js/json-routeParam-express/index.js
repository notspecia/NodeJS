/*
01. JSON FILES + EXPRESS
02. QUERY PARAMETERS PER PRENDERE EX: UTENTE/${suoID}, una GET unica per tutte le persone passando dei parametri nella rotta!
*/
import express from 'express';
import { persone, morePrivate } from './persone.js';

const app = express();


/*
ora al posto di fare un .send() / .sendFile(), inviamo dei res.json() alle rotte prese con GET
speficifchiamo come risposta alla richiesta, che stiamo inviando un json con --> res.json() 
*/

// quando arriviamo all'endpoint di "/persone", mandiamo come risposta un markup HTML
app.get('/', (req, res) => {
    res.send("<h1>Homepage, vai a vedere il tuo <a href='/persone'>personale</a></h1>");
});

// quando arriviamo all'endpoint di "/persone", mandiamo come risposta l'array di persone in JSON
app.get('/persone', (req, res) => {
    res.json(persone);
});

/* 
quando arriviamo all'endpoint di "/persone-privato", mandiamo come risposta un array con i dati di persone con - DATI 
(nome + cognome + eta).
andremo ad applicare un .map dell array persone + destructuring dell'oggetto persona, prendendo solo i valori necessari
 */
app.get('/persone/privato', (req, res) => {
    res.json(morePrivate(persone)); // mandiamo sotto formato il nuovo array mappato e destrucutarato con degli oggetti + CORTI in formato .json()
});

/*  
!E OBBLIGATORIO INSERIRE NELLA ROTTA I QUERY PARAMS SE CI SONO, BISOGNA GESTIRLI!
quando un client effettua una richiesta GET all'endpoint "/persone/:idPersona",  
vogliamo restituire i dati della persona corrispondente all'ID passato come parametro dinamico (:id)  
   
- L'ID della persona verrà estratto dall'URL tramite "req.params.idPersona".  
- Cercheremo all'interno dell'array "persone" un oggetto che abbia lo stesso ID.  
- Se troviamo una corrispondenza, invieremo l'oggetto JSON con i dati della persona.  
   
Questo permette di avere un'unica rotta GET per ottenere i dati di qualsiasi persona in modo dinamico,  
senza dover creare più endpoint separati 
*/
app.get('/persone/:id', (req, res) => {
    // possiamo accedere ai parametri della query string della rotta (TUTTI{} / SPECIFICI)
    console.log(req.params, req.params.id);
    // cerchiamo nelle persone, la persona con quell:id === param.id, e mandiamo il suo oggetto in JSON
    const persona = persone.find((persona) => persona.id === req.params.id);
    res.json(persona);
});

/*
quando arriviamo all'endpoint di "/persone/:idPersona/privato",
vogliamo restituire l'oggetto di quella persona in JSON con - dati (LE ULTIME 2 ROTTE COMBINATE INSIEME!) 
    +
gestione errore nel caso il parametro non esistesse, mandiamo una risposta con JSON di errore (404)
*/
app.get('/persone/:id/privato', (req, res) => {
    const personePrivato = morePrivate(persone); // mandiamo l'array completo prima per ricevere tutte le persone + ristrette
    const personaPrivato = personePrivato.find((persona) => persona.id === req.params.id); // cerchiamo la persona con quell':id come parametro query

    // gestione errore in caso parametro non trovato, mandiamo un oggetto JSON personalizzato di errore
    if (!personaPrivato) {
        return res.status(404).json({ messaggio: "not found", code: 404 });
    }

    res.json(personaPrivato);
});




app.listen(3000);