const cardBoard = document.querySelector("#cardboard");
let imgs = [
    'fotoP(1).jpg',
    'fotoP(2).jpg',
    'fotoP(3).jpg',
    'fotoP(4).jpg',
    'fotoP(5).jpg',
    'fotoP(6).jpg',
    'fotoP(7).jpg',
    'fotoP(8).jpg'
];

let cardHTML = '';

imgs = randomize(imgs);
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
var numberOfHits = 0;

function randomize(imgs) 
{
    let currentIndex = imgs.length,  randomIndex;
    for(currentIndex; currentIndex > 0; currentIndex--) 
    {
        console.log(currentIndex);
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [imgs[currentIndex], imgs[randomIndex]] = [
        imgs[randomIndex], imgs[currentIndex]];
    }
    return imgs;
}

function flipCard()
{
    this.classList.add("flip");
}

function unflipCards()
{
    $(".first-card").removeClass("flip");   
    $(".second-card").removeClass("flip"); 
}

function disableCards()
{
    $(".first-card").off("click");
    $(".second-card").off("click");
}

function computeHits()
{
    $(".first-card").toggleClass("hit");
    $(".second-card").toggleClass("hit");
    numberOfHits++;
}

function removeClasses()
{
    $(".first-card").removeClass("first-card");
    $(".second-card").removeClass("second-card");
}

function finishGame()
{
    setTimeout(() => 
    {
        alert("Parabêns, você ganhou!");
        window.location.reload();
    }, 500);
}

$(document).ready(function()
{ 
    $(".memory-card").click(function()
    {
        numberOfClicks++;
        if(numberOfClicks % 2 != 0)
        {
            $(this).toggleClass("first-card");
        } else {
            $(this).toggleClass("second-card");

            // get images src
            var node1 = document.getElementsByClassName("memory-card flip first-card");
            var firstCard = node1[0].children[0].src;
            var node2 = document.getElementsByClassName("memory-card flip second-card");
            var secondCard = node2[0].children[0].src;  

            if(firstCard === secondCard)
            {
                computeHits();
                disableCards();
                removeClasses();
            }  else {
                setTimeout(() => 
                {
                    unflipCards();
                    removeClasses();
                }, 500);
            };        
            if(numberOfHits == imgs.length)
            {   
                finishGame();
            }
        }  
    }    
    );
});

cards.forEach(card => card.addEventListener("click", flipCard));
