/*Chapter talking about the DOM & JQUERY 
    V = vanilla
    J = Jquery
*/

//this lil script prompt a message to the user , and change the title 
//done in vanilla
let titleV = document.getElementById("first-title"); 
let newHeadingTextV = prompt("Please give a new name to the title (vanilla)");
titleV.innerHTML = newHeadingTextV;



//The same things done with Jquery
let titleJ = $("#first-title");
let newHeadingTextJ = prompt("Please give a new name to the title (Jquery)")
titleJ.text(newHeadingTextJ);

//lil script adding a title if the user not enter 

if(newHeadingTextJ === "" || newHeadingTextV === "" ) {
    titleJ.text("Default Title beacuse title is empty");
}

//in this example we will add content on the page 

$("body").append("<p id='generatedContent'>This content is generated with the append function of jquery </p>");
$("#generatedContent").append("And now i add some Text in the new Generated content");

//Now we will use for loop to multipli the content

for(let i = 0 ; i < 3; i++ ) {
    let bodyJ = $("body");
    bodyJ.append(`<p>This is the ${i} line of the loop</p>`);
}
    let bodyJ = $("body");
bodyJ.append("<p>You can notice the for loop index begin at 0 <br> The let declaration stay in the scoop if the for , i have to init it again </p>");

//the same things with a prompt
bodyJ.append(`<h1> Thats All you love honney </h1>`)

for (let i = 0 ; i < 3; i++){
    let hobby = prompt('Tell one of tour hobby');
    //I can call bodyJ because i declared it again at the line 36
    bodyJ.append(`<p> ${hobby} </p>`);
}

//Animate things with Jquery
$("h1").fadeOut(3000);//title disapear in 3sec , 3000 ms 
//you can call multiple things in one row 
$("p").append("changing evrything in this page is amazing").fadeOut(1000);
//some animation
$("p").fadeIn(5000);
$("h1").fadeIn(5000);
$("h2").slideUp(1000).slideDown(1000);

//Do some test on slideUp slideDown methods and hide and show 

$("h2").slideUp(1000);
$("h2").slideDown(1000);

$("h2").hide(1000); // its the same things hide = slideUp
$("h2").show(1000);// show = slideDown

//Challenge #1 listing your friends with jquery and making them smell 


 