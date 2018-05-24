$(document).ready(function(){
    function shuffleArray(array) {
        for(var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    function sleep(milliseconds) {
      var start = new Date().getTime();
      for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
          break;
        }
      }
    }

    function memory(clicked, selected, count, array){

        $("#p"+clicked).css('background-color', array[clicked - 1]);
        if(selected == clicked){
            $('#p'+clicked).css("background-color", "#6c757d");
            return [selected, count];
        }
        if(selected == ""){ //Se for o primeiro da dupla
            return [clicked , count];
        }
        else if (array[selected - 1] == array[clicked-1]){ //Se voce acertar a dupla
            count++;
            if(count == 8)
                alert("Parabéns você ganhou!");
            return ["", count];

        }
        else { //Se voce errar a dupla
            $("#p"+selected)
                .delay(500)
                .queue(function() {
                    $('#p'+selected).css("background-color", "#6c757d").dequeue();
                    $('#p'+clicked).css("background-color", "#6c757d").dequeue();
                });
                return ["", count];

        }
    }

    $("#btn").click(function(){
        for (var i = 1; i < 17; i++){
            $("#p"+i).css("background-color", "#6c757d");
        }

        var count = 0;
        var selected = "";
        var array = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224'];
        array =  shuffleArray(array);


        $("#p1").click(function (){
            var resp = memory(1, selected, count, array);
            selected = resp[0];
            count = resp[1];
        });

        $("#p2").click(function (){
            var resp = memory(2, selected, count, array);
            selected = resp[0];
            count = resp[1]
        });

        $("#p3").click(function (){
            var resp = memory(3, selected, count, array);
            selected = resp[0];
            count = resp[1]
        });

        $("#p4").click(function (){
            var resp = memory(4, selected, count, array);
            selected = resp[0];
            count = resp[1]
        });

        $("#p5").click(function (){
            var resp = memory(5, selected, count, array);
            selected = resp[0];
            count = resp[1]
        });

        $("#p6").click(function (){
            var resp = memory(6, selected, count, array);
            selected = resp[0];
            count = resp[1]
        });

        $("#p7").click(function (){
            var resp = memory(7, selected, count, array);
            selected = resp[0];
            count = resp[1]
        });

        $("#p8").click(function (){
            var resp = memory(8, selected, count, array);
            selected = resp[0];
            count = resp[1]
        });

        $("#p9").click(function (){
            var resp = memory(9, selected, count, array);
            selected = resp[0];
            count = resp[1]
        });

        $("#p10").click(function (){
            var resp = memory(10, selected, count, array);
            selected = resp[0];
            count = resp[1]
        });

        $("#p11").click(function (){
            var resp = memory(11, selected, count, array);
            selected = resp[0];
            count = resp[1]
        });

        $("#p12").click(function (){
            var resp = memory(12, selected, count, array);
            selected = resp[0];
            count = resp[1]
        });

        $("#p13").click(function (){
            var resp = memory(13, selected, count, array);
            selected = resp[0];
            count = resp[1]
        });

        $("#p14").click(function (){
            var resp = memory(14, selected, count, array);
            selected = resp[0];
            count = resp[1]
        });

        $("#p15").click(function (){
            var resp = memory(15, selected, count, array);
            selected = resp[0];
            count = resp[1]
        });

        $("#p16").click(function (){
            var resp = memory(16, selected, count, array);
            selected = resp[0];
            count = resp[1]
        });


    });

});
