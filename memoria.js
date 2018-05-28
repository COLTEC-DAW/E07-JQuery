$(document).ready(function() {
    var opcao1 = null;
    var opcao2 = null;
    var primeiraOUsegunda = 1; // se essa variavel = 1 entao eh a primeira. Se = 2 entao eh segunda
    var numCarta;
    var pegarImagem;//verificar se a imagem e padrao, se nao, quer dizer que a imagem ja foi clicada
    var imagemPadrao = "";
	$("table").css({"border-collapse": "separate", "border-spacing": "55px"})//espacamento entre as cartas
	$("td").css({"height": "100px", "width": "100px"});//tamanho das cartas

	//Botao clicar na carta
	$("td").click(function() {

        //Pegar a imagem da carta, se a carta ja estiver sido jogada, entao nao deixar o usuario clicar nela
        pegarImagem = $(this).css("background-image").replace(/^url\(['"](.+)['"]\)/, '$1');
        //percorrer todo os caracteres do link da imagem
        for(var i=0;i<pegarImagem.length;i++){
            //pegar os ultimos 9 caracteres da imagem, pois assim saberei se a imagem eh o "padra.png" e ele possui 9 caracteres
            if (pegarImagem.length == i || pegarImagem.length-1 == i || pegarImagem.length-2 == i || pegarImagem.length-3 == i || pegarImagem.length-4 == i || pegarImagem.length-5 == i || pegarImagem.length-6 == i || pegarImagem.length-7 == i || pegarImagem.length-8 == i || pegarImagem.length-9 == i || pegarImagem.length-10 == i) {
                imagemPadrao = imagemPadrao+pegarImagem[i];
            }
        }

        //verifica, se a variavel imagemPadrao nao possui a imagem padrao, quer dizer que ela ja foi clicada!
        if (imagemPadrao != "padrao.png") {
            alert("Esta carta ja foi clicada, escolha outra!");
            imagemPadrao="";
        }

        //se a variavel imagemPadrao possui a imagem padrao entao quer dizer que esta carta ainda nao foi clicada
        else {
            imagemPadrao="";
            //Pega o num da carta
            numCarta = $(this).attr("class").split(' ')[0];

            //Muda o background para revelar o num da carta
            if(numCarta == "um") {
                $(this).css("background-image", "url(imagens/um.png)");
            }
            if(numCarta == "dois") {
                $(this).css("background-image", "url(imagens/dois.png)");
            }
            if(numCarta == "tres") {
                $(this).css("background-image", "url(imagens/tres.png)");
            }
            if(numCarta == "quatro") {
                $(this).css("background-image", "url(imagens/quatro.png)");
            }
            if(numCarta == "cinco") {
                $(this).css("background-image", "url(imagens/cinco.png)");
            }
            if(numCarta == "seis") {
                $(this).css("background-image", "url(imagens/seis.png)");
            }
            if(numCarta == "sete") {
                $(this).css("background-image", "url(imagens/sete.png)");
            }
            if(numCarta == "oito") {
                $(this).css("background-image", "url(imagens/oito.png)");
            }
            
            //se esta na primeira carta escolhida
            if(primeiraOUsegunda == 1) {
                opcao1 = {
                    obj: $(this),
                    numCarta: numCarta
                }
                primeiraOUsegunda = 2;//a proxima eh a segunda
            }
            
            //se esta na segunda carta escolhida
            else if (primeiraOUsegunda == 2){
                opcao2 = {
                    obj: $(this),
                    numCarta: numCarta
                }
                analisarCartas(opcao1, opcao2);
                opcao1 = null;
                opcao2 = null;
                primeiraOUsegunda = 1;//a proxima eh a primeira novamente
            }
        }
	});
});





var contarQuantosAcertos=0;
function analisarCartas(escolhida1, escolhida2) {
	if(escolhida1.numCarta != escolhida2.numCarta) {  //se as cartas escolhidas sao diferentes, entao setar imagem padrao
        setTimeout(function() {
            $(escolhida1.obj).css("background-image", "url(imagens/padrao.png)");
            $(escolhida2.obj).css("background-image", "url(imagens/padrao.png)");
        }, 500);//apos 0.5 segundos voltar ao normal
    }
    else{
        contarQuantosAcertos++;
        console.log(contarQuantosAcertos);
        if(contarQuantosAcertos==8){
            alert("Voce ganhou");
            location.reload();//recarregar pagina
        }
    }
    
}