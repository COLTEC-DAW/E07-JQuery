const cartas = document.querySelectorAll('.card');

let cartasSeleccionadas = [];
let virouCarta = false;
let primeiraCarta, segundaCarta;
let trava = false;
let ganhou = false;

var audio_acertou = new Audio('audios/smb_coin.wav');
var audio_errou = new Audio('audios/smb_bump.wav');

let listaCartas = Array.from(cartas);

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
        for (let carta of listaCartas) 
        {
            if (!carta.classList.contains('virada'))
            {
                ganhou = false
                return
            }else{ganhou = true}
        }
        if (ganhou)
        {
        setTimeout(() => {
                alert('Parabéns, você ganhou!');
            }, 500);
        }
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
