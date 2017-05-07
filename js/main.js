var imagens = ["imgs/vin.jpg",
			   "imgs/bambam.jpg",			   
			   "imgs/feelsfrog.jpg",			   
			   "imgs/ff.jpg",			   
			   "imgs/fofao.jpg",			   
			   "imgs/irineu.jpg",			   
			   "imgs/poha.jpg",			   
			   "imgs/sacada.jpg",
			   "imgs/vin.jpg",
			   "imgs/bambam.jpg",			   
			   "imgs/feelsfrog.jpg",			   
			   "imgs/ff.jpg",			   
			   "imgs/fofao.jpg",			   
			   "imgs/irineu.jpg",			   
			   "imgs/poha.jpg",			   
			   "imgs/sacada.jpg"];

var pecasJogo = [];
var pecaIgual="";
var pecasSelecionadas = [];
var paresCertos = [];

var estadoJogo = false;
var doisCliques = false;
var contadorCliques = 0;

//funcao principal (logica do jogo)
$(".pecaimg").click(function(event){
	function mostrarPeca(peca,linkImg){
		var id = peca.attr('id');
		pecasSelecionadas.push(id);
		
		//animação
	    peca.fadeOut('fast', function () {
	        peca.attr('src',linkImg);
	        peca.fadeIn('fast');
	    });
	}
	function trocarCartao(peca,linkImg){
		peca = '#' + peca;
		console.log(peca);
		console.log(linkImg)
	    $(peca).fadeOut('fast', function(){
	        $(peca).attr('src',linkImg);
	        $(peca).fadeIn('fast');
	    });
	}

	if(estadoJogo){
		var pecaClicada = $(this).attr('id');
		if(!paresCertos.includes(pecaClicada)){
			if(!doisCliques && contadorCliques<2){
				//peca 1 selecionada
				if(contadorCliques==0){
					pecaIgual = pecaClicada;
					mostrarPeca($(this),pecasJogo[pecaClicada.substring(4,pecaClicada.length)-1]);
					contadorCliques++;
				}
				//peca 2 selecionada
				//*verifica se a mesma peca foi clicada duas vezes
				else if(contadorCliques==1 && !(pecaIgual == pecaClicada)){
					pecaIgual="";
					mostrarPeca($(this),pecasJogo[pecaClicada.substring(4,pecaClicada.length)-1]);
					contadorCliques++;
				}
			}

			//depois de 2 pecas selecionadas
			if(contadorCliques==2 && !doisCliques){
				doisCliques = true;

				setTimeout(function (){
					contadorCliques=0;
					doisCliques=false;

					console.log(paresCertos.length);
					var p1,p2,v1,v2; //p -> peca  v->valor
					p1 = pecasSelecionadas.pop();
					p2 = pecasSelecionadas.pop();

					v1 = pecasJogo[p1.substring(4,p1.length)-1];
					v2 = pecasJogo[p2.substring(4,p2.length)-1];


					if(v1==v2){
						paresCertos.push(p1);
						paresCertos.push(p2);

						trocarCartao(p1,"imgs/done.png");
						trocarCartao(p2,"imgs/done.png");


						if(paresCertos.length==pecasJogo.length)
							ganhou();
					}
					else{
						trocarCartao(p1,"imgs/cartao.png");
						trocarCartao(p2,"imgs/cartao.png");
					}
				},1300);	
			}
		}
	}
});

function preenchePecasRandom(){
	var listaImgs = Object.create(imagens);
	var i=1;

	while(listaImgs.length>0){
		var num = Math.floor((Math.random() *listaImgs.length));
		pecasJogo.push(listaImgs[num]);
		listaImgs.splice(num,1);
		i++;
	}
}

function ganhou(){
	contadorCliques=0;
	pecasSelecionadas = [];
	paresCertos = [];
	estadoJogo = false;
	document.getElementById("estado").innerHTML = "Parabéns você ganhou!! Clique em 'Reset' para jogar novamente.";
}

function iniciar(){
	preenchePecasRandom();
	estadoJogo = !estadoJogo;

	for(var i=1;i<=16;i++)
		document.getElementById(('peca'+i)).src = 'imgs/cartao.png';		
	
	document.getElementById("estado").innerHTML = "O jogo começou!";
	document.getElementById("btReset").disabled = false;
	document.getElementById("btInicio").disabled = true;
}

function reset(){
	contadorCliques=0;
	pecasSelecionadas = [];
	paresCertos = [];
	estadoJogo = false;

	for(var i=1;i<=16;i++)
		document.getElementById(('peca'+i)).src = 'imgs/wait.png';		

	document.getElementById("estado").innerHTML = "Aguardando início!";
	document.getElementById("btInicio").disabled = false;
	document.getElementById("btReset").disabled = true;
}