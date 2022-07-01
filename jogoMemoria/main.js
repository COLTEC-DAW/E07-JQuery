const cartas = [
    "/assets/castelo\ de\ diamante.jpg",
    "/assets/lago\ dos\ cisnes.jpg",
    "/assets/magia\ dos\ aladus.png",
    "/assets/segredo\ das\ fadas.jpg",
    "/assets/princesa\ e\ a\ plebeia.jpg",
    "/assets/quebra\ nozes.jpg",
    "/assets/rapunzel.jpg",
    "/assets/tres\ mosqueteiras.jpg"
];

var baralho = [];
var previousSource = null;
var previousThis = null;
var currentSource = null;
var currentThis = null;
var revealed = 0;

function Random(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function MontaBaralho(inicio, fim){
    for(i = 0; i < 8; i++){
        for(y = 0; y <= i; y++){
            if(baralho[i] == baralho[y]){
                
            }
        }
        baralho[i] = baralho[i] + i;
    }
}


function a(cartinha){
    let qnt = 0;
    cartinha = Random(1, 8);
    for(y = 0; y < 16; y++){
        if(cartinha == baralho[y]){
            qnt++;
        }
    }
    if(qnt > 2){
        a(cartinha);
    }
}



function RandomCartas(){
    for(i = 1; i < 17; i++){
        $("#carta" + i).addClass("card" + Random(1 ,8));
    }
}


$(document).ready(function(){

    RandomCartas();
    var move = 1;
                
    $(".card").click(function(){

    $(this).find("img").hide();
    console.log(move);

    if(move >= 2){

        if( $(this).css("background-image") != previousSource ){
                                
            $(this).find("img").delay(1000).fadeIn();
                $(previousThis).find("img").delay(1000).fadeIn();

        }
        else {
                revealed = revealed + 2;
        }

        move = 1;
        console.log(move);
        }
    else if (move == 1){
                        
        previousThis = this;
        previousSource = $(this).css("background-image");
        move++;
    }

    if(revealed > 16){
            alert("PARABENS VOCE GANHOU!!!1!!11");
    }
    })

})