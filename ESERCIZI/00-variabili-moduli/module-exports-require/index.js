/*
- node "nome-file.js" --> per runnare su terminale lo script (non abbiamo però accesso alle WEB apis e darà in caso errore come DOM, window...)

prova a costruire un modulo interno noi e non che arriva dall'esterno come NPM (utilizzando anche variabili globali)
moduli per contenere magari nomi di persone (nomi.js) + funzioni per listare stampare ecc.. (utils.js)
*/
const saluta = require('./utils');
const { persona1, persona2 } = require('./nomi');


saluta(persona1);
saluta(persona2);
saluta("Marco");