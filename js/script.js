  $(document).ready(function(){

        for(var i = 0; i < 16; i++){

            $("#card_" + i).click(function(){
                
                var faces = this.getElementsByClassName("face");
                faces[0].classList.toggle("flipped");
                faces[1].classList.toggle("flipped");
                console.log(faces);

                
            });

        }

    });

    


