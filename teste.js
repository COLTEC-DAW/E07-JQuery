$(document).ready(function(){
    var app = { //app é um objeto
        cards: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8],
        init: function() {
            app.shuffle(); 
        },

        shuffle: function (){
            var random = 0;
            var temp = 0;

            for (i = 1; i < app.cards.length; i++)
            {
                random = Math.round(Math.random() * i);   
                temp = app.cards[i];
                app.cards[i] = app.cards[random];
                app.cards[random] = temp;
            }
                    
            app.assignCards();
        },

        clickHandlers: function () {
            $('.card').on('click', function() {
                $(this).html('<p>' + $(this).data('cardValue')+ '</p>').addClass('selected');
                app.checkMatch();
            })

            
        },

        assignCards: function () {
            $('.card').each(function(index){
                $(this).attr('data-card-value', app.cards[index]); //ele vai criar uma div "data-card-value" que vai ter o index do array
            });

            app.clickHandlers();
        },

        checkMatch: function() {
            if ($('.selected').length === 2)
            {
                if ($('.selected').first().data('cardValue') == $('.selected').last().data('cardValue'))
                {
                    //remove cards
                    $('.selected').each(function() {
                        $(this).animate({opacity: 0}).removeClass('unmatched');
                    });

                    $('.selected').each(function () {
                        $(this).removeClass('selected');
                    });

                    app.checkWin();
                }

                else
                {
                    //flip cards back over
                    setTimeout(function() {
                        $('.selected').each(function ()
                        {
                            $(this).html('').removeClass('selected');
                        });
                    }, 1000);
                }
            }
        },

        checkWin: function()
        {
            if ($('.unmatched').length === 0)
            {
                $('.container').html('<h1>You won!!</h1>');
            }
        }
    };

    app.init();
});