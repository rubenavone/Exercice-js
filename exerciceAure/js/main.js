"use strict";
//Block of variable//
let rect = $('#rect');
let create = $('#create');
let deleteOne = $('#delete-one-color');
let deleteAll = $('#delete-all');
let write = $('#writer');
let empty = $('#empty');
let shaker = $('#shaker');
let input = $('#input');
let fill = $('#fill');
let fillQuatre = $('#fill-quatre');
var divBox = "create50";
let countDiv = $("#divCount");


let cssSelector;
var color;
///////////////////////

//Controller

var controlCreateDiv = () => {
    var color = input.val();

    if (color != "red" && color != "blue" && color != "green" && color != "yellow" && color.length === 0) {
        color = "yellow";
        alert("Echec dans le choix de couleur | Valeur par défault jaune");
    } else if (color === "rand") {
        color = random();
    }
    else {
        color = input.val();
    }

    return color
}

var controlDeleteOne = () => {
    var color = input.val();
    if (color != "red" && color != "blue" && color != "green" && color != "yellow" && color.length === 0) {
        color = null;
        alert('Désoler aucune couleur ne correspont à votre input');
    } else {
        color = input.val();
    }
    return color
}
//////////
//Model

//Create a div in the vue
var createDivModele = (size = 'create50') => {
    if (size != "create50" && size != "create4") {
        size = "create50";
    }
    color = controlCreateDiv();
    let div = $(`<div id="${size}" class="${color}"></div>`);
    rect.append(div);

}
//Delete all in the rect
var deleteAllModele = () => {
    rect.html(' ');
}
//Delete all div filtered by input in the rect
var deleteOneModele = () => {
    color = controlDeleteOne();
    $(`.${color}`).remove();
}
//write something in each div
var writeInDiv = () => {
    var color = input.val();
    $("div").text(color);
}

//Delete writed things in boxes
var emptyDiv = () => {
    $("div").text('');
}

//Shake all the div

var shake = () => {
    $("div").effect("shake", { direction: "up" });
}

//////////
//some function

//random color //
let random = () => {
    let rand = Math.floor(Math.random() * 4);
    color;
    switch (rand) {
        case 0:
            color = "red";
            break;
        case 1:
            color = "blue";
            break;
        case 2:
            color = "green";
            break;
        case 3:
            color = "yellow";
            break
    }
    return color
}
/////////

///Randomize the experience for more fun !//

//Auto fill of the rectangle//
let fillingTheWhite = () => {
    deleteAllModele(); //unfill the rect
    var divBox = "create4";
    for (let i = 0; i < 30000; i++) {
        createDivModele(divBox);
    }
}

//Auto fill of the rectangle 50x50//
let fillingTheWhite50 = () => {
    deleteAllModele(); //unfill the rect
    var divBox = "create50";
    for (let i = 0; i < 192; i++) {
        createDivModele(divBox);
    }
}




/////////////////////////////


//OnClick function Block//

create.on('click', createDivModele);

deleteOne.on('click', deleteOneModele);

deleteAll.on('click', deleteAllModele);

write.on('click', writeInDiv);

empty.on('click', emptyDiv);

shaker.on('click', shake);

fill.on('click', fillingTheWhite50); //bouton remplir 50x50

fillQuatre.on('click', fillingTheWhite);//bouton remplir 4x4

//explode function 
$('article').on('click', '.red', function () {
    $(this).effect('explode');
});

//mouseOver green began blue 

$('article').on('mouseover', '.green', function () {
    $(this).attr("class", "blue");
});

//on click if is a yellow div change it after 3 sec in red

$('article').on('click', '.yellow', function(){
    $(this).attr('class','red');
})


//function counting all div in the page when you double click on the right button 

    

//Modal windows when you double click on div that show the count of div in the page
countDiv.dblclick(function(){

    $("#dialog-confirm").text(`Actualy the box have  ${$("div").length} div`);

    $( "#dialog-confirm" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
   /*    buttons: {
        "Delete all items": function() {
          $( this ).dialog( "close" );
        },
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      } */
    });
    
})
