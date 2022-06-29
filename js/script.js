$(document).ready(function(){

    let imgs = [];

    for(let i = 0; i < 16; i++){

        let img ={
            src: "../img/" + i + ".jpg",
            id: i%8
        };

        imgs.push(img);
       
        $("#card_" + i).click(function(){
    
                const back = 0, front = 1;
                let faces = this.getElementsByClassName("face");
                
                faces[back].classList.toggle("flipped");
                faces[front].classList.toggle("flipped");
                faces[front].style.background = "url('"+ imgs[i].src +"')";
                faces[front].style.backgroundSize = "cover";
            });
        }

    });

    

 
