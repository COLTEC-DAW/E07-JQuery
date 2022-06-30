const urls = ["Armin.jpg", "Eren.jpg", "Ermin.jpg", "Levi.webp", "Mikasa.png", "paradox.jpg", "TitanDeAtaque.jpg", "TitanDaMuralha.jpg"];
const FRONT_FACE = 0;
const BACK_FACE = 1;
const NUM_CARDS = 16

function MemoryGame() {
    let gameOver = false;

    shuffleCards(urls);

    $(".card").click(() => {
        let display = $(".card").find(".front_face").css("display");

        $(".card").css("transform", "rotateY(180deg)");
        $(".card").find(".front_face").css("display", display == "none"? "flex" : "none");
        $(".card").find(".back_face").css("display", display == "none"? "none" : "flex");
    })
}

function shuffleCards(contents) {
    let arrAux = [];

    contents.forEach(content => {
        let counter = 0;

        while (counter < 2) {
            let randomCard = Math.floor(Math.random() * NUM_CARDS);

            if(!arrAux.includes(randomCard)) {
                console.log(randomCard);
                
                $("#" + randomCard.toString()).find(".back_face").css("background-image", `url(./assets/images/${content})`);

                arrAux.push(randomCard);
                counter++;
            }
        }
    });
}

MemoryGame();