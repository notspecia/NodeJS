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

// 09. Export dell'router da importare dentro la nostra app principale
module.exports = router;