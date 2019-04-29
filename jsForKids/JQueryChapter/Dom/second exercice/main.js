/* Making a heading flash 
    How could you use FadeOut and fadeIn to cause the heading to flash five times,
    once a second ? How could you do this using a for loop?
    Try modifying your loop so it fades out and fades in over 1 second the first time , 
    over 2 seconds the second times , over 3 seconds the third times, and so on */

let time = 500; //This will be the activation time

for (let i = 0; i < 3; i++) {
    $("h1").fadeOut(time);
    $("h1").fadeIn(time);
    time += 500 // concatenate at end of loop (1st round 1sec| 2nd round 2 sec |3rd round 3 sec)
}