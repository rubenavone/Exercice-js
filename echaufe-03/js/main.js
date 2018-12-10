/* 
● Demander l'identifiant puis le mot de passe

● vérifier que :

    l'identifiant saisi a plus de 4 caractères

    l'identifiant contient un @

    l'identifiant est "lea@gmail.com" et son mot de passe "12345"

Bonus : reprendre l'exercice login/password en acceptant 
cette fois plusieurs paires mail/mdp
et en donnant 4 essais à l'utilisateur.
 */

let login = "";
let password = 12345;
let verifEmail = new RegExp("^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$");

login = String(prompt('Rentre ton mail'));

if (verifEmail.test(login)) {
    console.log('Votre email est valide');
}else{
    console.log('Email incorecte');
}

password = prompt('Rentre ton mot de passe');

console.log('Merci d\'avoir entrer votre mot de passe');


