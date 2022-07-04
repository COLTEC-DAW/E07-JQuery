const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard || this === firstCard) return;
    console.log(this);
    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = { cardObject: this, cardClass: $(this).attr("class").split(' ') };
        console.log(this);
        console.log(firstCard);
        return;
    }

    secondCard = { cardObject: this, cardClass: $(this).attr("class").split(' ') };
    console.log(this);
    console.log(firstCard);
    console.log(secondCard);

    checkForMatch();
}

function checkForMatch() {
    (firstCard.cardClass[firstCard.cardClass.length - 2] == secondCard.cardClass[secondCard.cardClass.length - 2]) ? disableCards() : unflipCards();
}

function disableCards() {
    console.log("is a match")
    firstCard.cardObject.removeEventListener('click', flipCard);
    secondCard.cardObject.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    console.log("not a match")
    lockBoard = true;

    setTimeout(() => {
        console.log("time out");
        console.log(firstCard);
        console.log(secondCard);
        firstCard.cardObject.classList.remove('flip');
        secondCard.cardObject.classList.remove('flip');

        resetBoard();
    }, 1000);
}

function resetBoard() {
    console.log("reseting this shit")
    hasFlippedCard = lockBoard = false;
    firstCard = secondCard = null;
}


function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * cards.length);
        card.style.order = randomPos;
    });
}

cards.forEach(card => card.addEventListener('click', flipCard));

function memoryGame() {
    shuffle();
}

memoryGame();

//todo
// add a timer and a win message