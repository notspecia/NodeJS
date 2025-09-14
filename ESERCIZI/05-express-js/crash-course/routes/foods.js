const express = require('express');
const { route } = require('./users');
const router = express.Router();

// definizione di rotte da esportare verso il file principale
router.get('/', (req, res) => {
    res.send('Lista dei cibi preferiti');
})

router.get('/new', (req, res) => {
    res.send('Form aggiungi nuovo cibo');
})


// chaining di rotte con lo stesso path route ma con methods diversi
router.route('/:foodId')
    .get((req, res) => {
        const { foodId } = req.params;
        res.json({ foodRequired: foodId })
    })
    .put((req, res) => {
        const { foodId } = req.params;
        res.json({ foodRequired: foodId })
    })
    .delete((req, res) => {
        const { foodId } = req.params;
        res.json({ foodRequired: foodId, status: 'cancellato' })
    })

module.exports = router;