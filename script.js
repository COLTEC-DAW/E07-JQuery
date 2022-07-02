$(document).ready(function(){

    flipCardsOnclick();

});


function flipCardsOnclick(){

    var rightCards = 0;
    let imgs = addImgsAndIdToTheCards();
    let flippedCards = [];

    for(let i = 0; i < 16; i++){

        $("#card_" + i).click(function(){

            if(flippedCards.length < 2){

            const back = 0, front = 1;
            let faces = this.getElementsByClassName("face");

            if(faces[back].classList.length > 2) return;

            faces[back].classList.toggle("flipped");
            faces[front].classList.toggle("flipped");
            faces[front].style.background = "url('"+ imgs[i].src +"')";
            faces[front].style.backgroundSize = "cover";
            faces[front].style.backgroundPosition = "center";
            faces[front].setAttribute("id", imgs[i].id);

            flippedCards.push(this);

            if (flippedCards.length === 2){

                if(flippedCards[0].childNodes[1].childNodes[1].id === flippedCards[1].childNodes[1].childNodes[1].id){

                    flippedCards[0].childNodes[1].childNodes[1].classList.toggle("right_cards");
                    flippedCards[1].childNodes[1].childNodes[1].classList.toggle("right_cards");

                    flippedCards = [];
                    rightCards++;

                    if (rightCards == 8){

                        $("#modal-winner").modal('show');
                        
                    }
                }
            }

            }else{

                flippedCards[0].childNodes[1].classList.toggle("flipped");
                flippedCards[0].childNodes[1].childNodes[1].classList.toggle("flipped");
                flippedCards[1].childNodes[1].classList.toggle("flipped");
                flippedCards[1].childNodes[1].childNodes[1].classList.toggle("flipped");
                flippedCards = [];
            }
                  
        });
    }
}

function addImgsAndIdToTheCards(){

    let imgs = [];

    for(let i = 0; i < 16; i++){

        let img ={
        src: "img/" + i + ".jpg",
        id: i%8
        };

        imgs.push(img);

    }

    imgs = randomSort(imgs);

    return imgs;

}

function randomSort(imgsInOrder){

    let arraySort = [];

    while(arraySort.length !== imgsInOrder.length){

        let index = Math.floor(Math.random() * imgsInOrder.length);

        if(arraySort.indexOf(imgsInOrder[index]) < 0){

            arraySort.push(imgsInOrder[index]);

        }

    }

    return arraySort;

}
    

 
