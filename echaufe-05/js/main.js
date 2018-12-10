/* Un programme demande de saisir 10 notes ( une par une et de 0 à 20 ) et affiche la moyenne à la fin */

let tableau = []
let nombreDeNote = 2;

for (let i = 0; i < nombreDeNote; i++) {
    tableau.push(Number(prompt("Entrez votre note")));
    console.log(tableau[i]);
    
}

