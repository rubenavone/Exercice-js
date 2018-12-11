/* 
Nombre mystère

● Il faut deviner le nombre choisi par l'ordinateur

○ choisir un nombre entre 0 et 9

○ le programme dit si le nombre mystère est plus ou moins

○ après 3 tentatives, la partie est perdue

● Bonus

○ pouvoir choisir les nombres min et max

○ pouvoir choisir le nombre de tentatives lecture */

var continu = true;
var error = true;
var error2 = true;
while (continu) {
    while (error) {
        var min = Number(prompt("Choisir nombre minimum"));
        var max = Number(prompt("Choisir nombre maximum"));
        if (min > max || min < 0 || isNaN(min) || isNaN(max)) {
            alert("Vos saisi sont incorectes");
        } else {
            while(error2){
                var tentatives = Number(prompt("Choisir un nombre de tentatives"));
                if (tentatives >= 0){
                     var randomNumber = Math.floor(Math.random() * (max - min) + min);
                    alert(randomNumber);
                    error2 = false;    
                }else {
                    alert('Le nombre de tentatives doit être positif !')
                }    
            }
            error = false;
        }
    }
    for (i = 0; i < tentatives;i++ ) {
        var input = Number(prompt(`Quel est le nombre mystère ? Vous avez ${tentatives - i} tentatives restantes`));
        if (input > randomNumber && input <= max) {
            alert("Il est plus petit");
        } else if (input < randomNumber && input >= min) {
            alert("Il est plus grand");
        } else if (input > max || input < min) {
            alert("Votre saisi n'est pas contenu entre votre min et max défini plus tôt.");
            i--;
        } else {
            alert("Bravo Vous avez trouvé");
            i = tentatives;
        }
    }
    continu = false;
}
