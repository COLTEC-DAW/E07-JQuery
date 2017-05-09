function compara(carta1, carta2){
    if (carta1.cor != carta2.cor) {
        setTimeout(function(){
            alert("Tente outra vez");
            carta1.obj.addClass("costas");
            carta1.obj.removeClass("frente");
            console.log(carta1.obj);
            carta2.obj.addClass("costas");
            carta2.obj.removeClass("frente");
        }, 200);
    }
    else alert("CORRETO");
}

$(document).ready(function(){
    var carta1 = null;
    var carta2 = null;
    var corCarta = null;

    $("td").css({"height": "120px", "width": "120px", "border":"2px"}); //Define dimensões das cartas

    $("td").click(function(){
        if($(this).attr("class").split(' ')[1]=="frente") alert("Carta já aberta"); //Confere se a carta já está ativada
        else {
            corCarta = $(this).attr("class").split(' ')[0];
            $(this).css({"background-color": corCarta}); //Essas três linhas
            $(this).addClass("frente");                 //São responsáveis
            $(this).removeClass("costas");              //por virar a carta

            if (carta1==null) carta1 = {obj: $(this), cor:corCarta};
            else { //Se duas cartas tiverem sido abertas
                carta2 = {obj: $(this), cor:corCarta};
                compara(carta1, carta2);
                carta1 = null;
                carta2 = null;
            }
        }
    });

});