// Credits: https://stackoverflow.com/questions/1533910/randomize-a-sequence-of-div-elements-with-jquery

function calculaNota(moves){ 
    if(moves > 16 && moves < 19)
        $($(".fa-star").get(2)).css("color", "orange");
    else if (moves > 19 && moves < 23)
        $($(".fa-star").get(2)).css("visibility", "collapse"); 
    else if (moves > 26 && moves < 29)
        $($(".fa-star").get(1)).css("color", "orange");    
    else if (moves > 32 && moves < 35)
        $($(".fa-star").get(1)).css("visibility", "collapse");
    else if (moves > 38 && moves < 42)
        $($(".fa-star").get(0)).css("color", "orange");
    else if (moves > 42 && moves < 45)
        $($(".fa-star").get(0)).css("color", "red");
    else if (moves > 50)
        $($(".fa-star").get(0)).css("visibility", "collapse");
}

$.fn.randomize = function() {
    $.each(this.get(), function(index, el) {
        var $el = $(el);
        var $find = $el.children();
        
        $find.sort(function() {
            return 0.5 - Math.random();
        });
        
        $el.empty();
        $find.appendTo($el);
    });
};

$.fn.updatecount = function(value){
    $(this).attr("data-count", value);
};

$( document ).ready(function() {
    var gameIsPaused = true; 

    var $data = {
        "#moves": 0,
        "#errors": 0,
        "#matches": 0
    }
    
    var second = 0, minute = 0;
    const zeroPad = (num, places) => String(num).padStart(places, '0');

    setInterval(function() {
        if(gameIsPaused == false) { 
            $('#timer').text(zeroPad(minute, 2) + ":" + zeroPad(second, 2))
            second++;

            if(second == 60){
                minute++;
                second = 0;
            }

            if(minute == 60){
                hour++;
                minute = 0;
            }
        }
    }, 1000);
        
    $(".deck").randomize(".card");

    $(".card").click(function() {
        // Cancela o evento se o jogo estiver pausado
        if(gameIsPaused == true)
            return;

        // Cancela o evento se a carta clicada já tiver um par encontrado
        if($(this).hasClass("equal"))
            return;
        
        // Seleciona cartas viradas que não foram encontradas o par ainda
        var open = $(".deck").find(".open").not(".equal");
        
        // Vira ou desvira a carta caso seja a primeira ou a segunda a virar
        if(open.length < 2){
            $(this).toggleClass("open");
            $data["#moves"]++;
        }
        
        // Seleciona cartas viradas que não foram encontradas o par ainda
        open = $(".deck").find(".open").not(".equal").not(".different");
        
        // Verifica a combinação, somente se tiver duas cartas viradas
        if(open.length == 2){
            let com = open[0].getAttribute("type") == open[1].getAttribute("type");

            com ? (
                $data["#matches"]++,
                open.each((index, elem) => {
                    $(elem).addClass("equal")
                })
            ) : (
                $data["#errors"]++,
                $(".card").addClass(".disabled"),

                open.each((index, elem) => {
                    $(elem).addClass("different"), 
                            
                    // Se a combinação falhar, alerta o usuário e desvira as cartas 
                    setTimeout(function () {
                        $(elem).removeClass('different');
                        $(elem).removeClass('open');
                        $(".card").removeClass(".disabled");
                    }, 1000)
                })
            );
        }

        // Atualiza os contadores da página
        for(let [key, value] of Object.entries($data))
            $(key).updatecount(value);

        // Calcula a nota momentânea
        calculaNota($data["#moves"]); 

        // Comemoração quando termina
        if($data["#matches"] == 8) {
            $("#pause").trigger("click", false);
            location.href='#congrats';

            $( "#congrats h1" ).after(function() {
                return "<p> Você venceu precisando mover " + $data["#moves"] + " cards e tirou nota " + $("#nota").html() + "!</p>";
            });
        }
    });
 
    $("#play-again").click( function() { 
        $("#memory-game").load(" #memory-game > *");
        $(".deck").randomize(".card");
        location.href = window.location.origin;
    })

    $("#pause").click( function(event, animate = true){
        gameIsPaused = !gameIsPaused;
        
        if(animate) $("#pause").find('.icon').addClass("active");

        setTimeout(function() {
            $("#pause").find("p").text( gameIsPaused ? "Start" : "Pause");
            $("#pause").find('.icon').find('i').removeClass( gameIsPaused ? "bi-pause-circle-fill" : "bi-play-circle-fill");
            $("#pause").find('.icon').find('i').addClass( !gameIsPaused ? "bi-pause-circle-fill" : "bi-play-circle-fill");
        }, 500);
        
        setTimeout(function () {
            if(animate) $("#pause").find(".icon").removeClass("active");
        }, 900);
    })
});
    
            