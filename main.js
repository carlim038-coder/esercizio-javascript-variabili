// Contenuto di main.js
// Dichiarazione della variabile richiesta
let num1 = 42;

// Stampe su console
console.log("Il valore della variabile num1 è: " + num1);
console.log("Esercizio 1 completato con successo");

let num2 = 50;

// Stampe su console
console.log("Il valore della variabile num2 è: " + num2);
console.log("Esercizio 2 completato con successo");

// 2. Stampa a schermo il valore della variabile stringa
let stringa = "Ciao a tutti!";
console.log("Il valore della variabile stringa: " + stringa);

// 3. Sostituisci il valore e stampalo di nuovo
let stringa = "Ora ho cambiato valore alla stringa";
console.log("Il nuovo valore della variabile stringa: " + stringa);

// 4. Dichiara una costante PIGRECO
const PIGRECO = 3.14159265359;

// 5. Visualizza a schermo il valore di PIGRECO
console.log("Il valore di PIGRECO è: " + PIGRECO);

// 6. Prova a cambiare il valore della costante

prompt("Prova a cambiare il valore di PIGRECO e vedi cosa succede! (Controlla la console per l'errore)");
// Se provi a decommentare la riga sotto, vedrai un errore nella console (F12)
// PIGRECO = 3.14; 
// Questa riga darà un errore perché PIGRECO è una costante 

let PIGRECO = 4; 
console.log("Se provassi a cambiare PIGRECO, il browser darebbe un errore: TypeError");