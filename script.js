/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1 = 20;
const num2 = 40;

if (num1 > num2) {
  console.log("Il numero minore è  " + num1);
} else if (num2 > num1) {
  console.log("il numero maggiore è " + num2);
} else {
  console.log("i numeri sono ugauli");
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const number = 4;
if (number === 5) {
  console.log("il numero è equal");
} else if (number != 5) console.log("not equal");
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numeroA = 25;

if (numeroA % 5 === 0) {
  console.log(numeroA + " è divisibile per 5");
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var numero1 = 8;
var numero2 = 16;

if (numero1 === 8 || numero1 + numero1 === 8 || numero2 - numero1 === 8) {
}
console.log(" è uguale a " + numero1);

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var totalShoppingCart = 60;
var shippingCost = 10;
var totalAmount;

if (totalShoppingCart > 50) {
  // Spedizione gratuita
  totalAmount = totalShoppingCart;
} else {
  totalAmount = totalShoppingCart + shippingCost;
}

console.log("il totale è  " + totalAmount);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var totalShoppingCart = 60;
var shippingCost = 10;
var blackfriday = 0.2;
var totalAmount;

// sconto del 20%
var totalDiscounted = totalShoppingCart * (1 - blackfriday);

if (totalDiscounted > 50) {
  // Spedizione gratuita
  totalAmount = totalDiscounted;
} else {
  // costo fisso della spedizione
  totalAmount = totalDiscounted + shippingCost;
}

console.log("il totale è " + totalAmount);
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Creazione e assegnazione di tre variabili numeriche
var A = 12;
var B = 3;
var C = 6;

// Utilizzando un blocco condizionale per ordinare le variabili
if (A < B) {
  A = A + B;
  B = A - B;
  A = A - B;
}

if (A < C) {
  A = A + C;
  C = A - C;
  A = A - C;
}

if (B < C) {
  B = B + C;
  C = B - C;
  B = B - C;
}

console.log("Ordine decrescente:", A, B, C);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const pera = 5;

if (typeof pera === "number") {
  console.log(pera + " è un numero.");
} else {
  console.log(pera + " non è un numero.");
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = 10;

if (numero % 2 === 0) {
  console.log(numero + " è un numero pari.");
} else {
  console.log(numero + " è un numero dispari.");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;

if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10 ma maggiore o uguale a 5");
} else {
  console.log("Uguale o maggiore di 10");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";

console.log(me);
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const array = [];
array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(array);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
array.pop();
array.push(100);
console.log(array);
