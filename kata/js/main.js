/* Kata : développer un nombre
    Rédigez une fonction expandedForm qui écrive un nombre sous sa forme développée.

      expandedForm(12); // Should return '10 + 2*1'
      expandedForm(42); // Should return '4*10 + 2*1'
      expandedForm(70304); // Should return '7*10000 + 3*100 + 4*1'   

 */

//Une fonction qui prend un parametre en argument et le retourne une 
//fois traité

//es 6
expandedForm = (enteredNumber) => {
    //On transforme notre chiffre en chaine de charactere
    enteredNumber = enteredNumber.toString();

    //A chaque fois qu'il tombe sur un zero il l'exclus
    for (let i = 0; i < enteredNumber.length; i++) {
        //if 0 = 
    }

    return enteredNumber;
}

//Vanilla 
function jeanCharlesLeMathematicien(n) {
    var l = n.toString();
    var result = [];

    for (let i = 0; i < l.length; i++) {
        if (l[i] != 0){
            if(l[i] == 1){
                result.push(Math.pow(10, l.length - i - 1));
            }
            else {
                result.push(l[i] + "*" + Math.pow(10, l.length - i - 1))
            }
        }        
    }
    return result.join(" + ")
}
console.log(jeanCharlesLeMathematicien(40135))