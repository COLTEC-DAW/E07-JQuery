function verifica(carta1, carta2) {
    var deu = true;
 	if(carta1.cor != carta2.cor) {
 		setTimeout(function() {
 			deu=false;
 			carta1.obj.addClass("inativo");
 			carta1.obj.removeClass("ativo");
 			carta2.obj.addClass("inativo");
 			carta2.obj.removeClass("ativo");
 		}, 200);
 	}
 	else {
                    
 		setTimeout(function() {

            if(Array.from($("td")).every(function(element) { return $(element).attr("class").split(' ').some(function(elemento) { return elemento == "ativo" })})) {
 				alert("PARABENS");
 				location.reload();
 			}
 		}, 200);
 	}
     return deu;
 }
 
  $(document).ready(function() {
 	var escolha1 = null, escolha2 = null;
 	var cor;
 
  	$("table").css({"border-collapse": "separate", "border-spacing": "10px"})
  	$("td").css({"height": "100px", "width": "100px"});

  	$("td").click(function() {
 		if($(this).attr("class").split(' ').some(function(element) { return element == "inativo" })){
 			cor = $(this).attr("class").split(' ')[0];
 
 			$(this).css({"background-color": cor, "transition": "0.3s"});
 		
 			$(this).addClass("ativo");
 			$(this).removeClass("inativo");
 			
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
 
 				if(verifica(escolha1, escolha2))
                    if(escolha1.cor == escolha2.cor)
                        $("." + escolha1.cor).css({"background-color": "white", "transition": "0.3s"});
 				escolha1 = null;
 				escolha2 = null;
 			}
 		}
  	});
  });
