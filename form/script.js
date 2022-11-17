//Exo1

function getName1() {
    // Sélectionner l'élément input et retourner sa valeur
    return document.getElementById("name1").value;
    }
function displayName1(nom) {
    document.getElementById("resultName1").value=nom;
}
function calcul1() {
    var nom=getName1();
    displayName1(nom);
}

// Événement
var boutonUn=document.getElementById("btn1");
// autre méthode :
// var boutonUn=document.querySelector("#btn1");
boutonUn.addEventListener("click", calcul1, false);

//Exo2
function getName2() {
    return document.getElementById("zonedetexte2").value;
}
function displayName2(zonedetexte) {
    document.getElementById("resultZonedetexte2").value=zonedetexte;
}
function calcul2() {
    var nom=getName2();
    displayName2(nom);
}
var boutonDeux=document.getElementById("btn2");
boutonDeux.addEventListener("click", calcul2, false);

//Exo3

function getName3() {
    return document.getElementById("listePlanet3").value;
}
function displayName3(listplanet) {
    document.getElementById("resultPlanet3").value=listplanet;
}
function calcul3() {
    var nom=getName3();
    displayName3(nom);
}
var boutonTrois=document.getElementById("btn3");
boutonTrois.addEventListener("click", calcul3, false);

//Exo4

function getBoutonsRadio() {
    return document.getElementsByName("direction4");
}
function displayCheckedElements(element) {
    console.log(element.length)
    for(let i = 0; i < element.length; i++) {
        const currentElement = element[i];
        if (currentElement.checked) {
            document.getElementById("resultDirection4").value = currentElement.value;
        }
    }
}
function calcul4() {
    var element=getBoutonsRadio();
    displayCheckedElements(element);
}
var boutonQuatre=document.getElementById("btn4");
boutonQuatre.addEventListener("click", calcul4, false);


//Exo5

function getJour() {
    return document.getElementsByName("jour5");
}
function displayJour(element) {
    for (let i = 0; i < element.length; i++) {
        const currentElement = element[i];
        if (currentElement.checked) {
            document.getElementById("resultJour5").value += currentElement.value;
        }
    }
}
function calcul5() {
    var element=getJour();
    displayJour(element);
}
var boutonCinq=document.getElementById("btn5");
boutonCinq.addEventListener("click", calcul5, false);

//Exo6

function getFormatNumerique() {
    return document.getElementById("formatNumerique6").value;
    
}
function displayFormatNumerique(formatNumerique) {
    document.getElementById("resultFormatNumerique6").value=formatNumerique;
}
function calcul6() {
    var nom=getFormatNumerique();
    displayFormatNumerique(nom);
}
var boutonSix=document.getElementById("btn6");
boutonSix.addEventListener("click", calcul6, false);

//exo7

function getCurseur() {
    return document.getElementById("formatCurseur7").valeur;
}
function displayCurseur(nb) {
    document.getElementById("resultFormatCurseur7").value=nb;
}
function calcul7() {
    var nom=getCurseur();
    displayCurseur(nom);
}
var boutonSept=document.getElementById("btn7");
boutonSept.addEventListener("click", calcul7, false);
//exo9
