$(document).ready(()=> {
    $(".cards").flip({trigger:'manual'});
    MostraErros();
    MostraPontos();
    AddEstado();
})

var CartaSelec = [];
var Pontuação = 0;
var Erros = 0;

// Embaralha as cartas ao redor do tabuleiro do jogo
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

//
function VirarCarta(carta){
    // Para garantir que a pessoa n clique duas vezes na mesma carta
    if (carta.estado == "Desvirado"){
        $(carta).flip(true);
        CartaSelec.push(carta);
    }

    //Verifica se o vetor de carta selecionada não é nulo
    if (CartaSelec.length > 0){
        // Se o tamanho do vetor for igual a 1 significa que a carta de indice 0 deve ser virada, por ser a unica , e se não for 1 viramos a segunda carta
        // Como o número máximo de cartas selecionadas é 2 podemos assumir que se o tamanho for igual a 1, se trata da primeira carta, se for diferente de 1 é a segunda
        CartaSelec.length == 1 ? CartaSelec[0].estado = "Virado" : CartaSelec[1].estado = "Virado";
    }
}

// Desvira a carta e adiciona o estado de Desvirado
function DesvirarCarta(carta){
    $(carta).flip(false);
    carta.estado = "Desvirado";
}

// Ao Clicar Vira a carta e verifica se há um par, e se o par é igual
$(".cards").click(function(){
    VirarCarta(this);
    VerifPar()
})

// Adiciona o estado de Desvirado a totas as cartas
function AddEstado(){
    $(".cards").get().forEach(function(carta){
        carta.estado = "Desvirado";
    })
}

function VerifPar(){
    if (CartaSelec.length >= 2){
        var Carta1 = CartaSelec[0];
        var Carta2 = CartaSelec[1];
        if(Carta1.querySelector('.back>img').src == Carta2.querySelector('.back>img').src){
            CartaSelec = [];
            Pontuação ++;
            MostraPontos();
        }else{
            // Para que o usuário sempre enxergue a segunda carta caso ele erre
            setTimeout(() => {
                DesvirarCarta(Carta1);
                DesvirarCarta(Carta2);
                Erros ++;
                MostraErros();
            }, 800);

            CartaSelec = [];
        }
    }
}

// Mostrar os pontos no HTML
function MostraPontos(){
    $("#Pontos").html(Pontuação);
}

// Mostrar os erros no HTML
function MostraErros(){
    $("#Erros").html(Erros);
}

// Reinicia o jogo ao apertar o botão
$("#ButãoR").click(function(){
    Reinicia();
})

function Reinicia(){
    Pontuação = 0;
    Erros = 0;
    CartaSelec = [];

    $(".cards").flip(false);

    MostraPontos();
    MostraErros();
    AddEstado();

    // timeout para evitar que a pessoa enxergue a carta mudando enquanto a carta vira.
    setTimeout(() => {
        AjustarCartas();
    }, 400);
}