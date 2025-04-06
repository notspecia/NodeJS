// per ora utilizziamo un array di oggetti da portare al client come json tramite res.json()
// poi applicheremo tutti i dati all'interno dei database!
const utenti = [
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
    },
    {
        id: "5",
        nome: "Luca",
        cognome: "Giannino",
        eta: 18,
        professione: "Operaio",
        indirizzo: {
            via: "Viale Europa",
            citta: "Roma",
            cap: "00100"
        },
        interessi: ["lettura", "viaggi", "sport"]
    },
    {
        id: "6",
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
        id: "7",
        nome: "Luca",
        cognome: "Leone",
        eta: 11,
        professione: "Senzatetto",
        indirizzo: {
            via: "Viale Europa",
            citta: "Roma",
            cap: "00100"
        },
        interessi: []
    },
];


export { utenti };