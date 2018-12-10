/* Le programme tire au hasard une opération ( + * - ) et deux chiffres

● le programme demande le résultat de l'opération à l'utilisateur » ex : "combien font 4 * 7"

● affiche si la réponse est juste ou fausse */

let randOperator;
let resulte;
let randNumberOne = 23;
let randNumberTwo = 23 ;
let saisisreponse;
let reponseVerif = false;

randOperator = Math.floor(Math.random() * Math.floor(4)); 
randNumberOne = Math.floor(Math.random() * Math.floor(100)); 
randNumberTwo = Math.floor(Math.random() * Math.floor(100)); 

console.log(randOperator);

if (randOperator === 0){
    resultat = randNumberOne + randNumberTwo;
    console.log (`${randNumberOne} + ${randNumberTwo} = ${resultat}`)
}else if ( randOperator === 1){
    resultat = randNumberOne - randNumberTwo;
    console.log (`${randNumberOne} - ${randNumberTwo} = ${resultat}`)
}else if (randOperator === 2) {
    resultat = randNumberOne * randNumberTwo;
    console.log (`${randNumberOne} * ${randNumberTwo} = ${resultat}`)
}else if (randOperator === 3){
    resultat = randNumberOne / randNumberTwo;
    console.log (`${randNumberOne} / ${randNumberTwo} = ${resultat}`)
}else {
    console.log('Probleme l\'operateur a un soucis');
}

