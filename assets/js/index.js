function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
        break;
        }   
    }
}

jQuery.fn.extend({
    disable: function (state) {
        return this.each(function () {
            this.disabled = state;
        });
    }
});


$(document).ready(function(){

    for(let i=0; i < 16; i++){
        $("#pic" + i + "-front").css({
            "background-image" : "url(./assets/images/cards/" + 0 + ".png)", 
            "background-size" : "cover", 
            "background-repeat" : "no-repeat",
            "background-position": "center"
        });
    } 

    $("#game").click(function(){
        StartGame();
        $(this).disable(true);
    });

    $(".card").click(function(){
        $(this).toggleClass('flipped');
        $(this).css("pointer-events", "none");
        sleep(250);
        memoryGame(this);
    });    
});

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function StartGame() {
    arrayOfImgs=["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "9.jpg", "7.jpg", "8.jpg",
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "9.jpg", "7.jpg", "8.jpg"];

    arrayShuffled=shuffle(arrayOfImgs);

    for(let i=0; i < 16; i++){
        $("#pic" + i + "-back").css({
            "background-image" : "url(./assets/images/cards/" + arrayShuffled[i] + ")", 
            "background-size" : "cover", 
            "background-repeat" : "no-repeat",
            "background-position": "center"
        });
    }
}



var array = [];
var cards = [];
var images = [];

function memoryGame(card) {
    var divBack = $(".back");
    var divPic = $(card).children(".back").children("div[id$='back']");
    
    var img = document.getElementById(divPic[0].id);
    style = window.getComputedStyle(img, false);
    bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    
    bi=bi.split("/");
    bi=bi[bi.length-1];

    array.push(bi);
    cards.push(card);
    images.push(bi);

    veryfyingImageIsDouble(bi);
}

function veryfyingImageIsDouble(image) {
    var count=0;

    if(cards.length === 2) {
        for (let index = 0; index < array.length; index++) {
            if(image === array[index]) {
                count++;
            }
        }

        if(count !== 2) {
            
            for (let index = 0; index < cards.length; index++) {
                console.log(cards[index]);
                $(cards[index]).css("pointer-events", "auto");
                $(cards[index]).removeClass("flipped");
            }
    
            for (let index = 0; index < images.length; index++) {
                var indexOfImageInArray = array.indexOf(images[index]);
                if(index > -1) {
                    array.splice(indexOfImageInArray, 1);
                }
            }
        }
        cards = [];
        images = [];
    }

    if (array.length === 16) {
        alert("Você Ganhou!!!");
    }
}