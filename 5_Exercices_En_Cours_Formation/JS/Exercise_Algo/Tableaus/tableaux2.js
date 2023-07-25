// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.

function dernierElement(array){
    console.log(array.pop());
}

dernierElement([21, 44, 33]);

function dernierElement2(array){
    return array.pop();
}

console.log(dernierElement2([21, 44, 33]));

console.log("----------IM JUST SEPARATING STUFF----------")
// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.

function simpleIf()

function tabMin(array){
    if(array[0] <= array[1] && array[0] <= array[2]){
        return array[0];
    } else if(array[1] <= array[2]){
        return array[1];
    } else {
        return array[2];
    }
}

console.log(tabMin([13, 45 ,7]));

function tabMax(array){
    if(array[0] >= array[1] && array[0] >= array[2]){
        return array[0];
    } else if(array[1] >= array[2]){
        return array[1];
    } else {
        return array[2];
    }
}

console.log(tabMax([13, 45 ,7]));

// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.

// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].

// Créer un tableau qui contient [10,20,30,...,77770].

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12]); // doit afficher [1,45,88,54]