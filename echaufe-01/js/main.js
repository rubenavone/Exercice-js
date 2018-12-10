/*
Echauffement JS (Ceux qui le souhaitent peuvent directement passer aux exercices)

Comment tu t’appelles? Vérifier le nom :

● Entre 1 et 10 caractères.

● Non-vide.

Répondre :

● “Bonjour !”*/

let saisis = "" ;
let loop = true;

while(loop){

   saisis = String(prompt("comment tu t'apelle"));

    if(saisis.length === 0 || saisis.length > 10){
        console.log("Votre saisis n'entre pas dans les condition");
    }else {
        console.log(`Bonjour ! ${saisis}`);
        loop = false;
    }
}
