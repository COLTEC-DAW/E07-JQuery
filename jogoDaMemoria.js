$(document).ready(()=> {

    $(".cards").flip();
})

//Variáveis
var count = 0;
var cardPair = []
var teste = [];
var teste1 = [];

//Função para contar numero de cartas viradas
const contar = () => {
    count++;
    if(count > 2){
        alert("Você perdeu")
        $(".cards").flip(false)
        count = 0
    }else{
        alert(count);
    }
}

const check = () =>{
    if(count == 2){
        if(cardPair[0].querySelector('.back>img').src == cardPair[1].querySelector('.back>img').src ){
            $(cardPair[0]).off(".flip");
            $(cardPair[1]).off(".flip");
            count = 0;
            cardPair = [];
        }else{
            console.log("erro")
            count = 0;
            $(cardPair[0]).flip(false);
            $(cardPair[1]).flip(false);
            cardPair = [];
        }
    }
}

function acerto(){


}

//Função que faz uma ação caso a carta seja virada
$(".cards").on('flip:done',function(){
    var flip = $(this).data("flip-model");
    if(flip.isFlipped){
        count++;
        cardPair.push(this);
        check();
    }
})

//Embaralha as cartas
function embaralhar(){
    var images = $(".back>img");
    var sources = ['./Memoria/Ainz.png','./Memoria/Albedo.png','./Memoria/Aqua.png','./Memoria/Emilia.png','./Memoria/Filo.png','./Memoria/Ram.jpg','./Memoria/Raphtalia.png','./Memoria/Rem.png','./Memoria/Ainz.png','./Memoria/Albedo.png','./Memoria/Aqua.png','./Memoria/Emilia.png','./Memoria/Filo.png','./Memoria/Ram.jpg','./Memoria/Raphtalia.png','./Memoria/Rem.png']
    for( let i = sources.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * i)
        var temp = sources[i]
        sources[i] = sources[j]
        sources[j] = temp
    }
    for(let i = 0; i < images.length;i++){
        images[i].src = sources[i];
    }
}
embaralhar()