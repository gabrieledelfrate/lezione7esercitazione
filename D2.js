/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*
  const num1 = parseInt(prompt("Inserisci il primo numero"))
  const num2 = parseInt(prompt("Inserisci il secondo numero"))
   
  if (num1 > num2){
    console.log(num1)
  }
  else if (num2 > num1){
    console.log(num2)
  }

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/*const num3 = parseInt(prompt("Inserisci un numero"))
const num4 = 5
if (num3 != num4){
  console.log("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*const num5 = parseInt(prompt("inserisci un numero"))
const num6 = 5
let num7 = num5 % num6

if (num7 === 0){
  console.log("divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*const num8 = parseInt(prompt("Inscerisci il primo numero"))
const num9 = parseInt(prompt("Inserisci il secondo numero"))
const num10 = 8

if (num8 + num9 == num10){
  console.log("Il risultato è 8")
}
else if (num8 - num9 == num10){
  console.log("Il risultato è 8")
}
else if (num8 == num10 && num9 != num10){
  console.log("Il valore del primo numero è 8")
}
else if (num8 != num10 && num9 == num10){
  console.log("Il valore del secondo numero è 8")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*let totalShoppingCart = parseFloat(prompt("Totale carrello"))
const shippingCost = 10
let totalCost = totalShoppingCart + shippingCost

if (totalShoppingCart > 50){
  console.log("Hai diritto alla spedizione gratuita!")
  window.alert("Hai diritto alla spedizione gratuita!")
}

else {
  console.log(totalCost)
  window.alert("Il costo totale è " + totalCost + " comprese le spese di spedizione. Raggiungi un totale di 50 per ottenere la spedizione gratuita!")
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/*let totalShoppingCart = parseFloat(prompt("Totale carrello"))
let sale = 4/5
let totalShoppingCartDisc = totalShoppingCart * sale
const shippingCost = 10
let totalCost = totalShoppingCartDisc + shippingCost

if (totalShoppingCartDisc > 50){
  console.log("Hai diritto alla spedizione gratuita!")
  window.alert("Hai diritto alla spedizione gratuita!")
}

else {
  console.log(totalCost)
  window.alert("Il costo totale è " + totalCost + " comprese le spese di spedizione. Raggiungi un totale di 50 per ottenere la spedizione gratuita!")
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/*const numeri = ["79", "96", "34"];
numeri.sort();
console.log(numeri)
numeri.reverse();
console.log(numeri)

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/*const input = prompt("Scrivi qua") 
if (typeof input == "number"){
  console.log("Numero")
  window.alert(Numero)
}
else {
  console.log("non è un numero")
  window.alert("Non è un numero")
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*const num13 = parseInt(prompt("Inserisci un numero"))
const num14 = 2
let num15 = num13%num14

if (num15 === 0){
  console.log("Il numero è pari")
}
else if (num15 != 0){
  console.log("Il numero è dispari")
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  /*let val = 4
  if (val < 10 && val > 5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/*const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "Toronto"
console.log(me.city)



/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/*const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "Toronto"
console.log(me.city)

delete me.lastName
console.log(me.lastName)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/*const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "Toronto"
console.log(me.city)

delete me.lastName
console.log(me.lastName)

delete me.skills
console.log(me.skills)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/*const empty = []
empty.push(1)
empty.push(2)
empty.push(3)
empty.push(4)
empty.push(5)
empty.push(6)
empty.push(7)
empty.push(8)
empty.push(9)
empty.push(10)

console.log(empty)


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

const empty = []
empty.push(1)
empty.push(2)
empty.push(3)
empty.push(4)
empty.push(5)
empty.push(6)
empty.push(7)
empty.push(8)
empty.push(9)
empty.push(10)

empty [10] = 100
console.log(empty [10])