/* Delaying Animation exercice 3
    The delay method can be used to delay animation, Using delay,
     fadeOut, and fadeIn, then fade black again after 5 sec*/

/* Using fadeTo Exercice 4
    Try using the fadeTo method , Its first argument is a number of milliseconds, 
    as in all the other animation methods. Its second argument is a number between 0 and 1. 
    what happens when tou rune the folowing code ?
    $("h1").fadeTo(2000, 0.5);
    What do you think the second argument means ?
    Try using different values between 0 and 1 to figure out what the seconds argument is used for. 
    */     



$("h1").delay(5000).fadeOut(1000);

$("h2").fadeTo(2000, 0);//first argument is for the time of the animation, the second is for the opacity

