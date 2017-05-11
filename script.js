function randomColor(){    
    var c = [];
	// Escolhe 8 cores aleatórias e colore 16 cartas
	for(var i = 0; i < 16; i++){
		if(i < 8){
			var letters = '0123456789ABCDEF';
    		var color = '#';
    		for (var i = 0; i < 6; i++ ) {
    			color += letters[Math.floor(Math.random() * 16)];
    		}
    		c[i] = color;
    	}
    	else{
    		c[i] = c[i-8]
    	}
	}

	var j, x, i;
    // Randomiza as cartas
    for (i = c.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = c[i - 1];
        c[i - 1] = c[j];
        c[j] = x;
    }
    return c;
}

function verifica(carta1, carta2) {
	if(carta1.cor != carta2.cor) {
		setTimeout(function() {
				
			carta1.obj.addClass("hidden");
			carta1.obj.removeClass("active");
			carta2.obj.addClass("hidden");
			carta2.obj.removeClass("active");
		}, 500);
	}
	else {
		setTimeout(function() {
			if(Array.from($("td")).every(function(element) { return $(element).attr("class").split(' ').some(function(elemento) { return elemento == "active" })})) {
				alert("gg ez");
				location.reload();
			}
		}, 400);
	}
}

$(document).ready(function() {
	/*
	var cores = [];
	cores = randomColor();
	for (var i = 0; i < cores.length; i++) console.log(cores[i]);
	*/
	var escolha1 = null, escolha2 = null;
	var cor, cores;	

	$("td").click(function() {
		if($(this).attr("class").split(' ').some(function(element) { return element == "active" })) {}
		else {
			//cor = "#";
			//cor += ($(this).attr("class").split(' ')[0]);
			cor = ($(this).attr("class").split(' ')[0]);

			$(this).css({"background-color": cor, "transition": "0.4s"});
		
			$(this).addClass("active");
			$(this).removeClass("hidden");
			
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