function shuffle(array) {
    var i = array.length, temp, j;

    while (0 !== i) {
      j = Math.floor(Math.random() * i);
      i -= 1;
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  
    return array;
  }
function conferir(atual, anterior, cont, array){
    if(anterior == ''){
        console.log("primeiro");
        return [atual, cont];
    }
    else if(array[anterior-1] == array[atual-1]){
        console.log(cont);
        if (cont == 7)
            alert("PARABENS");
        console.log("certo");
        return['', (cont+1)];
    }
    else if(array[anterior-1] != array[atual-1]){
        console.log("tudo errado");
        $("#id"+anterior).delay(500).queue(function() {
                    $('#id'+anterior).css("background-color", "#6c757d").dequeue();
                    $('#id'+atual).css("background-color", "#6c757d").dequeue();
                });
        return['', cont];
    }
}

$(function(){
    
    var array = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224'];
    var anterior = '';
    var cont = 0;
    array = shuffle(array);

    for (var i = 1; i < 17; i++){
        $("#id"+i).css("background-color", "#6c757d");
    }

    $("#id1").click(function(){
        $(this).css('background-color', array[0]);
        temp = conferir(1, anterior, cont, array);
        anterior = temp[0];
        cont = temp[1];
        
    });
    $("#id2").click(function(){
        $(this).css('background-color', array[1]);
        temp = conferir(2, anterior, cont, array);
        anterior = temp[0];
        cont = temp[1];
    });
    $("#id3").click(function(){
        $(this).css('background-color', array[2]);
        temp = conferir(3, anterior, cont, array);
        anterior = temp[0];
        cont = temp[1];
    });
    $("#id4").click(function(){
        $(this).css('background-color', array[3]);
        temp = conferir(4, anterior, cont, array);
        anterior = temp[0];
        cont = temp[1];
    });
    $("#id5").click(function(){
        $(this).css('background-color', array[4]);
        temp = conferir(5, anterior, cont, array);
        anterior = temp[0];
        cont = temp[1];
    });
    $("#id6").click(function(){
        $(this).css('background-color', array[5]);
        temp = conferir(6, anterior, cont, array);
        anterior = temp[0];
        cont = temp[1];
    });
    $("#id7").click(function(){
        $(this).css('background-color', array[6]);
        temp = conferir(7, anterior, cont, array);
        anterior = temp[0];
        cont = temp[1];
    });
    $("#id8").click(function(){
        $(this).css('background-color', array[7]);
        temp = conferir(8, anterior, cont, array);
        anterior = temp[0];
        cont = temp[1];
    });
    $("#id9").click(function(){
        $(this).css('background-color', array[8]);
        temp = conferir(9, anterior, cont, array);
        anterior = temp[0];
        cont = temp[1];
    });
    $("#id10").click(function(){
        $(this).css('background-color', array[9]);
        temp = conferir(10, anterior, cont, array);
        anterior = temp[0];
        cont = temp[1];
    });
    $("#id11").click(function(){
        $(this).css('background-color', array[10])
        temp = conferir(11, anterior, cont, array);
        anterior = temp[0];
        cont = temp[1];
    });
    $("#id12").click(function(){
        $(this).css('background-color', array[11])
        temp = conferir(12, anterior, cont, array);
        anterior = temp[0];
        cont = temp[1];
    });
    $("#id13").click(function(){
        $(this).css('background-color', array[12])
        temp = conferir(13, anterior, cont, array);
        anterior = temp[0];
        cont = temp[1];
    });
    $("#id14").click(function(){
        $(this).css('background-color', array[13])
        temp = conferir(14, anterior, cont, array);
        anterior = temp[0];
        cont = temp[1];
    });
    $("#id15").click(function(){
        $(this).css('background-color', array[14])
        temp = conferir(15, anterior, cont, array);
        anterior = temp[0];
        cont = temp[1];
    });
    $("#id16").click(function(){
        $(this).css('background-color', array[15])
        temp = conferir(16, anterior, cont, array);
        anterior = temp[0];
        cont = temp[1];
    });
});

