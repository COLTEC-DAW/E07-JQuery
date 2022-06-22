let colors = ["red", "orange", "yellow", "green", "cyan", "blue", "purple", "violet"]
let cardSelected = false;
let firstCardSelected = null;
let secondCardSelected = null;
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function getAllCards(){
    return $(".card");
}
// sortear uma dupla que não tenha sido selecionada para a cor
// Lista -> pra cada dupla a gnt tira ela da lista
// style color: bloh;
// class black
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
        console.log(colors);
        colors.splice(indexOfRandomColor, 1);
        $("#" + drewCards[i].id).addClass(randomColor);
        $("#" + drewCards[i+1].id).addClass(randomColor);
    }
}
function initGame(){
    drawCards(getAllCards());
    $(".card").click(this, handleCardClick);
}
function handleCardClick(card){
    if (!cardSelected){
        console.log(card.target)
        firstCardSelected = card.target;
        cardSelected = !cardSelected;
        console.log("clicou 1 vez" + firstCardSelected)
        return;
    }
    cardSelected = !cardSelected;
}
initGame()
