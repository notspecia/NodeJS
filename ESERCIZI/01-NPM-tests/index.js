/*
- effettuati test per provare a scaricare delle dipendenze di librerie esterne tramite NPM
- studio deep di cosa sono i package.json / package-lock.json
- comandi di base per gestire le dipendenze di NPM (init install uninstall...)
- come settare degli scripts personalizzati

- nodemon: è un tool che riavvia automaticamente un'applicazione Node.js quando rileva modifiche nei file sorgenti.
abbiamo un pacchetto che è in ascolto per tutti i cambiamenti, se ci sono riaggiorna il server runnato!! (LA SALVIAMO COME DEV DEPENDECIES: --save-dev)
creiamo uno sript personalizzato per runnare il server con aggiornamenti continui TRAMITE nodemon
*/

// testiamo i cambiamenti in tempo reale con il server in ascolto grazie a nodemon
const prova = 108;
console.log(prova);