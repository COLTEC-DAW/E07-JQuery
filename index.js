let abertos = []

$("document").ready(function(){
    $(".pedra").click(function(){
        if($(this).attr("estado")=="0"){
            $(this).attr("estado", "1")
            $(this).css("background-color", $(this).attr("elemento"))
            abertos.push(this);
        } else{
            $(this).attr("estado", "0")
            $(this).css("background-color", "blue")
            let index = abertos.indexOf(this)
            if(index>-1){
                abertos.splice(index,1)
            }
        }
        if(abertos.length == 2){
            setTimeout(() => {
                if($(abertos[0]).attr("elemento") === $(abertos[1]).attr("elemento")){
                    $(abertos[0]).attr("estado", "2")
                    $(abertos[0]).css("background-color", $(abertos[0]).attr("elemento"))
                    $(abertos[1]).attr("estado", "2")
                    $(abertos[1]).css("background-color", $(abertos[0]).attr("elemento"))
                    $(abertos[0]).off()
                    $(abertos[1]).off()
                } else{
                    $(abertos[0]).attr("estado", "0")
                    $(abertos[0]).css("background-color", "blue")
                    $(abertos[1]).attr("estado", "0")
                    $(abertos[1]).css("background-color", "blue")
                }
                abertos.splice(1,1)
                abertos.splice(0,1)
            },500);
        }
        console.log(abertos)
    })
})