/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//chiedo all'utente di inserire una parola

//verifico che quella parola sia = a se stessa revertata

//output mesaggio ad utente se la parola é palindorma o no
/*
const userWord = prompt('Inserisci una paorla per verificare se é palindroma')

const revertedWord = revertWord(userWord)

console.log(revertedWord);

if (userWord === revertedWord) {
    alert('CONGRATULAZIONI LE PAROLE SONO PALINDORME');
} else {
    alert('PURTOPPPO LE PAROLE NON SONO PALINDORME');
}


//functions

function revertWord (word) {
    
    let result = "";

    for (let i = word.length - 1; i >= 0; i--) {
        
        result = result + word[i]

    }

    return result

}
*/
//alternative function

function isPalindrome(word) {

    let result = "";

    for (let i = word.length - 1; i >= 0; i--) {

        result = result + word[i]
    }

    if (word === result) {

        console.log(word);
        
        return 'Congratulazioni la sua parola é palindorma ' + true
    }

    console.log(word);

    return 'Mi dispaice, la sua parola non é palindroma ' + false

}


let userword = prompt('Inserisci la tua parola')

result = isPalindrome(userword)

console.log(alert(result));