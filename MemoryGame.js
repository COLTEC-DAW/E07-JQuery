const numberCards = 16;

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

//Função que decide se a carta será ou não virada após um click
function FlipCard() 
{
    //Se a carta clicada tiver virada e travada (já foi achado seu par),
    //nada acontece.
    if (lockBoard) return;

    //Se a carta clicada for uma carta já aberta, esperando para verificar 
    //se outra carta é seu par, nada acontece. Esse trecho é utilizado como 
    //uma trava de segurança, pois sem ela, caso clicarmos duas vezes em uma 
    //mesma carta e depois em outra, vai ocorrer um "bug" e as duas cartas abertas
    //mesmo não sendo igauis, vão ser consideradas iguais e ficarão abertas.
    if (this === firstCard) return;

    //Chegando aqui, os outros if's não tinham a condição true, então
    //já se garante que a carta está fechada e deve ser virada.
    //Tal ação ocorrerá nesta função.
    $(this).addClass("flip");

    //Condição que verifica se foi a primeira carta a ser clicada ou 
    //a segunda.
    if (!hasFlippedCard) 
    {
        //Primeiro click
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    //Como o 'if' acima já tem um return, não precisamos usar o else.

    //Segundo click
    hasFlippedCard = false
    secondCard = this;
    CheckingEquality();

}

//Função que checa se duas cartas são iguais ou diferentes e após isso
//inativa elas caso forem iguais ou fecha elas, deixando elas disponíveis
//a jogo caso forem diferentes
function CheckingEquality() 
{
    //Variavel que armazena um booleano: se as duas cartas forem iguais
    //armazena 'true', se forem diferentes armazena 'false'.
    let isEqual = firstCard.dataset.actors === secondCard.dataset.actors;

    //Se 'isEqual' igual a 'true', executa a função 'InactivateCards'.
    //*Essa função faz com que as cartas não fiquem mais disponíveis
    //para o jogo e que fiquem abertas.*
    //Se 'isEqual' igual a 'false', executa a função 'UnflipCards'.
    //*Essa função faz com que as cartas sejam fechadas e continuem
    //disponíveis ao jogo.*
    isEqual ? InactivateCards() : UnflipCards();
}

function InactivateCards() 
{
    $(firstCard).off("click");
    $(secondCard).off("click");
    ResetControlVariables();
}

function UnflipCards() 
{
    lockBoard = true;

    setTimeout(() => 
    {
        $(firstCard).removeClass("flip");
        $(secondCard).removeClass("flip");

        ResetControlVariables();
    }, 1500);
}

//Função para resetar as cartas, para que o jogo possa continuar
//e o usuário possa testar mais cartas para verem se são iguais ou não.
//Ela é usada após duas cartas serem abertas, independente de elas serem
//iguais ou diferentes.
function ResetControlVariables() 
{
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

//Função usada para embaralhar as cartas
(function shuffle() 
{
    $(".card").each(function()
    {
        let randomPosition = Math.floor(Math.random() * numberCards);
        $(this).css("order", randomPosition)
    })
})();

$(".card").on("click", FlipCard);