/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

console.log('++++Esercizio1++++');
const pets = ['dog', 'cat', 'hamster', 'redfish'];
console.log(pets);
for (i = 0; i< pets.length; i++)
    console.log(pets[i]);


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log('++++Esercizio2+++');
pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log('++++Esercizio3+++');

pets.reverse();
console.log(pets);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log('++++Esercizio4+++');
let fine = pets[pets.length - 1];
let inizio = pets[0];
pets[pets.length - 1] = inizio;
pets[0] = fine;
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" 
    con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

console.log('++++Esercizio5+++');

for (i = 0; i < cars.length; i++){
    cars[i].licensePlate = 'AA00' + i + 'AA';
}

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando
    la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

console.log('++++Esercizio6+++');

function aggiungiOggetto(brandF = '', modelF = '', colorF = '' , trimsF = []){
    cars.push({
        brand: brandF,
        model: modelF,
        color: colorF,
        trims: trimsF, 

    });
}

function removeTrimsArrayELement(){
    for (i = 0; i < cars.length; i++){
        cars[i].trims.pop(cars[i].trims.length - 1);
    }

}

console.log('++++AggiuntaOggetto+++');

arrayTrims = ['good','life','lol'];
aggiungiOggetto('Fiat', 'Punto', 'Green', arrayTrims);
console.log(cars);

console.log('++++VedereRemove++++');
removeTrimsArrayELement();
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array
    "justTrims", sotto definito.
*/

console.log('++++Esercizio7+++');

const justTrims = [];

for (i = 0; i < cars.length; i ++){
    justTrims.push(cars[i].trims[0]);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. 
    Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log('++++Esercizio8+++');

for (i = 0; i < cars.length; i++){
    if(cars[i].color.charAt() === 'b'){
        console.log('Fizz');
    }
    else {
        console.log('Buzz');
    }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

console.log('++++Esercizio9+++');
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let y = 0;
while (numericArray[y] !== 32){
    y++;
    console.log(numericArray[y]);
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni
    di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log('++++Esercizio10+++');
const charactersArray = ['g', 'n', 'u', 'z', 'd']
const numberAlfa = [];

for (let l = 0; l < charactersArray.length; l ++){
    switch (charactersArray[l]){
        case 'a':
            numberAlfa[l] = 1;
            break;
        case 'b':
            numberAlfa[l] = 2;
            break;
        case 'c':
            numberAlfa[l] = 3;
            break;
        case 'd':
            numberAlfa[l] = 4;
            break;
        case 'e':
            numberAlfa[l] = 5;
            break;
        case 'f':
            numberAlfa[l] = 6;
            break;
        case 'g':
            numberAlfa[l] = 7;
            break;
        case 'h':
            numberAlfa[l] = 8;
            break;
        case 'i':
            numberAlfa[l] = 9;
            break;
        case 'l':
            numberAlfa[l] = 10;
            break;
        case 'm':
            numberAlfa[l] = 11;
            break;
        case 'n':
            numberAlfa[l] = 12;
            break;
        case 'o':
            numberAlfa[l] = 13;
            break;
        case 'p':
            numberAlfa[l] = 14;
            break;
        case 'q':
            numberAlfa[l] = 15;
            break;
        case 'r':
            numberAlfa[l] = 16;
            break;
        case 's':
            numberAlfa[l] = 17;
            break;
        case 't':
            numberAlfa[l] = 18;
            break;
        case 'u':
            numberAlfa[l] = 19;
            break;
        case 'v':
            numberAlfa[l] = 20;
            break;
        case 'z':
            numberAlfa[l] = 21;
            break;
    }
}

console.log(numberAlfa);














