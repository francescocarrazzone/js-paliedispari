/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//function

function isEven(number) {

    let pcNumber = Math.floor(Math.random() * 5) + 1

    console.log(pcNumber);
    

    let sum = pcNumber + number

    console.log(sum);
    

    if (sum % 2 === 0) {

        return alert('la somma dei due numeri é pari')
    }

    return alert('la somma dei due numeri é dispari')

}

const playerNumber = 4

result = isEven(playerNumber)

//user scelge un numero da 1 a 5

//pc genera un numero da 1 a 5

//sommo i due numero

//se la somma é pari esco dal ciclo e ritorno vero

// output la somma é pari? vero o falso