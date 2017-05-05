$(document).ready(function() {
	//Coloca espaco
	$("table").css({"border-collapse": "separate", "border-spacing": "10px"})
	//Seta cor de tudo pra cinza
	$("td").css({"height": "100px", "width": "100px"});

	//Jogo em si
	$("td").click(function() {
		var classe = $(this).attr("class").split(' ')[1];

		$(this).css({"background-color": classe, "transition": "0.5s"});
	
		$(this).toggleClass("ativo");
		$(this).toggleClass("inativo");
	});
});