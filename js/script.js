$(document).ready(function(){

    for(let i = 0; i < 16; i++){

       
        $("#card_" + i).click(function(){
                const back = 0;
                const front = 1;
                let faces = this.getElementsByClassName("face");
                faces[back].classList.toggle("flipped");
                faces[front].classList.toggle("flipped");
            
            });
        }

    });

    


