// DICHIARAZIONE ED INSERIMENTO DEI VALORI DA PARTE DELL'UTENTE
let numeroKm = parseInt(prompt("Inserisci il numero di km da percorrere"));
let anniUtente = parseInt(prompt("Inserisci l'età"));

// PREZZO DEFINITO IN BASE AI KM
let prezzoTotale = numeroKm * 0.21;
console.log("Il prezzo definito in base ai km è di ${prezzoTotale}");