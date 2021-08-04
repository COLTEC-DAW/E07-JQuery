
$(function(){  
    $('.line1 .square1').addClass('fa fa-leaf fa-4x').fadeToggle(4000);
    $('.line1 .square2').addClass('fa fa-paper-plane fa-4x').fadeToggle(4000);
    $('.line1 .square3').addClass('fa fa-glass-cheers fa-4x').fadeToggle(4000);
    $('.line1 .square4').addClass('fa fa-coffee fa-4x').fadeToggle(4000);
    $('.line2 .square1').addClass('fa fa-moon fa-4x').fadeToggle(4000);
    $('.line2 .square2').addClass('fa fa-camera-retro fa-4x').fadeToggle(4000);
    $('.line2 .square3').addClass('fa fa-glass-cheers fa-4x').fadeToggle(4000);
    $('.line2 .square4').addClass('fa fa-camera-retro fa-4x').fadeToggle(4000);
    $('.line3 .square1').addClass('fa fa-gamepad fa-4x').fadeToggle(4000);
    $('.line3 .square2').addClass('fa fa-leaf fa-4x').fadeToggle(4000);
    $('.line3 .square3').addClass('fa fa-save fa-4x').fadeToggle(4000);
    $('.line3 .square4').addClass('fa fa-coffee fa-4x').fadeToggle(4000);
    $('.line4 .square1').addClass('fa fa-gamepad fa-4x').fadeToggle(4000);
    $('.line4 .square2').addClass('fa fa-save fa-4x').fadeToggle(4000);
    $('.line4 .square3').addClass('fa fa-moon fa-4x').fadeToggle(4000);
    $('.line4 .square4').addClass('fa fa-paper-plane fa-4x').fadeToggle(4000);
    let elemento = null;
    let antigoElemento = null;
    let comparacao = null;

    $(document.getElementsByTagName('td')).click(function(event){
        elemento = $(event.target).children();
        elemento.fadeToggle('fast');               
        console.log($(event.target).children().attr('class'));     
        comparacao = $(event.target).children().attr('class');

        if(antigoElemento == null){
            antigoElemento = elemento;
        }else{
            let equal = true;
            for(let i = 7; comparacao[i] != null; i++){
                if(elemento.attr('class')[i] != antigoElemento.attr('class')[i]){
                    elemento.fadeToggle('fast'); 
                    antigoElemento.fadeToggle('fast');
                    equal = false;
                    break;
                }
            }
            if(equal == true){
                elemento.fadeToggle('fast'); 
                antigoElemento.fadeToggle('fast');
                elemento.fadeToggle('fast'); 
                antigoElemento.fadeToggle('fast');
                elemento.fadeToggle('fast'); 
                antigoElemento.fadeToggle('fast');
                elemento.fadeToggle('fast'); 
                antigoElemento.fadeToggle('fast');
            }
            antigoElemento = null;
        }      
    });
});

/* Código extra que gera erro por alguma razão:

$(document.getElementsByTagName('p')).click(function(event){
    elemento = $(event.target);
    elemento.fadeToggle('fast');               
    console.log($(event.target).attr('class'));     
    comparacao = $(event.target).attr('class');

    if(antigoElemento == null){
        antigoElemento = elemento;
    }else{
        for(let i = 7; comparacao[i] != null; i++){
            if(elemento.attr('class')[i] != antigoElemento.attr('class')[i]){
                elemento.fadeToggle('fast'); 
                antigoElemento.fadeToggle('fast');
                break;
            }
        }
        antigoElemento = null;
    }      
});
*/
