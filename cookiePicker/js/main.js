$(document).ready(function(){

    let message = [
        "Bonjour", "Cake is a lie", "PLay the game", "like a virgin", "sbouidibouididboui"
    ];

    random = () => {
        let number = Math.floor(Math.random() * message.length)
        return number
    }
    

    let i = 0;

    $('.cake').on('click', function(){
        i++

        let modulo = i % 20;
        if ( modulo === 0){
            alert(message[random()])
        }
        $("span").text(i);
    })
});