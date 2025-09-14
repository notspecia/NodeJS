// QUESTO FILE CONTERRA TUTTE LE ROUTES PER I NSOTRI USERS, come base di path /users


// 08. importiamo express anche qui con require() per poi creare un router (che è come se fosse una MINI-APP) creaiamo un router traimite express.Router()
const express = require('express');
const router = express.Router(); // il router funzionerà esattamente come la nostra app principale

// sappiamo che il nostro router custom, avrà sempre all'inzio come path -> /users
router.get('/', (req, res) => {
    res.send('Lista utenti')
})

router.get('/new', (req, res) => {
    res.send('Form per aggiungere utenti')
})


// 09. Routing avanzato, possiamo definire custom routes (ad esempio user :id) passando dei query params nella route dinamici (SE INIZIA CON : è una rotta dinamica!)
// importante, anche express è cascading (quindi legge dall'alto verso il basso) mettere rotte dinamiche IN FONDO!! per evitare conflitti involntari con rotte ben definite
// router.get('/:userId', (req, res) => {
//     const { userId } = req.params // prendiamo tramite descturing dell oggetto tutti i query params necessari dalla rotta
//     res.send(`hai richiesto l'utente con ID: ${userId}`)
// })


// 10. chaining tramite .route() di + rotte con azioni e richieste diverse (GET, POST, PUT, DELETE) cosi da rendere il codice + leggibile USANDO LO STESSO PATH PER LE VARIE AZIONI che saranno tutte matchate tra di loro!
/* 
quindi, agganciamento al router users:
    - route (path della rotta che contiene diverse CRUD operation)
    - metodi chainati alla .route, con req res custom per ogni azione COLLEGATE SEMPRE AL PATH definito come princiaple
*/
router
    .route('/:userId')
    .get((req, res) => {
        const { userId } = req.params // prendiamo tramite descturing dell oggetto tutti i query params necessari dalla rotta
        res.send(`hai richiesto l'utente con ID: ${userId}`)
    })
    .put((req, res) => {
        const { userId } = req.params
        res.send(`hai modificato l'utente con ID: ${userId}`)
    })
    .delete((req, res) => {
        const { userId } = req.params
        res.send(`hai cancellato l'utente con ID: ${userId}`)
    })


// 11. Export dell'router da importare dentro la nostra app principale
module.exports = router;