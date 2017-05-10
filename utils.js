function randomColor(){    
    var c;
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
    return c;
}

function shuffle(var a){
	var j, x, i;
    // Randomiza as cartas
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
}

$(document).ready(function(){
    var colors = randomColor();
    colors = shuffle(colors);

    $("#c).click(function(){

    });
});