// DICHIARAZIONE DELLE VARIABILI ED INSERIMENTO DEI VALORI 
let scontoDiciottenni = "codice";
let scontoOver = "code";
let numeroKm = parseInt(prompt("Inserisci il numero di km da percorrere"));
let anniUtente = parseInt(prompt("Inserisci l'età"));

// DICHIARAZIONE DELLE VARIABILI CHE CONTENGONO IL PREZZO SCONTATO E NON SCONTATO DEL BIGLIETTO 
let prezzoScontato;
let prezzoNonScontato;

// PREZZO DEFINITO IN BASE AI KM
prezzoNonScontato = numeroKm * 0.21;
console.log(`Il prezzo definito in base ai km è di ${prezzoNonScontato}`);

// SCONTO DEL 20% APPLICATO AI MINORENNI
if(anniUtente < 18 ){ 
                   prezzoScontato = prezzoNonScontato - prezzoNonScontato * 20 / 100;
                   console.log(`Il prezzo scontato per i minorenni è di ${prezzoScontato}`);
                    }



