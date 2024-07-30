// SCALETTA

/*
1- Recupero gli elementi del DOM di mio interesse
2- Chiedo il nome all'utente (prompt)
3- Chiedo il cognome all'utente (prompt)
4- Chiedo il colore preferito all'utente (prompt)
5- Stampo nel DOM aggiungendo '21'

*/

// ! Fase preparatoria
const passwordElement = document.getElementById('password');
console.log(passwordElement);

// ! Fase raccolta dati
const firstName = prompt('Inserire il nome', 'daniele');
const lastName = prompt('Inserire il cognome', 'checchin');
const colourFavourite = prompt('Inserire il colore preferito', 'viola');

// ! Fase lavorazione dati
const message = `${firstName}${lastName}${colourFavourite}21`;

// ! Fase produzione output
passwordElement.innerText = message;