let labels = [
  {
    id: 1,
    name: "Armin",
    color: "#84CFFA",
    image: "images/armin.jpg",
    flipped: true,
  },
  {
    id: 2,
    name: "Annie",
    color: "#FA8484",
    image: "images/annie.jpg",
    flipped: true,
  },
  {
    id: 3,
    name: "Eren",
    color: "#E984FA",
    image: "images/eren.png",
    flipped: true,
  },
  {
    id: 4,
    name: "Mikasa",
    color: "#84FAAC",
    image: "images/mikasa.jpg",
    flipped: true,
  },
  {
    id: 5,
    name: "Levi",
    color: "#8684FA",
    image: "images/levi.jpg",
    flipped: true,
  },
  {
    id: 6,
    name: "Attack",
    color: "#F7FA84",
    image: "images/attack.jpg",
    flipeed: true,
  },
];

const cards = document.querySelectorAll('.card');

let flippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {  
  if(!flippedCard) {
    flippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  if(firstCard.dataset.nome === secondCard.dataset.nome) {
    disableCards();
    return;
  }

  unflipCards();
}

function disableCards() { 
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');

  resetBoard();
}

function resetBoard() {
  [flippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function shuffle() {
  cards.forEach(card => {
    let randomize = Math.floor(Math.random() * 12);
    card.style.order = randomize;
  });
};

cards.forEach(card => card.addEventListener('click', flipCard));

let cardsOpen = [];

$(".card").click(function () {
  let cardId = $(this).attr("id");
  const cardsNone = [];
  
  if (cardsOpen.length > 2) {
    cardsOpen.pop();
  } else if(cardsOpen.length <= 1) {
    cardsOpen.push(cardId);
    $(this).replaceWith(
      `<div open${
        cardsOpen.length
      } class="flipped" id="${cardId}" style="background-color: #0000"><img src="${deckId[cardId - 1].image}"></div>`
    );
  } else {
    if(cardsOpen[0] == cardsOpen[1]) {
      cardsOpen = cardsNone;
    } else if (cardsOpen.length <= 2) {
      let aux = cardsOpen;
      $("[open1]")
        .replaceWith(
          `<div class="card" id="${aux[0]}"><img src="images/tropa.jpg"></div>`
        );
      $("[open2]")
        .replaceWith(
        `<div class="card" id="${aux[1]}"><img src="images/tropa.jpg"></div>`
      );
    }
  }
});