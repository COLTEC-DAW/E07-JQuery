const NUM_CARDS = 16;

function shuffleCards(contents) {
    let arrAux = [];

    contents.forEach(content => {
        let counter = 0;

        while (counter < 2) {
            let randomCard = Math.floor(Math.random() * NUM_CARDS);

            if(!arrAux.includes(randomCard)) {
                console.log(randomCard);
                
                $("#" + randomCard.toString()).find(".back").css("background-image", `url(./assets/images/${content})`);

                arrAux.push(randomCard);
                counter++;
            }
        }
    });
}

let hasFlippedCard = false;
let firstCard, secondCard;
let flippedCards = [];
async function flipCard() {
    this.classList.add("flip");
    flippedCards.push(this);

    if(flippedCards.length == 2) {
        firstCard = flippedCards.shift();
        secondCard = flippedCards.shift();

        if ($(`#${firstCard.id}`).find(".back").css("background-image") == $(`#${secondCard.id}`).find(".back").css("background-image") && firstCard.id != secondCard.id) { 
            firstCard.removeEventListener("click", flipCard);
            secondCard.removeEventListener("click", flipCard);
        }
        else { 
            setTimeout(() => {
                firstCard.classList.remove("flip");
                secondCard.classList.remove("flip");
            }, 1000)
        }
    }
}

function memoryGame() {
    const urls = ["Armin.jpg", "Eren.jpg", "Ermin.jpg", "Levi.jpg", "Mikasa.png", "paradox.jpg", "TitanDeAtaque.jpg", "TitanDaMuralha.jpg"];
    const cards = document.querySelectorAll(".card");
    let gameOver = false;

    shuffleCards(urls);

    cards.forEach(card => card.addEventListener("click", flipCard));


}

memoryGame();