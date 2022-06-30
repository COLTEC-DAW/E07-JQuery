let colors = ["red", "orange", "yellow", "green", "cyan", "blue", "purple", "violet"]
let cardSelected = false;
let firstCardSelected = null;
let secondCardSelected = null;
let isExecuting = false;
let numberOfAttempts = 0;
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
    // copiando por valor e não referência para poder jogar mais de uma vez!
    let possibleColors = [...colors];
    for(i = 0; i < drewCards.length; i += 2){
        let indexOfRandomColor = getRandomInteger(0, possibleColors.length);
        let randomColor = possibleColors[indexOfRandomColor];
        possibleColors.splice(indexOfRandomColor, 1);
        $("#" + drewCards[i].id).addClass(randomColor);
        $("#" + drewCards[i+1].id).addClass(randomColor);
    }
}
function makeCardsBlack(cards){
    for (i = 0; i < cards.length; i++) {
        $("#" + cards[i].id).addClass("black");
    }
}
function resetCards(cards){
    for (i = 0; i < cards.length; i++){
        card = $("#" + cards[i].id);
        card.removeClass(card.attr("class").split(" ")[1]);
    }
}
function initGame(){
    numberOfAttempts = 0;
    resetCards(getAllCards());
    drawCards(getAllCards());
    makeCardsBlack(getAllCards());
    getAllCards().click(this, handleCardClick);
}
async function handleCardClick(card){
    if (isExecuting) return;
    card = $("#" + card.target.id)[0]
    if (!cardSelected){
        firstCardSelected = card;
        $(firstCardSelected).removeClass("black");
    }
    else{
        secondCardSelected = card;
        isExecuting = true;
        $(secondCardSelected).removeClass("black");
        // Para ter um tempo do jogador ver a dupla de cartas
        await new Promise(r => setTimeout(r, 1000));
        isExecuting = false;
        let colorOfFirstCard = $(firstCardSelected).attr("class").split(" ")[1];
        let colorOfSecondCard = $(secondCardSelected).attr("class").split(" ")[1];
        if (colorOfFirstCard == colorOfSecondCard && !cardsEqual(firstCardSelected, secondCardSelected)) {
            // Quando o player acerta a dupla de cartas elas não precisam mais do eventListener de click!
            $(firstCardSelected).unbind();
            $(secondCardSelected).unbind();
            if ($(".black").length == 0) {
                alert(`"Parabéns, você ganhou com ${numberOfAttempts} palpites!!!"`)
                if (confirm('Você deseja jogar novamente? Se sim, clique em OK.')) {
                    initGame()
                }
            }
        }
        else{
            $(firstCardSelected).addClass("black");
            $(secondCardSelected).addClass("black");
        }
        numberOfAttempts++;
    }
    cardSelected = !cardSelected;
}
function cardsEqual(card1, card2){
    return (card1.id == card2.id)
}
initGame()