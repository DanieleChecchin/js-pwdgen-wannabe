// SCALETTA

/*
1- Recupero gli elementi del DOM di mio interesse
2- Chiedo il nome all'utente (prompt)
3- Chiedo il cognome all'utente (prompt)
4- Chiedo il colore preferito all'utente (prompt)
5- Stampo nel DOM aggiungendo '21'

*/

// Fase preparatoria

const passwordElement = document.getElementById('password');
console.log(passwordElement);

// Fase raccolta dati
const firstName = prompt('Inserire il nome', 'Daniele');
const lastName = prompt('Inserire il cognome', 'Checchin');
const colour = prompt('Inserire il colore preferito', 'Viola');

// Fase lavorazione dati

// Fase produzione output