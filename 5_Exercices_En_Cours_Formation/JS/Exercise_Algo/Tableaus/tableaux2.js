// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.

function lastElement(array) {
    console.log(array[array.length-1]);
}

lastElement([21, 44, 33]);

function lastElement2(array) {
    return array[array.length-1];
}

console.log(lastElement2([21, 44, 33]));


// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.

console.log("----------IM JUST SEPARATING STUFF----------");

function valMin(array) {

    let result = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < result)   {   
            result = array[i];
        }
    }
    return result;
}

console.log(valMin([13, 45, 7]));

function valMax(array) {
    let result = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > result) {
            result = array[i];
        }
    }
    return result;
}

console.log(valMax([13, 45, 7]));

// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

console.log("----------IM JUST SEPARATING STUFF----------");

function valSecondMax(array){

    let biggestN = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > biggestN) {
            biggestN = array[i];
        }
    }

    let result = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > result && array[i] < biggestN) {
            result = array[i];
        }
    }
    
    return result;
}

console.log(valSecondMax([2, 45, 35, 78, 54]));

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.

console.log("----------IM JUST SEPARATING STUFF----------");

function numberCounter(array, n) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == n) {
            counter++;
        }
    }
    return counter;
}

console.log(numberCounter([22, 22, 22, 23, 24, 2, 4, 5, 10], 22));

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.

console.log("----------IM JUST SEPARATING STUFF----------");

function isThisYourNumber(array, n) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == n) {
            return true;
        }
    }
    return false;
}

console.log(isThisYourNumber([22, 22, 22, 23, 24, 2, 4, 5, 10], 20));

// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].

console.log("----------IM JUST SEPARATING STUFF----------");

function createArray(n1, n2){
    let array = [];

    for(let i = n1; i <= n2; i+=n1){
        array.push(i);
    }
    return array;
}

let oneTo4Seven = createArray(1, 7777);
console.log(oneTo4Seven);

console.log("----------IM JUST SEPARATING STUFF----------");

// Créer un tableau qui contient [10,20,30,...,77770].

let tenByTen = createArray(10, 77770);
console.log(tenByTen);

console.log("----------IM JUST SEPARATING STUFF----------");

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
let fiveByfive = [];
for(let i  = 0; i < tenByTen.length; i++){
    fiveByfive.push(tenByTen[i] / 2);
}

console.log(fiveByfive);

console.log("----------IM JUST SEPARATING STUFF----------");

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.

function popLess50 (array){
    for(let i = array.length-1; i > 0; i--){
        if(array[i] < 50){
            array.pop();
        } else {
            return array;
        }
    }
}

console.log(popLess50([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]