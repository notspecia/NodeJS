/* 
- on: andiamo a registrare/iscrivere all evento definito creato come istanza, quindi ogni volta che parte quell'emitter/evento
noi siamo in ascolto di quell'evento e facciamo qualcosa (che stabiliamo in una callback function ()=>{})
- emit: ci permette di emettere quell'evento ascoltato che è stato registrato PRECEDENTEMENTE tramite .on()

possiamo collegare quel customEmitter a tanti eventi differenti, magari come una chat di whatsapp, chat privata di gruppo sullo stesso telefono
quindi ad esempio:

- come passare dei valori agli events emitters? all'interno del .emit(), passiamo dopo il primo parametro che è l'emitters a cui siamo in ascolto
dal 2 in poi tutti i parametri.
verrano poi usati all'interno della callback function (param1, param2) => {} all'interno della registazione dell'evento con .on()
*/

import { EventEmitter } from 'events';

// creiamo un EVENTEMITTER grazie al modulo appena importato, sarà quello che emette (da collegare a qualcosa che deve ascoltare)
const customEmitter = new EventEmitter();

// ci iscriviamo tramite .on() ad un'istanza di evento personalizzato tenendolo in ascolto in eventuali cambiamenti
customEmitter.on("messaggioPrivato", (nome, orario) => {
    console.log(`📩 Messaggio arrivato in privato da! ${nome} alle ore ${orario.getHours()}:${orario.getMinutes()}:${orario.getSeconds()}`);
});
customEmitter.on("messaggioGruppo", (gruppo) => {
    console.log(`👥 Messaggio arrivato dal gruppo ${gruppo}!`);
});

// per emittare gli eventi usiamo .emit() e ovviamente l'evento deve essere uguale a quello che viene registrato per ascoltarlo correttamente
customEmitter.emit('messaggioPrivato', 'Gabriele', new Date());
customEmitter.emit('messaggioGruppo', 'RumenoAlpha.jpg');