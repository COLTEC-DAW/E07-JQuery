const cards = document.querySelectorAll('.card');

$(() => {
    var viradas = false;
    var primeira, segunda;
    var board = false;

    function vira() {
        if(board) return;

        $(this).addClass('flip');
        if(viradas != null) {
            viradas = true;
            primeira = $(this);
            return;
        }

        segunda = $(this);
        viradas = false;
        checagem();
    }

    function checagem() {
        if(primeira.attr('card-info') === segunda.attr('card-info')) {
            desabilita();
            return;
        }

        naoViradas();
    }

    function desabilita() {
        primeira.off('click', vira);
        segunda.off('click', vira);
        reseta();
    }

    function naoViradas() {
        board = true;
        setTimeout(() => {
            primeira.removeClass('flip');
            segunda.removeClass('flip');

            reseta();
        },1500);
    }

    function reseta() {
        [viradas, board] = [false, false];
        [primeira, segunda] = [null, null];
    }


    (function shuffle() {
        cards.forEach((card) => {
            let randomPosition = Math.floor(Math.random() * 12);
            card.style.order = randomPosition;
        });
    })();

    $('.card').on('click', vira);

});