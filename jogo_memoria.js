$(document).ready(function(){

    Aleatorizador();

});

function jogoDaMemoria(){
    var cartasViradas = 0;
    const cards = document.querySelectorAll('.memory-card');
    var cartasClicadas = [];
    
    function flipCard() {
      this.classList.toggle('flip');
      cartasClicadas.push(this);
      id = this.getAttribute('id');
      if(cartasClicadas.length == 2){
        jogoMemorial();
      }
    }
    
    cards.forEach(card => card.addEventListener('click', flipCard));
    
    function jogoMemorial(){
      let id1 = cartasClicadas[0].getAttribute('id');
      let id2 = cartasClicadas[1].getAttribute('id');
      if(id1 === id2){
        cartasClicadas = [];
        cartasViradas += 2;

      }
      else{
        setTimeout(() => {
        cartasClicadas.forEach(card => {
          card.classList.toggle('flip');
        });
        cartasClicadas = [];}, 600);
      }

      if(cartasViradas == 16){

        document.getElementById("ganhou").style.opacity = "100";

      }
    }
}
  
function Aleatorizador(){

    let imgs = [], imgs_organizadas = [], i, contador = 0;
    let ids = [], ids_organizados = [];

    for(i=0; i< 16; i++){

        imgs_organizadas.push(-1);

    }

    imgs.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg');
    ids.push('angular');
    imgs.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg');
    ids.push('react');
    imgs.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ember/ember-original-wordmark.svg');
    ids.push('ember');
    imgs.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg');
    ids.push('c');
    imgs.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codecov/codecov-plain.svg');
    ids.push('codecov');
    imgs.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg');
    ids.push('python');
    imgs.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg');
    ids.push('java');
    imgs.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg');
    ids.push('html');

    i = 0;

    while(i < 8){

        let posicao = Math.floor(Math.random() * 16);

        if(imgs_organizadas[posicao] < 0){

            imgs_organizadas[posicao] = imgs[i];
            ids_organizados[posicao] = ids[i]

            contador++;

            if(contador == 2){

                i++;
                contador = 0;

            }

        }
    }

    for (i = 0; i < 16; i++){

        let img_definitiva = document.getElementById(i+1);
        img_definitiva.parentNode.id = ids_organizados[i];
        img_definitiva.src = imgs_organizadas[i];

    }

    jogoDaMemoria();
}