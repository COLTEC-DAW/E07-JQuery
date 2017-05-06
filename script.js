function verifica(carta1, carta2) {
	//Verifica se as cores sao iguais
	if(carta1.cor != carta2.cor) {
		setTimeout(function() {
			alert("Errrrrrou!");
			
			//Remove classe 'ativo' e adiciona 'inativo'
			carta1.obj.addClass("inativo");
			carta1.obj.removeClass("ativo");
			carta2.obj.addClass("inativo");
			carta2.obj.removeClass("ativo");
		}, 200);
	}
	else {
		setTimeout(function() {
			alert("ACERTÔ, MISERAVI!");

			//Verifica se o usuario ganhou
			if(Array.from($("td")).every(function(element) { return $(element).attr("class").split(' ').some(function(elemento) { return elemento == "ativo" })})) {
				alert("PARABENS, VOCE GANHOU");
				location.reload(); //Recarrega a pagina pra jogar novamente
			}
		}, 200);
	}
}

$(document).ready(function() {
	var escolha1 = null, escolha2 = null;
	var cor;

	//Coloca espaco na tabela
	$("table").css({"border-collapse": "separate", "border-spacing": "10px"})
	//Seta cor de tudo pra cinza
	$("td").css({"height": "100px", "width": "100px"});

	//Jogo em si
	$("td").click(function() {
		//Verifica se a carta ja nao foi escolhida
		if($(this).attr("class").split(' ').some(function(element) { return element == "ativo" })) {
			alert("Carta já escolhida");
		}
		else {
			//Pega a cor da carta
			cor = $(this).attr("class").split(' ')[0];

			//Muda o background para revelar a cor da carta
			$(this).css({"background-color": cor, "transition": "0.3s"});
		
			//Adiciona classe 'ativo' e remove 'inativo'
			$(this).addClass("ativo");
			$(this).removeClass("inativo");
			
			//Decide se eh a primeira ou segunda escolha do usuario
			if(escolha1 == null) {
				escolha1 = {
					obj: $(this),
					cor: cor
				}
			}
			else {
				escolha2 = {
					obj: $(this),
					cor: cor
				}

				verifica(escolha1, escolha2);

				escolha1 = null;
				escolha2 = null;
			}
		}
	});
});