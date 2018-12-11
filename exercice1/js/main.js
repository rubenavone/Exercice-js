/*
● Réaliser un calculatrice simple

○ choisir une opération : + * / -

○ choisir un 1er nombre

○ choisir un 2eme nombre

○ Afficher le résultat

● Bonus (Pour ceux qui ont encore du temps devant eux..)

○ améliorer l'UI/UX pour que cela ressemble à une vraie calculatrice */

refresh();

function insertNumber(elemID, text) {
    var elem = document.getElementById(elemID);
    elem.value += text;
}

function calculateThis() {
    var input = document.getElementById('js-valeur').value;
    var results = eval(input);
    document.getElementById('js-valeur').value = results;
}

function refresh() {
    document.getElementById('js-valeur').value = "";
}