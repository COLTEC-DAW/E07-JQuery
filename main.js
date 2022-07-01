const cartas = document.querySelectorAll('.card');

function viraCarta()
{
    this.classList.toggle('virada');
}

cartas.forEach(card => {card.addEventListener('click', viraCarta)});
