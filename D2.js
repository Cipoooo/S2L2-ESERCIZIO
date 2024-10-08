/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const int1 = 20
const int2 = 12

if(int1<int2){
  console.log("int2 maggiore di int1")
}else console.log("int1 maggiore di int2");

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const x = 25
if(x!==5){
  console.log("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

if (x%5 === 0){
  console.log("Divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const num1 = 14
const num2 = 6

if(num1===8){
  console.log("num1 = 8")
}else if(num2===8){
  console.log("num2 = 8")
}else if (num1 + num2 ===8){
 console.log(" l addizione dei due numeri è 8");
} else if(num1-num2===8){
  console.log("la sottrazione tra i due numeri è 8")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const totalShoppingCart = 30
const spedizione = 10
if(totalShoppingCart>50){
  console.log("Il tuo ordine totale è di:" ,totalShoppingCart+"$")
}else if(totalShoppingCart<50){
  console.log("il tuo ordine totale è di:",totalShoppingCart+spedizione+"$")
}
 

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

if (totalShoppingCart*0.8 > 50){
  console.log("Il tuo ordine totale è di:",totalShoppingCart*0.8 +"$")
}else if(totalShoppingCart*0.8 < 50)
  console.log("Il tuo ordine totale è di:",totalShoppingCart*0.8 +spedizione+"$")
  else console.log("Hai sbagliato a scrivere il codice");

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const a = 49
const b= 28
const c = 85

if(a > b && b>c){         //SAREBBE DA MODIFICARE E PERFEZIONARE SE RIMANE TEMPO
  console.log(c,b,a)
}else if(a < b && b < c){
  console.log(a,b,c)
}else if (a<b && a<c && c<b){
  console.log(a,c,b)
}else if (c<a && a<b){
  console.log(c,a,b)
}else if (b<a && b<c &&a<c){
  console.log(b,a,c)
}else console.log(b,c,a)


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

   //let qualcosa = "ciao"
if (typeof qualcosa === Number){
  console.log("qualcosa is a number")
 } else if (typeof qualcosa === String){
   console.log("qualcosa is a number")
 }else if (typeof qualcosa === Boolean){
  console.log("qualcosa is nor a number nor string, but a boolean")
 }
 

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const pariODispari = 24
if (pariODispari % 2 === 1){
  console.log("Il numero è dispari")
}else if(pariODispari % 2 === 0){
  console.log("Il numero è pari")
}else {
  console.log ("Non hai scritto bene il codice idiota")
}

 // ESERCIZIO 10
  //Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 10
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val > 10) {
      console.log("Meno di 10");
    }else {
      console.log("Uguale a 10");
    }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

Object.defineProperty(me, "city", {value:"Toronto"});
console.log(me.city)


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me.lastName);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop()
console.log(me.skills)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const array = []

array.unshift(10,9,8,7,6,5,4,3,2,1,)
array.reverse()
console.log(array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
let arrayCopy = array
const index = 9
const newValue = 100
arrayCopy[index] = newValue
console.log(arrayCopy)

