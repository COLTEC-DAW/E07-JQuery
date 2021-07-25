$(document).ready(()=> {

    $(".cards").flip();
})

var count = 0;
const contar = () => {
    count++;
    if(count > 2){
        alert("Você perdeu")
        $(".cards").flip(false)
        count = 0
    }else{
        alert(count);
    }
}
$(".cards").on('flip:done',function(){
    var flip = $(this).data("flip-model");
    if(flip.isFlipped){
        contar();
    }
})

function embaralhar(){
    var images = $(".back>img");
    var sources = ['./Memoria/Ainz.png','./Memoria/Albedo.png','./Memoria/Aqua.png','./Memoria/Emilia.png','./Memoria/Filo.png','./Memoria/Ram.jpg','./Memoria/Raphtalia.png','./Memoria/Rem.png','./Memoria/Ainz.png','./Memoria/Albedo.png','./Memoria/Aqua.png','./Memoria/Emilia.png','./Memoria/Filo.png','./Memoria/Ram.jpg','./Memoria/Raphtalia.png','./Memoria/Rem.png']
    for( let i = sources.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * i)
        var temp = sources[i]
        sources[i] = sources[j]
        sources[j] = temp
    }
    for(let i = 0; i < images.length;i++){
        images[i].src = sources[i];
    }
}
embaralhar()