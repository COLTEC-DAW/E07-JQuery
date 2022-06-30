$(document).ready(function(){

    addImgsAndIdToTheCards();

});


function addImgsAndIdToTheCards(){

    let imgs = [];

    for(let i = 0; i < 16; i++){

        let img ={
            src: "../img/" + i + ".jpg",
            id: i%8
        };

        imgs.push(img);

        imgs = randomSort(imgs);
       
        $("#card_" + i).click(function(){

    
            const back = 0, front = 1;
            let faces = this.getElementsByClassName("face");

            faces[back].classList.toggle("flipped");
            faces[front].classList.toggle("flipped");
            faces[front].style.background = "url('"+ imgs[i].src +"')";
            faces[front].style.backgroundSize = "cover";
            faces[front].style.backgroundPosition = "center";
            faces[front].setAttribute("id", imgs[i].id);
                
        });
    }
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
    

 
