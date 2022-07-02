const cards = document.querySelectorAll(".card")
let firtsCard, secondCard;
let blockCard = false;

function flipCard() {

    if(blockCard === true){
        return false;
    }
    this.classList.add("flip");

    if(!firtsCard){
        firtsCard = this;
        return false;
    }
    secondCard = this;
    test();
}

function removeflip() {
    blockCard = true;
    setTimeout(() => {
        firtsCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        reset();
        blockCard = false;
    }, 1000);
}

function test() {
    let iconfere = firtsCard.dataset.charac === secondCard.dataset.charac;
    ! iconfere ? removeflip() : reset(iconfere);
}

function reset(iconfere = false) {
    if(iconfere){
        firtsCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard)
    }
    
    [firtsCard, secondCard, blockCard] = [null, null, false];
}

cards.forEach(card => card.addEventListener("click", flipCard));