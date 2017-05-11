$(document).ready(function(){
    
    //Coloca espaco na tabela
	$("table").css({"border-collapse": "separate", "border-spacing": "10px"})
    $("td").css({"height": "100px", "width": "100px"});
	//Seta cor de tudo pra cinza
	$('.carta').css('background-color','gray');
	
	var num1=null;
	var att1=null;
    var num2=null;
	var att2=null;
    
	$('td').click(function(){
        var cod = $(this).attr('class').split(' ')[2];
        if(cod == "coberta"){
            
			$(this).removeClass("coberta");
            //pega o numero da class do clique
            var num=$(this).attr('class').split(' ')[1];
            //descobre a cor
            var string=colore(num);
            console.log(string);
			$(this).css('background-color',string);
			sleep(300).then(() => {
				if(num1 == null){
					num1 = num;
					att1=$(this);
				}
				else{
					num2 = num;
					att2=$(this);
					var c = compara(num1,num2);
					
					console.log(num1);
					console.log(num2);
					console.log(c);		
					if(c == true){

						$(att1).addClass("descoberta");
						$(att1).addClass("descoberta");
						num1=null;
						num2=null;
						att1=null;
						att2=null;
					}
					else{
						
						$(att1).addClass("coberta");
						$(att2).addClass("coberta");
						$(att1).css('background-color','gray');
						$(att2).css('background-color','gray');
						num1=null;
						num2=null;
						att1=null;
						att2=null;
					}
				}
			});
        }
        

    }) 
})

// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function compara(num1, num2){
	if(num1 == num2){
		return true;
	}
	else{
		return false;
	}
}

function colore(num){
    if(num == 1){
        return "blue";
    }
    else if(num == 2){
        return "red";
    }
    else if(num == 3){
        return "green";
    }
    else if(num == 4){
        return "black";
    }
    else if(num == 5){
        return "pink";
    }
    else if(num == 6){
        return "yellow";
    }
    else if(num == 7){
        return "purple";
    }
    else{
        return "orange";
    }
}