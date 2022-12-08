/*
Exercice 1:
Créez une fonction pour concaténer deux tableaux entiers.

Exemple:
concatener([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

concatener([9, 8], [1, 5, 6, 7]) ➞ [9, 8, 1, 5, 6, 7]

concatener([1, 1, 1], [2, 2, 2]) ➞ [1, 1, 1, 2, 2, 2]

Les trois points (…) représentent l’opérateur « Spread » qui permet à une expression d’être élargi.
*/
function concatainer(Array1, Array2) {
    return[...Array1, ...Array2]

}


/*----------------------------------------------------------------------------------------------------------
Exercice 2:
Créez une fonction qui trouve l’index d’un élément donné. Si l’élément n’existe pas, retournez -1.

Exemple:
find([2, 7, 1], 7) ➞ 1

find([6, 9, 5], 6) ➞ 0

find([6, 7, 8], 9) ➞ -1

*/
function index (Array3, Index ) {
    return[Array3.indexOf(Index)]
}

/*******************************************************************************************
 Exercice 3:
Écrivez une fonction pour vérifier si un tableau contient un nombre particulier.

Exemple:
nbrExist([6, 7, 8], 7) ➞ true

nbrExist([1, 2, 3], 5) ➞ false

nbrExist([], 0) ➞ false
*/
function nbrExist (Array4, nb) {
  return console.log(Array4.includes(nb));
   // return[Array4.includes(nb)]
}

  /****************************************************************************
   Exercice 4:
Créez une fonction qui prend une chaîne (un nom aléatoire). Si le dernier caractère du nom est un « s »,
retournez TRUE, sinon retournez FALSE.

Exemple:

checkS("Thomas") ➞ true

checkS("Ali") ➞ false

checkS("Alex") ➞ false

checkS("Elvis") ➞ true
   */

function checkS (name) {
  return console.log(name.includes('s'));
//return str[str.length-1] === "s"
}

/***************************************************************************
 Exercice 5:
Créez une fonction qui renvoie TRUE si une chaîne contient un ou des espaces. Sinon renvoie FALSE.

Exemple:

containSpaces("Thomas") ➞ false

containSpaces("Hello World!") ➞ true

containSpaces(" ") ➞ true

containSpaces("") ➞ false
*/
function containSpaces (name2) {
  return console.log(name2.includes(' '));
  //return str.includes(' ')
}

/******************************************************************
 Exercice 6 :
Créez une fonction qui prend une chaîne représentant l’humeur et renvoie une phrase au format suivant: « Aujourd’hui, je me sens {feeling} ». Cependant, si aucun argument n’est passé, retournez « Aujourd’hui, je me sens neutre ».

Exemple:

myFeeling("heureux") ➞ "Aujourd'hui, je me sens heureux"

myFeeling("triste") ➞ "Aujourd'hui, je me sens triste"

myFeeling() ➞ "Aujourd'hui, je me sens neutre"
*/

function myFeeling (Feel) {
  return `Aujourd'hui, je me sens ${Feel || "neutre"}`
}

/****************************************************
 Exercice 7

Créez une fonction qui prend une chaîne et renvoie TRUE ou FALSE, selon que les caractères sont en ordre
 ou non.

Exemple:

checkOrder("abc") ➞ true

checkOrder("zyx") ➞ false

checkOrder("123") ➞ true
 
checkOrder("aabbcc") ➞ true

 */
function checkOrder (string) {
  return string === string.split("").sort().join("")
}


/********************************************************
 * Exercice 8
 * 
 Créez une fonction qui ajoute une sous-chaîne à la fin de chaque chaîne du tableau.

Exemple:

addEnd(["accept", "achet", "adapt"], "able") ➞ ["acceptable", "achetable", "adaptable"]

addEnd(["aim", "act", "ard"], "ant") ➞ ["aimant", "actant", "ardant"]
*/
function addEnd (Array5, word) {
  return Array5.map(mot => mot + word);

}

/*******************************************************************
 Exercice 9
* Créez une fonction qui vérifie si l’argument est un entier ou une chaîne. Renvoie « int » s’il s’agit d’un entier et « string » s’il s’agit d’une chaîne.

Exemple:

checkIntOrStr("WayToLearnX") ➞ "string"

checkIntOrStr(1) ➞ "int"

checkIntOrStr("250") ➞ "string"
 *
 */
function checkIntOrStr (prout) {
  return typeof(prout);

}


/********************************************************************
 
Exercice 10
Créez une fonction qui prend une phrase et renvoie le nombre de mots.

Exemple:

count("Welcome to WWM) ➞ 3

count("Hello World") ➞ 2

count("I am going to my school") ➞ 6
*/
function count(truc) {
  return truc.split(/\s+/).length;
}

/******************************************************************
 Exercice 11

Créez une fonction récursive qui renvoie le total de tous les nombres impairs jusqu’à n(inclus). 
n sera donné comme un nombre impair.
 Récursive = qui s'appelle elle même.
Exemple:

sommeImpair(3) ➞ 4
// 1 + 3 = 4

sommeImpair(7) ➞ 16

sommeImpair(59) ➞ 900
*/
function sommeImpair (n) {
  var result = 1
  for (var i = 1; i <= n; i++) {

  }


}


/*************************************************************************
 Exercice 12

Créez une fonction qui renvoie TRUE si la chaîne passée en paramètre ne contient
  que des lettres majuscules ou minuscules.

  Exemple:

isSameCase("GérardTourres") ➞ false

isSameCase("gerard") ➞ true

isSameCase("TOURRES") ➞ true
*/


/****************************************************************************
 Exercice 13

Une année bissextile a un jour ajouté à février pour être synchronisée avec l’année saisonnière. Une année bissextile apparaît avec une fréquence régulière, déterminée par la règle ci-dessous:

Une année doit être divisible par 400 ou divisible par 4 et non pas 100.

Vous devez implémenter une fonction qui renvoie TRUE si c’est une année bissextile, ou FALSE si ce n’est pas le cas.

Exemple:

bissextile(2020) ➞ true
// Divisé par 4 et non par 100.

bissextile(1200) ➞ false
// Divisé par 4, mais également divisé par 100.

bissextile(2000) ➞ true
// Divisé par 400.
 */
