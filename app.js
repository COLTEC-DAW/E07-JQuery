// From https://stackoverflow.com/questions/1533910/randomize-a-sequence-of-div-elements-with-jquery
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
    const waitTime = 2000;
    
    const $deck = $(".deck");
    var $data = {
        "#moves": 0,
        "#errors": 0,
        "#matches": 0
    }
    
    $deck.randomize(".card");

    var gameIsPaused = true; 
    
    $("#pause").click( function(){
        gameIsPaused = !gameIsPaused;
        $(this).find("p").first().text( gameIsPaused ? "Start" : "Pause")
    })

    $("#restart").click( function() {
        location.reload();
    })

    $(".card").on({
        click: function() {
            // Cancela o evento se a carta clicada já tiver um par encontrado ou se o game estiver pausado
            if($(this).hasClass("equal") || gameIsPaused == true)
                return;
            
            // Seleciona cartas viradas que não foram encontradas o par ainda
            var open = $deck.find(".open").not(".equal");
            
            // Vira ou desvira a carta caso seja a primeira ou a segunda a virar
            if(open.length < 2){
                $(this).toggleClass("open");
                $data["#moves"]++;
            }
            
            // Seleciona cartas viradas que não foram encontradas o par ainda
            open = $deck.find(".open").not(".equal").not(".different");
            
            // Verifica a combinação, somente se tiver duas cartas viradas
            if(open.length == 2){
                let com = open[0].getAttribute("type") == open[1].getAttribute("type");

                com ? (
                    $data["#matches"]++,
                    open.each((index, elem) => {
                        elem.classList.add("equal")
                    })
                ) : (
                    $data["#errors"]++,
                    $(".card").addClass(".disabled"),

                    open.each((index, elem) => {
                        elem.classList.add("different"), 
                                
                        // Se a combinação falhar, alerta o usuário e desvira as cartas 
                        setTimeout(function () {
                            elem.classList.remove('different');
                            elem.classList.remove('open');
                            $(".card").removeClass(".disabled");
                        }, waitTime)
                    })
                );
            }

            for(let [key, value] of Object.entries($data))
                $(key).updatecount(value);
        }
    });
});
    
            