const cartas = document.querySelectorAll('.card');

let cartasSeleccionadas = [];
let virouCarta = false;
let primeiraCarta, segundaCarta;
let trava = false;
let ganhou = false;

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

        
        for (let carta of listaCartas) 
        {
            if (!carta.classList.contains('virada'))
            {
                var audio_acertou = new Audio('audios/acerto.wav');
                audio_acertou.volume = 0.17;
                audio_acertou.play();
                ganhou = false
                return
            }else{ganhou = true}
        }


        if (ganhou)
        {
            var ganhou = new Audio('audios/ganhouMuito.wav');
            ganhou.volume = 0.25;
            ganhou.play();
            setTimeout(() => {
                alert('Só o Básico');
            }, 500);
        }
    }
    else
    {
        desviraCartas();
        var audio_errou = new Audio('audios/erro.wav');
        audio_errou.volume = 0.25;
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
