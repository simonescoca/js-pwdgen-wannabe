// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

const nome = prompt ( "Qual è il tuo nome?" )
const colorePreferito = prompt ( "Qual è il tuo colore preferito?" )
document.getElementById ( "pw" ) .innerHTML = nome + colorePreferito + "21"