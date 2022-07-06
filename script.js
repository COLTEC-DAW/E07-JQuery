const cardBoard = document.querySelector("#cardboard");
const imgs = [
    'fotoP(1).jpg',
    'fotoP(2).jpg',
    'fotoP(3).jpg',
    'fotoP(4).jpg',
    'fotoP(5).jpg',
    'fotoP(6).jpg',
];

let cardHTML = '';

imgs.forEach(img => 
{
    cardHTML += `
    <div class="memory-card">
        <img class="front-face" src="img/${img}">
        <img class="back-face" src="img/fotoBack.jpg">
    </div>
    `
});

cardBoard.innerHTML = cardHTML + cardHTML;

//----------------------------------------//

const cards = document.querySelectorAll(".memory-card");

function flipCard()
{
    this.classList.add("flip");
}

cards.forEach(card => card.addEventListener("click", flipCard));