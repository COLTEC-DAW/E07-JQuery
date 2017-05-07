var interseção = function(a, b) {
	var setA = new Set(a);
	var setB = new Set(b);
	var intersection = new Set([...setA].filter(x => setB.has(x)));
	return Array.from(intersection);
}

var cores = ['red', 'pink', 'orange', 'teal', 'brown', 'lime', 'green', 'purple']

var verificação = function(pE, sE) {
	var corPE = interseção(cores,  Object.create(pE))
	var corSE = interseção(cores,  Object.create(sE))
	return interseção(corPE, corSE).length == 1
}

var mostraCor = function(tile) {
	tile.fadeOut('fast', function () {
		tile.removeClass('blue-grey')
		tile.fadeIn('fast');
	});
}
var escondeCor = function(tile){
	tile.fadeOut('fast', function () {
		tile.addClass('blue-grey')
		tile.hide().fadeIn('fast');
	});
}

	var primeiraEscolha = null;
	var segundaEscolha = null;
$(document).ready(function() {
	$('.tile').click(function() {
		mostraCor($(this))
		// o que acontece quando o cara clica 2x na mesma tile?
		if (!($(this).hasClass('blue-grey'))) {
			// nada
		} else  { // porém...
			// se ele clica em outra, precisamos tratar isso
			if (primeiraEscolha == null) { // primeira carta que ele escolher
				$(this).removeClass('blue-grey')
					primeiraEscolha = {
					objeto: $(this),
					classes: $(this).attr("class").split(' ')
				}

			} else {
				$(this).removeClass('blue-grey')
				segundaEscolha = {
					objeto: $(this),
					classes: $(this).attr("class").split(' ')
				}
				var verificar = function(a, b){
					if (!(verificação(a.classes, b.classes))){
						escondeCor(a.objeto)
						escondeCor(b.objeto)
					}	
					primeiraEscolha = null
					segundaEscolha = null
				}
				setTimeout(function(){
					verificar(primeiraEscolha, segundaEscolha)
				} , 750)
			}
		}
	});
});