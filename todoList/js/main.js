//Fonction d'ajout d'éléments 
function addTask() {
    //Créer un element 
    let task = `<li class="list-group-item"> ${$('input').val()} <i class="fa fa-trash"></i> <i class="fa fa-edit"></i> <i class="fa fa-check"></i></li>`;
    $('ul').append(task);
    $("input").val("");
}

$('button').on('click', addTask)


$("input").keypress(function (event) {
    if (event.which == 13) {
        addTask();
    }
});

//Fonction de supression
$("ul").on("click", ".fa-trash", function () {
    $(this).parent().remove();
})

$("ul").on("click", ".fa-edit", function () {
    $("#text_edit, #edit").remove()
    $(this).parent().append(`<input type='text' id='text_edit'/> <button id="edit" class="btn btn-warning rounded-btn">Modifier</button>`);
    $("edit").on("click", function () {
        console.log("change the world")
    })
})