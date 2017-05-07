var interseção = function(a, b) {
	var setA = new Set(a);
	var setB = new Set(b);
	var intersection = new Set([...setA].filter(x => setB.has(x)));
	return Array.from(intersection);
}

	var cores = ['red', 'pink', 'orange', 'teal', 'brown', 'lime', 'green', 'purple']

var verificação = function(pE, sE) {
	var corPE = interseção(cores, pE)
	var corSE = interseção(cores, sE)
	return interseção(corPE, corSE).length == 1
}

$(document).ready(function() {
	var primeiraEscolha = null;
	var segundaEscolha = null;
	$('.tile').click(function() {
		if (!($(this).hasClass('blue-grey'))) {
			// nada
		} else  { // porém...
			// se ele clica em outra, precisamos tratar isso
			$(this).removeClass('blue-grey')
			if (primeiraEscolha == null) { // primeira carta que ele escolher
				primeiraEscolha = {
					objeto: $(this),
					classes: $(this).attr("class").split(' ')
				}
			} else {
				segundaEscolha = {
					objeto: $(this),
					classes: $(this).attr("class").split(' ')
				}
				if (!(verificação(primeiraEscolha.classes, segundaEscolha.classes))){
					primeiraEscolha.objeto.addClass('blue-grey')
					segundaEscolha.objeto.addClass('blue-grey')
				}
				primeiraEscolha = null
				segundaEscolha = null
			}
		}
	});
});