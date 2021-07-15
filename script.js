// Acesso aos elementos do HTML
var ImagesTag = document.body.getElementsByTagName("img");
var CardsTag = document.body.getElementsByClassName("card");
var PontosTXT = document.getElementById("Pontos");
var ErrosTXT = document.getElementById("Erros");

// Nome & caminho padrão das imagens
var Images = ["csharp.png","css.png","html.png","java.png","mysql.png","php.png","python.png","js.png"];
var DefaultPath = "./Icones/Icon_";

// Configurações do jogo
var Pontos = 0;
var Erros = 0;

var EmCurso = false;

var Positions = null;
var Selected_01 = { card: null, img: null, imgIndex: -1 };
var Selected_02 = { card: null, img: null, imgIndex: -1 };
var ParEncontrado = [false,false,false,false,false,false,false,false];

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
        CardsTag[i].style.backgroundColor = "#FFFFFF";
        ImagesTag[i].src = DefaultPath + Images[Positions[i]]; 
    } 
}

// Oculta todas as imagens no mesmo instante
function HideAllImages(){ 
    for(var i=0;i<16;i++) {
        ImagesTag[i].src = "";
        CardsTag[i].style.backgroundColor = "#F1C4FF"
    }
}

// Inicia o jogo e realiza as configurações iniciais
function StartGame(){
    if(EmCurso){
        alert("O Jogo ja foi iniciado!\nUtilize o botão Reniciar!");
        return;
    }

    EmCurso = true;
    Positions = DefinePositions();

    ShowAllImages();
    setTimeout(HideAllImages,1300);
}

// Reinicia o jogo e as configurações iniciais
function RestarGame(){
    Positions = DefinePositions();;
    Selected_01 = { card: null, img: null, imgIndex: -1 };
    Selected_02 = { card: null, img: null, imgIndex: -1 };
    ParEncontrado = [false,false,false,false,false,false,false,false];

    Pontos = 0; PontosTXT.textContent = "Pontuação: " + Pontos;
    Erros = 0;  ErrosTXT.textContent = "Erros: " + Erros;

    HideAllImages();
    setTimeout(ShowAllImages,800);
    setTimeout(HideAllImages,2100);    
}

function CardClick(card){
    var index = -1;

    for(var i=0;i<16;i++) if(card === CardsTag[i]) index = i;
    if(index == -1) return;

    if(ParEncontrado[Positions[index]]) {
        console.log("Meti o pé");
        return;
    }

    ImagesTag[index].src = DefaultPath + Images[Positions[index]]; 

    if(Selected_01.card == null){
        Selected_01.card = card;
        Selected_01.img = ImagesTag[index];
        Selected_01.imgIndex = Positions[index];
    }else if(Selected_02.card == null){
        Selected_02.card = card;
        Selected_02.img = ImagesTag[index];
        Selected_02.imgIndex = Positions[index];
    }

    if(Selected_01.card == null || Selected_02.card == null){
    }else if(Selected_01.img.src == Selected_02.img.src){
        ParEncontrado[Selected_01.imgIndex] = true;

        Selected_01.card = null; Selected_01.img = ""; Selected_01.imgIndex = -1;
        Selected_02.card = null; Selected_02.img = ""; Selected_02.imgIndex = -1;

        Pontos++;
        PontosTXT.textContent = "Pontuação: " + Pontos;
    }else if(Selected_01.card != null && Selected_02.card != null){  
        setTimeout(function(){
            ImagesTag[index].src = "";
            for(var i=0;i<16;i++) if(card === CardsTag[i]) index = i;

            Selected_01.img.src = ""; Selected_01.card = null; Selected_01.img = null; Selected_01.imgIndex = -1;
            Selected_02.img.src = ""; Selected_02.card = null; Selected_02.img = null; Selected_02.imgIndex = -1;
        },800);
        
        Erros++;
        ErrosTXT.textContent = "Erros: " + Erros;
    }
    
    if(ParEncontrado.indexOf(false) == -1){
        setTimeout(function(){
            alert("Você venceu");
        },100);
    }
}

