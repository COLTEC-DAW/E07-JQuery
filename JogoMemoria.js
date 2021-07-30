$(document).ready(()=> {
    $(".cards").flip({trigger:'manual'});
})

var CartaSelec = [];
var Cartas = $(".cards").get();







function AjustarCartas(){
    var images = $(".back>img");
    var sources = ['./img/Aatrox_BloodMoon.jpg','./img/Katarina_Death_Sworn.jpg','./img/Seraphine_KDA_AO.jpg','./img/Sylas_Freljord.jpg','./img/VelKoz_BlackFrost.jpg','./img/Viktor_Death_Sworn.jpg','./img/Volibear.jpg','./img/Yasuo_NightBringer.jpg','./img/Aatrox_BloodMoon.jpg','./img/Katarina_Death_Sworn.jpg','./img/Seraphine_KDA_AO.jpg','./img/Sylas_Freljord.jpg','./img/VelKoz_BlackFrost.jpg','./img/Viktor_Death_Sworn.jpg','./img/Volibear.jpg','./img/Yasuo_NightBringer.jpg']
    for( let i = sources.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * i);
        var temp = sources[i];
        sources[i] = sources[j];
        sources[j] = temp;
    }
    for(let i = 0; i < images.length;i++){
        images[i].src = sources[i];
    }
}
AjustarCartas()

function VirarCarta(carta){
    if (carta.estado == "Desvirado"){
        $(carta).flip(true);
        CartaSelec.push(carta);
    }
    console.log(carta.estado);

    if (CartaSelec.length > 0){
        CartaSelec.length == 1 ? CartaSelec[0].estado = "Virado" : CartaSelec[1].estado = "Virado";
    }
    
    // if(CartaSelec.length == 1){
    //     CartaSelec[0].estado = "Virado"
    // }
}

function DesvirarCarta(carta){
    $(carta).flip(false);
    carta.estado = "Desvirado";
}

$(".cards").click(function(){
    VirarCarta(this);
    VerifPar()
})

$(".cards").get().forEach(function(carta){
    carta.estado = "Desvirado";
})

function VerifPar(){
    if (CartaSelec.length >= 2){
        var Carta1 = CartaSelec[0];
        var Carta2 = CartaSelec[1];
        if(Carta1.querySelector('.back>img').src == Carta2.querySelector('.back>img').src){
            console.log("foi")
            CartaSelec = [];
        }else{
            setTimeout(() => {
                DesvirarCarta(Carta1);
                DesvirarCarta(Carta2);
            }, 800);
            CartaSelec = [];
        }
    }
}