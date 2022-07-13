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
var numberOfClicks = 0;
var gameWon = false;
function flipCard()
{
    this.classList.add("flip");
}

$(document).ready(function()
{ 
    $(".memory-card").click(function()
    {
        numberOfClicks++;
            if(numberOfClicks % 2 != 0)
            {
                $(this).toggleClass("first-card");
            } else
            {
                $(this).toggleClass("second-card");
                var node1 = document.getElementsByClassName("memory-card flip first-card");
                var firstCard = node1[0].children[0].src;
                var node2 = document.getElementsByClassName("memory-card flip second-card");
                var secondCard = node2[0].children[0].src;  
                if(firstCard === secondCard)
                {
                    var correct = true;
                } else {
                }        
            }                    
        }    
    );
});

cards.forEach(card => card.addEventListener("click", flipCard));