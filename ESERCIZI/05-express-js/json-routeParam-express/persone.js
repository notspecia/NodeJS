// per ora utilizziamo un array di oggetti da portare al client come json tramite res.json()
// poi applicheremo tutti i dati all'interno dei database!
const persone = [
    {
        id: "1",
        nome: "Mario",
        cognome: "Rossi",
        eta: 30,
        professione: "Sviluppatore",
        indirizzo: {
            via: "Via Roma",
            citta: "Milano",
            cap: "20100"
        },
        interessi: ["programmazione", "videogiochi", "musica"]
    },
    {
        id: "2",
        nome: "Luca",
        cognome: "Bianchi",
        eta: 25,
        professione: "Designer",
        indirizzo: {
            via: "Corso Vittorio",
            citta: "Torino",
            cap: "10100"
        },
        interessi: ["arte", "fotografia", "cinema"]
    },
    {
        id: "3",
        nome: "Giulia",
        cognome: "Verdi",
        eta: 28,
        professione: "Project Manager",
        indirizzo: {
            via: "Viale Europa",
            citta: "Roma",
            cap: "00100"
        },
        interessi: ["lettura", "viaggi", "sport"]
    },
    {
        id: "4",
        nome: "Elena",
        cognome: "Ferrari",
        eta: 35,
        professione: "Marketing Specialist",
        indirizzo: {
            via: "Piazza Duomo",
            citta: "Firenze",
            cap: "50100"
        },
        interessi: ["moda", "cucina", "danza"]
    }
];


// ritorniamo una copia di array modificata con i dati delle persone ridotti in oggetti
const morePrivate = (persone) => {
    return persone.map(({ id, nome, cognome, eta }) => {
        return { id, nome, cognome, eta }
    });
}



export { persone, morePrivate };