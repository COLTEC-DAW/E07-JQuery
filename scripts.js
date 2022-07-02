let imagesPath = ["src/batman.jpg", "src/daredevil.jpg", "src/goku.jpg", "src/jinchurikens.jpg", "src/nightwing.jpg", "src/sasuke.jpg", "src/spiderman.png", "src/levi.jpg",
 "src/batman.jpg", "src/daredevil.jpg", "src/goku.jpg", "src/jinchurikens.jpg", "src/nightwing.jpg", "src/sasuke.jpg", "src/spiderman.png", "src/levi.jpg"];
const numberOfImages = 8;
const numberOfCards = numberOfImages * 2;
let cards = [];
let selectedCards = [];
let discoveredCards = new Set();

function setCardsPositions(){
    let drawned = new Set(); 
    for(let i = 0; i < numberOfImages * 2; i++){
        let random = Math.floor(Math.random() * numberOfCards);
        while(drawned.has(random)){
            random = Math.floor(Math.random() * numberOfCards);
        }
        drawned.add(random);
        cards.push(imagesPath[random]);
    }
}

function setIds(){
    let cardDivs = document.querySelectorAll(".card_");
    for(let i = 0; i < numberOfCards; i++){
        cardDivs[i].setAttribute("id", "card-" + i.toString());
    }
}

function untapCard(cssQuery, imagePath){
    let image = $("<img src='" + imagePath + "' >"); 
    let addImage = () => {$(cssQuery).children().append(image);}
    document.querySelector(cssQuery).animate([{transform: "rotateY(0deg)"}, {transform: "rotateY(360deg)"}], {duration: 800});
    setTimeout(addImage, 200);
}

function tapCard(cssQuery){
    document.querySelector(cssQuery).animate([{transform: "rotateY(0deg)"}, {transform: "rotateY(180deg)"}], {duration: 1000});
    $(cssQuery).children().html("");
}

$(document).ready(() => {
    setCardsPositions();
    setIds();

    for(let i = 0; i < numberOfCards; i++){
        let cssQuery = "#card-" + i;
        $(cssQuery).click(() => {
            if(selectedCards.includes(cssQuery) || discoveredCards.has(cssQuery)) return;
            if(discoveredCards.has(cssQuery)) return;
            selectedCards.push(cssQuery);
            untapCard(cssQuery, cards[i]);

            if(selectedCards.length == 2){
                if($(selectedCards[0] + " img").attr("src") == cards[i]){
                   discoveredCards.add(selectedCards[0]); 
                   discoveredCards.add(selectedCards[1]);
                   if(discoveredCards.size == 16){
                        setTimeout(window.alert, 2000, "Parabens, você venceu o jogo da memória !!!\nAguarde a página recarregar para jogar novamente");
                        setTimeout(location.reload, 300, true);
                   }
                }
                else{
                    setTimeout(tapCard, 1500, selectedCards[0]);
                    setTimeout(tapCard, 1500, selectedCards[1]);
                }
                selectedCards = [];
            }
        });
    }
}); 


