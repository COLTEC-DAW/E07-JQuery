// Acesso aos elementos do HTML
const ImagesTag = document.body.getElementsByTagName("img");
const CardsTag = document.body.getElementsByClassName("card");
const PontosTXT = document.getElementById("Pontos");
const ErrosTXT = document.getElementById("Erros");

// Nome & caminho padrão das imagens
const Images = ["csharp.png","css.png","html.png","java.png","mysql.png","php.png","python.png","js.png"];
const DefaultPath = "./Icones/Icon_";

// Configuração dos temporizadores
const ImagensDisponiveis = 3800; // milisegundos
const TempoRestart = 750;        // milisegundos

// Configurações do jogo
var Pontos = 0;
var Erros = 0;
var EmCurso = false;
var ClickBlock = false;

var Positions = null;
var Selected_01 = { card: null, img: null, imgIndex: -1 };
var Selected_02 = { card: null, img: null, imgIndex: -1 };
var ParEncontrado = [false,false,false,false,false,false,false,false];

// Restaurar variaveis
function RestartData(){
    Pontos = 0;
    Erros = 0;
    UpdatePoints();
    EmCurso = false;
    ClickBlock = false;

    Positions = null;
    ClearSelected();
    ParEncontrado = [false,false,false,false,false,false,false,false];
}

// Definição randomica da posição de cada imagem no tabuleiro
function DefinePositions(){
    var count = [0,0,0,0,0,0,0,0];
    var pos = [];

    var validate = true;
    var check = [false,false,false,false,false,false,false,false];
    while(validate){
        var aux = Math.floor(Math.random() * 10);
        if(aux <= 7 && aux >=0 && count[aux]<2){
            pos.push(aux);
            count[aux]++;
            if(count[aux]==2)check[aux] = true;
        }

        if(check.indexOf(false) == -1) validate = false;
    }
    
    return pos;
}

// Exibição de todas as imagens no mesmo instante
function ShowAllImages(){
    for(var i=0;i<16;i++) {
        ImagesTag[i].src = DefaultPath + Images[Positions[i]]; 
        CardsTag[i].style.backgroundColor = "#F1C4FF";
    } 
}

// Oculta todas as imagens no mesmo instante
function HideAllImages(){ 
    for(var i=0;i<16;i++) {
        ImagesTag[i].src = "./Icones/Icon_back.png";
        CardsTag[i].style.backgroundColor = "#B5B5FD";
    }
}

// Inicia o jogo e realiza as configurações iniciais
function StartGame(){
    if(EmCurso){
        alert("O Jogo ja foi iniciado!\nUtilize o botão Reiniciar!");
        return;
    }

    EmCurso = true;
    Positions = DefinePositions();

    ShowAllImages();
    setTimeout(HideAllImages,ImagensDisponiveis);
}

// Reinicia o jogo e as configurações iniciais
function RestarGame(){
    RestartData();

    HideAllImages();
    setTimeout(StartGame,TempoRestart);    
}

// Clique em um card
function CardClick(card){
    if(Selected_01.card == card && Selected_01.card != null) return;
    if(ClickBlock) return;
    if(!EmCurso){
        alert("Aperte o botão iniciar primeiro!");
        return;
    }
    
    var index = -1;
    for(var i=0;i<16;i++) if(card === CardsTag[i]) index = i;
    if(index == -1) return;

    if(ParEncontrado[Positions[index]]) return; 

    Select(card,index);

    if(Selected_02.card != null) CheckPair();
}

// Confere o par de cartões
function CheckPair(){
    if(Selected_01.img.src == Selected_02.img.src){
        Scored();
    }else if(Selected_01.card != null && Selected_02.card != null){
        Failed(); 
    }

    UpdatePoints();

    if(ParEncontrado.indexOf(false) == -1){
        setTimeout(function(){
            alert("Você venceu");
        },100);
    }

}

// Atualização da pontuação
function UpdatePoints(){
    PontosTXT.textContent = "Pontuação: " + Pontos;
    ErrosTXT.textContent = "Erros: " + Erros;    
}

// Limpar os cards selecionados
function ClearSelected(){
    Selected_01.card = null; Selected_01.img = null; Selected_01.imgIndex = -1;
    Selected_02.card = null; Selected_02.img = null; Selected_02.imgIndex = -1;
}

// Seleciona um card
function Select(card, index){
    ImagesTag[index].src = DefaultPath + Images[Positions[index]];
    CardsTag[index].style.backgroundColor = "#F1C4FF";

    if(Selected_01.card == null){
        Selected_01.card = card;
        Selected_01.img = ImagesTag[index];
        Selected_01.imgIndex = Positions[index];
    }else if(Selected_02.card == null){
        Selected_02.card = card;
        Selected_02.img = ImagesTag[index];
        Selected_02.imgIndex = Positions[index];
    }
}

// Combinação correta de cards
function Scored(){
    ParEncontrado[Selected_01.imgIndex] = true;
    Pontos++;
    ClearSelected();
}

// Combinação incorreta de cards
function Failed(){
    ClickBlock = true;  
    setTimeout(function(){
        if(Selected_01.img != null) {
            Selected_01.img.src = "./Icones/Icon_back.png";
            Selected_01.card.style.backgroundColor = "#B5B5FD";
            Selected_02.img.src = "./Icones/Icon_back.png";
            Selected_02.card.style.backgroundColor = "#B5B5FD";

            ClearSelected();
        }
        ClickBlock = false;
    },TempoRestart);
        
    Erros++;
}