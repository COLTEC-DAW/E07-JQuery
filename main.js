(function(){

	var matches = 0;
	//array que armazenará os objetos com src e id de 1 a 8
	var images = [];

	//array que armazena as cartas viradas
	var flippedCards = [];
	
	var modalGameOver = document.querySelector("#modalGameOver");
	//estrutura de atribiução das imagens aos card
	for(var i = 0; i < 16; i++){
		//cria um objeto img com um src e um id
		var img = {
			src: "img/" + i + ".jpg",
			id: i%8
		};
		
		//inserer o objeto criado no array
		images.push(img);
	}

	//funcao de embaralhar as cartinhas
	function randomSort(oldArray){

		var newArray = [];
		while(newArray.length != oldArray.length){
			var i = Math.floor(Math.random()*oldArray.length); //valor aleatorio do tamanho do old = 16
			if(newArray.indexOf(oldArray[i]) < 0 ){ //confere se possui e adiciona
				newArray.push(oldArray[i]);
			}

		}
		return newArray;
	}

	startGame();

	function startGame(){
		matches = 0;

		flippedCards = [];
		images = randomSort(images); //embaralha as cartinhas

		var frontFaces = document.getElementsByClassName("front");
		var backFaces = document.getElementsByClassName("back");

		for(var i=0; i<16; i++){
			//volta as configuracoes iniciais
			frontFaces[i].classList.remove("flipped","match");
			backFaces[i].classList.remove("flipped","match");
			
			var card = document.querySelector("#card"+i);
			card.style.left = i%4 == 0 ? 25 + "px" : i % 4 * 300 + 5 + "px";
			if(i<4)
				card.style.top = 25 + "px";
			else if(i>=4 && i<8)
				card.style.top = 250 + 35 + "px";
			else if (i>=8 && i<12)
				card.style.top = 500 + 35 + "px";
			else
				card.style.top = 750 + 35 + "px";

			card.addEventListener("click",flipCard,false);

			frontFaces[i].style.background = "url('" + images[i].src +"')"
			frontFaces[i].setAttribute("id",images[i].id); 
		}
		modalGameOver.style.zIndex = -2;
		modalGameOver.style.width = 10 + "%";
		modalGameOver.style.height = 10 + "%";
		modalGameOver.removeEventListener("click",startGame,false);
	}


	function flipCard(){
		if(flippedCards.length < 2){ //duas cartas clicadas?
			var faces = this.getElementsByClassName("face"); //lista de elementos segundo o nome da classe
			//console.log(faces[0]); tem indices
			
			//-->confere se a carta já está virada, verificando a quantidade de classes da face. O que imprede que a mesma carta seja virada duas vezes
			if(faces[0].classList.length > 2){
				return;
			}

			faces[0].classList.toggle("flipped");
			faces[1].classList.toggle("flipped"); //se ja possui o flipped, remove, se nao, add
			flippedCards.push(this);

			if(flippedCards.length===2){
				if(flippedCards[0].childNodes[3].id===flippedCards[1].childNodes[3].id){
					flippedCards[0].childNodes[1].classList.toggle("match"); //recebem class de match
					flippedCards[0].childNodes[3].classList.toggle("match");
					flippedCards[1].childNodes[1].classList.toggle("match");
					flippedCards[1].childNodes[3].classList.toggle("match");
					matches++;
					flippedCards = [];

					if(matches == 8){ //todas viradas
						gameOver();
					}
				}
			}
	
		} else { //tem que desvirar as cartas, ja que tem duas cartas
			flippedCards[0].childNodes[1].classList.toggle("flipped");
			flippedCards[0].childNodes[3].classList.toggle("flipped");
			flippedCards[1].childNodes[1].classList.toggle("flipped");
			flippedCards[1].childNodes[3].classList.toggle("flipped");
			flippedCards = []; //zera o array
		}
		
	}
	function gameOver(){
		modalGameOver.style.zIndex = 10;
		modalGameOver.style.width = 100 + "%";
		modalGameOver.style.height = 100 + "%";
		toTop();
		modalGameOver.addEventListener("click",startGame,false);
	}

	function toTop(){
		$('html, body').animate({
		scrollTop: 0
		}, 1, 'linear');
	}


	



}());
 