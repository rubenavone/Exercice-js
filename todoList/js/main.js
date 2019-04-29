function addTask(){
    //Créer un element 
    let task = `<li class="list-group-item"> ${$('input').val()} <i class="fa fa-trash"></i></li>`;
    console.log(task);
    $('ul').append(task);
    $("input").val("");
}

$('button').on('click', addTask)

$("input").keypress(function(event){
    if(event.which == 13){
        addTask();
    }
});

$("fa-trash")