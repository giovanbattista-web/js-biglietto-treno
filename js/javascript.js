// DICHIARAZIONE ED INIZIALIZZAZIONE DELLE VARIABILI 
const numeroKm = parseInt(prompt("Inserisci il numero di km da percorrere"));
const anniUtente = parseInt(prompt("Inserisci la tua età"));

// DICHIARO UNA VARIABILE CHE CONTERRA' IL PREZZO DEL BIGLIETTO E LA INIZIALIZZO AL PREZZO BASE 
let price = numeroKm * 0.21;
//DICHIARO UNA VARIABILE MESSAGE A CUI ASSEGNERO' IL VALORE DURANTE IL CONTROLLO
let message;

// EFFETTUARE IL CONTROLLO SULL'ETA' INSERITA DALL'UTENTE
if(anniUtente < 18 ){ 
                   // EFFETTUO IL CALCOLO DEL PREZZO SCONTATO DEL 20%
                   price = price - price * 0.2;
                   // SCRIVO IL MESSAGGIO DA MOSTRARE A VIDEO E LO ASSEGNO ALLA VARIABILE MESSAGE
                   message = `Hai diritto ad uno sconto del 20%. Il prezzo del tuo biglietto è di ${price.toFixed(2)} €`;
                    }
else if (anniUtente > 65){
                   // EFFETTUO IL CALCOLO DEL PREZZO SCONTATO DEL 40%
                   price = price - price * 0.4;
                   // SCRIVO IL MESSAGGIO DA MOSTRARE A VIDEO E LO ASSEGNO ALLA VARIABILE MESSAGE
                   message = `Hai diritto ad uno sconto del 40%. Il prezzo del tuo biglietto è di ${price.toFixed(2)} €`;
                    }
else 
   {
      //IL PREZZO NON SUBISCE SCONTI POICHE' CI RITROVIAMO NEL RANGE D'ETA' COMPRESA TRA 18 E 65
      // SCRIVO IL MESSAGGIO DA MOSTRARE A VIDEO E LO ASSEGNO ALLA VARIABILE MESSAGE  
      message = `Il prezzo del tuo biglietto è ${price.toFixed(2)} €`;
   }
console.log(message);


