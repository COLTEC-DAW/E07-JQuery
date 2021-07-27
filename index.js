var ImagesTag = document.body.getElementsByTagName("img");
var CardsTag = document.body.getElementsByClassName("carta");
var Pontuacao = document.getElementById("pontos");
var carta_default = "carta_virada.png";
var primeira_carta="none";
var segunda_carta="none";
var primeira_carta_index;
var segunda_carta_index;
var pontos;
pontos=0;
var verso_cartas = [
    "Barkk.png",
    "Fluff.png",
    "Kaalki.png",
    "Plagg.png",
    "Sass.png",
    "Tikki.png",
    "Trixx.png",
    "Tuppu.png",
    "Barkk.png",
    "Fluff.png",
    "Kaalki.png",
    "Plagg.png",
    "Sass.png",
    "Tikki.png",
    "Trixx.png",
    "Tuppu.png"
];

function shuffleArray(arr) {
    // Loop em todos os elementos
for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
    const j = Math.floor(Math.random() * (i + 1));
    // Reposicionando elemento
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
// Retornando array com aleatoriedade
return arr;
}
function inicio(){
    shuffleArray(verso_cartas);
    alert("As cartas foram embaralhadas");
    pontos=0;
    conta_pontos();
}
function reinicio(){
    for(var i=0;i<16;i++){
        ImagesTag[i].src = carta_default;
    }
    alert("O jogo foi reiniciado");
    inicio();
}
function conta_pontos(){
    Pontuacao.textContent = "Pontuação: " + pontos; 
}

function verifica(){
    if(primeira_carta==segunda_carta&&primeira_carta_index!=segunda_carta_index){
        pontos++;
        conta_pontos();
        primeira_carta="none";
        segunda_carta="none";
        primeira_carta_index=-1;
        segunda_carta_index=-1;     
        return;
    
    }
}
function CardClick(carta){
    var index = -1;
    for(var i=0;i<16;i++) if(carta === CardsTag[i]) index = i;
    if(index == -1) return;
    if(primeira_carta!="none" && segunda_carta!="none"){
        ImagesTag[primeira_carta_index].src=carta_default;
        ImagesTag[segunda_carta_index].src=carta_default;
        primeira_carta="none";
        segunda_carta="none";
        primeira_carta_index=-1;
        segunda_carta_index=-1;
        return;
    }

    if(primeira_carta=="none"){
        primeira_carta=verso_cartas[index];
        primeira_carta_index=index;
        ImagesTag[index].src = verso_cartas[index];
        
        return;
    }
    if(primeira_carta!="none"&&segunda_carta=="none"){
        segunda_carta=verso_cartas[index];
        segunda_carta_index=index;
        ImagesTag[index].src = verso_cartas[index];
        verifica();  
        if(pontos>=8){
            alert("Parabéns, vc ganhou o jogo!");
            alert("Clique em reiniciar para jogar novamente");
        }
        return;
    } 
 return;
}

  