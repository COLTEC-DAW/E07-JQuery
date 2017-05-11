var acertos = 0;
var e1 = null;
var e2 = null;

function confereJogo(e1, e2) {
    if (e1.color == e2.color) {
        acertos++;
        if (acertos == 8) {
            alert("Você ganhou!");
            location.reload();
        }
    } else {
        setTimeout(function() {
            e1.element.addClass("black");
            e2.element.addClass("black");
        }, 300);

    }
}

$(document).ready(function() {
    $('.card-panel').click(function() {
        if ($(this).hasClass("black")) { //se tiver black, mostra e registra em alguma escolha

            cor = $(this).attr("class");

            if (e1 == null) { //se não tiver escolhido nenhum ainda, vai na primeira
                e1 = { element: $(this), color: cor }
                e1.element.removeClass("black");
            } else { //caso ja tenha a primeira, pega a segunda e confere
                e2 = { element: $(this), color: cor };
                e2.element.removeClass("black");

                confereJogo(e1, e2);
                e1 = null;
                e2 = null;

            }
        }
    })
})
