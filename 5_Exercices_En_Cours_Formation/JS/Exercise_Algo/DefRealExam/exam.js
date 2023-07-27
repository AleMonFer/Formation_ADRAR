// j'ai bien lu les consignes

// Alexandre Ferraria Really Real Exam


/* Variables */
/* Question 1 */

//Une variable c'est une boite vide(sans affectacion) avec un id(Nom de la variable). On peut declarer(creer), afecter(ecrire dans la boite) et lire(afficher,etc) une variable. Une variable va etre utilisé quand on besoin de sauvegarder contenu(Nombre, Nom, etc) pour qu'on puisse utiliser plus tard.

/* Question 2 */

//la declaration c'est la creation d'une variable. let c'est le mot clè.

/* Question 3 */

//Le "=" c'est le symbole d'affection de la variable. Donc quand une variable et = contenu, on donne le contenu pour la variable. Apres ça la variable a le meme valeur que le contenu.

/* Question 4 */

let a = 5;
let b = a*2;

console.log(a + b);

/* Question 5 */

 let fakea = a;
 a = b;
 b = fakea;



/* Boucles */

/* Question 6 */

// Une boucle c'est une repetition de code avec une condition que si c'est vrai fait un tour si c'est faux le boucle termine.

/* Question 7 */

for(let i = 0; i < 27; i++){
    console.log("Il ne faut pas tricher !");
}

/* Question 8 */

// J'ajoute -3
// J'ajoute -1
// J'ajoute 1
// J'ajoute 3
// Au Final, a vaut 7

/* Question 9 */

for(let i = 1; i < 4; i++){
    for(let j = 7; i < 10; j++){
        console.log(i + " et " + j);
    }
}

/* Branchements Conditionel */
/* Question 10 */

// Si

/* Question 11 */

let c = 42;

if(c > 20){
    console.log("C'est Grand !");
} else if (c == 20){
    console.log("20 tout pile !");
} else {
    console.log("C'est petit !");
}

/* Functions */

/* Question 12 */

// Une fonction c'est un petit programme avec un cote interne et externe. Interne c'est la creation de la fonction, lui donner un nom(id) et si la function prend variables ou non. C'est l'interieur dune boite completement noir. Le cote externe se la appelation et la demarrage de la function. Appeler la function avec son id, les () sont le "button" pour demarrer la fonction et dans le () on coloque les donnes que besoin si on besoin des donnes.

/* Question 13 */

//forward(150);
// faceUp();

/* Question 14 */

//On define la function aquali

/* Question 15 */

//16

/* Question 16 */

//aquali(1,1,1)   ===>   (1+2*1 = 3 => 3+3*1 = 6 )   <=== Donc = 6  |
//aquali(2,2,2)   ===>   (2+2*2 = 6 => 6+3*2 = 12)   <=== Donc = 12 |
//aquali(3,3,3)   ===>   (3+2*3 = 9 => 9+3*3 = 18)   <=== Donc = 18 |
//                                                               ↓↓ |
//aquali(6,12,18) ===> (6+2*12 = 30 => 30+3*18 = 84) <=== Donc = 84 |

//aquali(aquali(1,1,1),aquali(2,2,2),aquali(3,3,3)) = 84

/* Question 17 */

function f1(num){
    num *= -1;
    return num;
}

console.log(f1(5));

/* Question 18 */

function f2(num1, num2){
    num1 = f1(num1);
    num2 = f1(num2);
    return f1(num1+num2);
}

console.log(f2(5, 7));

/* Tableaux */
/* Question 19 */

// Un tableau c'est une grand boite avec un id qui contient petit boites. Les petit boites contient le valeurs e ses id vont de 0 a la longeur du tableaux moins 1. Exemple: tabA[0], tabA cest le Id de la grand boite. Le [0] c'est le id, associé ao id principal, de le valeur dans la premier boite.

/* Question 20 */

let t = [1, 2, 3, 4, 5, 6 ,7 ,8, 9, 10];

/* Question 21 */

//valeur = 10 case = 9

/* Question 22 */

//valeur = 3 case = 2

/* Question 23 */

//array.pop();

/* Question 24 */

//array.length

/* Question 25 */

for(let i = 0; i < t.length; i++){
    console.log(t[i]);
}

/* TP1 - Jours de la semaine */

/* Question 26 */

let weekDays = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

/* Question 27 */

// weekDays[3]

/* Question 28 */

function nameOfDay(n){
    return weekDays[n];
}

/* Années Bissextilles */

/* Question 29 */

// 2010 n'est pas bissextile car elle n'est ni multiple de 400, ni multiple de 4

// 2011 n'est pas bissextile car elle n'est ni multiple de 400, ni multiple de 4

// 2012 est bissextile car elle n'est multiple de 400 mais multiple de 4 et n'est pas multiple de 100

// 2013 n'est pas bissextile car elle n'est ni multiple de 400, ni multiple de 4

// 2014 n'est pas bissextile car elle n'est ni multiple de 400, ni multiple de 4

// 2015 n'est pas bissextile car elle n'est ni multiple de 400, ni multiple de 4

// 2016 est bissextile car elle n'est multiple de 400 mais multiple de 4 et n'est pas multiple de 100

// 2017 n'est pas bissextile car elle n'est ni multiple de 400, ni multiple de 4

// 2018 n'est pas bissextile car elle n'est ni multiple de 400, ni multiple de 4

// 2019 n'est pas bissextile car elle n'est ni multiple de 400, ni multiple de 4

// 2020 est bissextile car elle n'est multiple de 400 mais multiple de 4 et n'est pas multiple de 100

// 2021  n'est pas bissextile car elle n'est ni multiple de 400, ni multiple de 4

/* Question 29 */

function isLeapYear(year){
    if(year%400 == 0 || year%4 == 0 && year%100 != 0){
        return true;
    }
    return false;
}

 isLeapYear(2021);
 isLeapYear(2020);
 isLeapYear(2000);
 isLeapYear(1900);