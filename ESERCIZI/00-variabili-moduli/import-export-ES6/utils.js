const saluta = (nomePersona) => {
    console.log(`ciao sono ${nomePersona}`)
}

const salutaMondo = (nomePersona) => {
    console.log(`${nomePersona} saluta te e tutto il mondo!`)
}

// con default sappiamo che da questo module, verrà esportato una roba singola (variabile / funzione), non dovremo usare nell'import le {}
// si può fare un mix tra export default + export di + cose in un singolo modulo !!!
export default saluta;
export { salutaMondo };