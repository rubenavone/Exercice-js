/* Create an array containing the names of a few friends. Using a for loop, create a p element for each of your friends
    and add it to end of the body using the append method. Use Jquery to change the h1 element so it says My friend instead of HELLO world
    Use the hide method followed by the fadeIn method to fade in each name as its provided
    now modify the p element you created to add the text smells! after each  friends .
    Hint: if you selected the p elements using $("p"), the append method will apply to all element */




//Create an array containing name of few friends 
let arrayOfFriends = ["Elora", "Kévin", "Joy", "Romain", "Thibault", "Sabrina"];

//Use a loop to create a p for your friends (i change it for an ul)

for(let i = 0; i < arrayOfFriends.length; i++){
    $("ul").append(`<li id="friend${i}"> ${arrayOfFriends[i]} </li>`);
    $(`#friend${i}`).fadeIn(3000);
}


//Use Jquery to change H1 element 
$("h1").text("This is my friend list");

//Use the hide method followed by fade in method to fade in each name
$("li").hide(1000) ;
$("li").fadeIn(3000);

//modify the element to add the text smells after each friends name
$('li').append("smells!");


