let colors = ["red", "orange", "yellow", "green", "cyan", "blue", "purple", "violet"]
let cardSelected = false;
let firstCardSelected = null;
let secondCardSelected = null;
let isExecuting = false;
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function getAllCards(){
    return $(".card");
}
function drawCards(cards){
    let numberOfColors = cards.length / 2;
    let drewCards = [];
    for (let i = 0; i < numberOfColors; i++){
        let indexOfCard1 = getRandomInteger(0, cards.length);
        drewCards.push(cards[indexOfCard1]);
        cards.splice(indexOfCard1, 1);
        let indexOfCard2 = getRandomInteger(0, cards.length);
        drewCards.push(cards[indexOfCard2]);
        cards.splice(indexOfCard2, 1);
    }
    paintCards(drewCards);
    return drewCards;
}
function paintCards(drewCards){
    for(i = 0; i < drewCards.length; i += 2){
        let indexOfRandomColor = getRandomInteger(0, colors.length);
        let randomColor = colors[indexOfRandomColor];
        colors.splice(indexOfRandomColor, 1);
        $("#" + drewCards[i].id).addClass(randomColor);
        $("#" + drewCards[i+1].id).addClass(randomColor);
    }
}
function makeCardsBlack(cards){     
    cards.map((_, card) =>{
        $("#" + card.id).addClass("black");
    })
}
function initGame(){
    drawCards(getAllCards());
    makeCardsBlack(getAllCards());
    $(".card").click(this, handleCardClick);
}
async function handleCardClick(card){
    if (isExecuting) return
    card = $("#" + card.target.id)[0]
    if (!cardSelected){
        firstCardSelected = card;
        $(firstCardSelected).removeClass("black");
        cardSelected = !cardSelected;
        return;
    }
    isExecuting = true;
    secondCardSelected = card;
    $(secondCardSelected).removeClass("black");
    await new Promise(r => setTimeout(r, 1000));
    isExecuting = false;
    let colorOfFirstCard = $(firstCardSelected).attr("class").split(" ")[1];
    let colorOfSecondCard = $(secondCardSelected).attr("class").split(" ")[1];
    if (colorOfFirstCard == colorOfSecondCard && !cardsEqual(firstCardSelected, secondCardSelected)){
        cardSelected = !cardSelected;
        return;
    }
    $(firstCardSelected).addClass("black");
    $(secondCardSelected).addClass("black");
    cardSelected = !cardSelected;
}
function cardsEqual(card1, card2){
    return (card1.id == card2.id)
}
initGame()