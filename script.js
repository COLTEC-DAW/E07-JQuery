var imagens = ["imgs/amor.jpg",
			   "imgs/ave.jpg",			   
			   "imgs/espiral.jpg",			   
			   "imgs/flor.jpg",			   
			   "imgs/gatinho.gif",			   
			   "imgs/minnie.png",			   
			   "imgs/placa.jpeg",			   
			   "imgs/praia.jpg",
			   "imgs/amor.jpg",
			   "imgs/ave.jpg",			   
			   "imgs/espiral.jpg",			   
			   "imgs/flor.jpg",			   
			   "imgs/gatinho.gif",			   
			   "imgs/minnie.png",			   
			   "imgs/placa.jpeg",			   
			   "imgs/praia.jpg"];
               
var countCliques = 0;

function iniciar ()
{
    var colocados = [];

    //faz um random das cartas
    for(var i=1;i<=16;i++)
    {
        var rand = Math.floor (Math.random() * 16);
        
        while (colocados.indexOf(rand) != -1)
        {
            rand = Math.floor (Math.random() * 16);
        }
        colocados.push(rand);
		document.getElementById(('peca'+ i)).src = imagens[rand];
    }

    if (count == 2)
        alert("Consegui");
}

var options = 
{
       autoflip: "true",
       autoflipstart: '500ms', //indicates how long to wait to start this autoflip
       autoflipdelay: '3s', //indicates how long to wait between two consective flips
}

var count = 0;

$(document).ready(function(){
    
    $(function()
    {
        $(".flip-horizontal").click(function(){
            count++;    
        });

        $(".flip-horizontal").flip()(function(){
            trigger: 'click';
        });

        $("")
    });
});