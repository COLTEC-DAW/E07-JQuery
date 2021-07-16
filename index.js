var cardsBlocked = false;

var firstCard, secondCard;

var numPairs = 0;
var counter = 0;

var length = $(".cards").children().length;

$(".card").flip({
    trigger: "manual"
});

$(".card").click(flipCard);

$('.card').click(function () {
    $(this).addClass('no-hover');
}).mouseleave(function () {
    $(this).removeClass('no-hover');
});
//----------------------------------------------------------------------------------------------------------------------------------------------------------

function flipCard() {
    if ((cardsBlocked) || this === firstCard) return;

    $(this).flip(true);
    counter++;

    if (counter != 2) {
        firstCard = this;
        return;
    }

    secondCard = this;
    cardsBlocked = true;

    checkEquals();

    $(this).on("flip:done", function () {
        if (numPairs == (length / 2)) {
            alert("Parabéns! Você ganhou!");
        }
    })
}


function checkEquals() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        $(firstCard).off("click");
        $(secondCard).off("click");

        numPairs++;

        resetVars();
    } else {
        unflip();
    }

}

function unflip() {
    setTimeout(() => {
        $(firstCard).flip(false);
        $(secondCard).flip(false);

        resetVars();
    }, 1000);
}

function resetVars() {
    counter = 0;
    cardsBlocked = false;
    firstCard = null;
    secondCard = null;
}

(function shuffle() {
    $(".card").each(function () {
        var pos = Math.floor(Math.random() * length);
        $(this).css("order", pos);
    });
})();