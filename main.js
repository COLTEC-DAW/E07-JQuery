const cartas = document.querySelectorAll('.card');

let cartasSeleccionadas = [];
let virouCarta = false;
let primeiraCarta, segundaCarta;
let trava = false;

var audio_acertou = new Audio('audios/smb_coin.wav');
var audio_errou = new Audio('audios/smb_bump.wav');

(function embaralha()
{
    cartas.forEach(card => {
        let randomPos = Math.floor(Math.random() * 16);
        card.style.order = randomPos;
    });
})();

function comparaCartas()
{
    if (primeiraCarta.dataset.framework === segundaCarta.dataset.framework)
    {
        desabilitaCartas();
        audio_acertou.play();
    }
    else
    {
        desviraCartas();
        audio_errou.play();
    }
}

function desabilitaCartas()
{
    primeiraCarta.removeEventListener('click', viraCarta);
    segundaCarta.removeEventListener('click', viraCarta);
}

function desviraCartas()
{
    trava = true;

    setTimeout(() => {
        primeiraCarta.classList.remove('virada');
        segundaCarta.classList.remove('virada');
        trava = false;
    }, 1500);
}

function viraCarta()
{
    if (trava) return
    if (this === primeiraCarta) return;

    this.classList.add('virada');

    if(!virouCarta)
    {
        primeiraCarta = this;
        virouCarta = true;
    }else
    {
        segundaCarta = this;
        virouCarta = false;

        comparaCartas();
    }
}


cartas.forEach(card => {card.addEventListener('click', viraCarta)});
