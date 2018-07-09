var colorOrder = []

function setup() {
    var colors = ['red', 'red', 'green', 'green', 'blue', 'blue', 'yellow', 'yellow', 'pink', 'pink', 'purple', 'purple', 'orange', 'orange', 'black', 'black']

    $('.circle').each(function() {
        let index = Math.floor(Math.random() * colors.length)
        colorOrder.push(colors[index])
        $(this).css('background-color', colors.splice(index, 1))
    })
}

function game() {
    var encontrados = 0
    var clicks = 0
    var clickados = []
    $('button').click(function(){
        if (clickados.length == 1) {
            if (!(clickados[0] === this)) {
                clickados.push(this)
            }
        } else {
            clickados.push(this)
        }
        openCard(this)
        if (clickados.length == 2) {
            if ($(clickados[0]).find('.circle').css('background-color') == $(clickados[1]).find('.circle').css('background-color')) {
                encontrados++
                clickados = []
            } else {
                setTimeout(function(){
                    closeCards(clickados)
                    clickados = []
                }, 1000)
            }
        }
        if (encontrados == 8) {
            window.open('win.html','_self')
        }
    })
}

function openCard(node) {
    $(node).css('background-color', 'white')
    $(node).find('.circle').removeClass('d-none')
}

function closeCards(nodes) {
    $(nodes[0]).css('background-color', 'gray')
    $(nodes[0]).find('.circle').addClass('d-none')
    $(nodes[1]).css('background-color', 'gray')
    $(nodes[1]).find('.circle').addClass('d-none')
}

setup()
game()