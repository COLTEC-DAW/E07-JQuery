const jogoMemoria = document.querySelector("#jogoMemoria");
const img = [
    'nestha.jpg',
    'amren.jpg',
    'feyre.jpg',
    'tessa.jpg',
    'mor.jpg',
    'jude.jpg'
];

// let é a declaração de variavel que vc pode mudar depois, ao contrario de const
let jogoHTML = ""; //serve para criar a página html com as imagens;

img.forEach( img => { // cada interação busca uma imagem da pasta
    jogoHTML +=  `
    <div class="carta" data-card="${img}"> 
        <img class="front-face" src="img/${img}" >
        <img class="back-face" src="img/js.logo.jpg" > 
    </div>`
    // colocando também a imagem que fiz por cima, em cima;
    // data-card serve para ajudar na verificação das cartas, se são a mesma;
});


// innerHTML retorna todo o html contido na variavel que o chama;
jogoMemoria.innerHTML = jogoHTML + jogoHTML; // jogoHTML duas vezes para que se tenha a carta duas vezes;

/** Jogo jogado */
const cartas = document.querySelectorAll('.carta'); // pega todos os elementos que têm a class carta
let firstCard /*primeira carta*/, secondCard /*segunda carta a ser virada*/;
let lockCard = false; /* bloqueia as cartas para que não se possa virar mais de duas por vez; */


/** Adiciona o flip na class das cartas, que seria o movimento das cartas; */
function flipCard(){ 
    if(lockCard) return false; /** Isso significa que se já tem duas cartas viradas, não da para abrir outra. */

    //console.log(this); // mostra a carta que foi clicada, o this que foi clicado;
    this.classList.add("flip"); // assim ao clicar, a logo de js vira 180° no eixo y;

    if(!firstCard) { 
        firstCard = this;
        return false; 
    } 
    secondCard = this;
    checkForMatch(); 

    // agora para voltarem ao que eram antes, essas cartas precisam perder o 'flip' da class; ==> desableCards
}

/** Verificar se as cartas correspodenm-se; */
function checkForMatch(){
    let isMatch = firstCard.dataset.card === secondCard.dataset.card; 

    if(!isMatch) {
        desableCards();
    }
}

/** Desabilita o flip das cartas, mas somente se as cartas não são iguais; */
function desableCards(){ 
    lockCard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetCards();
    }, 1000 );
    // se não colocarmos um tempo antes de retirar o flip das cartas, não da nem tempo de ver a segunda carta porque ela praticamente nem vira,
    // dai, a função setTimeout executa o que se planeja em determinado tempo (que está em milisegundos);
}

/** função que limpa as cartas */
function resetCards(){
    [firstCard, secondCard, lockCard] = [null, null, false];
}

/** É para dar um click a cada carta do jogo de memória; */
cartas.forEach( carta => carta.addEventListener('click', flipCard));



