/* Un programme demande de saisir 10 notes ( une par une et de 0 à 20 ) et affiche la moyenne à la fin */

let tableau = [];
let nombreDeNote = 10;
let moyenneGenerale = 0;
let somme = 0;

for (let i = 0; i < nombreDeNote; i++) {

    tableau.push(Number(prompt("Entrez votre note entre 0 et 10")));

    if(tableau[i] > 10 || tableau[i] < 0){
        console.log('votre saisis est eronner elle ne sera pas compter ...')
    }else {
        somme += tableau[i];
    }
    

    console.log(somme);

    console.log(tableau[i]);
}

console.log("Nous allons calculer la moyenne generale de la classe !");

moyenneGenerale = somme / nombreDeNote;

console.log(moyenneGenerale);