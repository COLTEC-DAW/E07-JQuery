var verso ="./img/coltec.png";
let imagens=['./img/virginia.jpeg', './img/joao.jpg', './img/virginia.jpeg', './img/joao.jpg'];
let cliquetravado=false;
let cartavirado=false;
let posicaovirada=-1;
let pontos=0;
onload=()=>{
    let elementos= document.querySelectorAll('#baralho img');
    elementos.forEach((img, i)=>{
        img.src= verso;
    });
    document.querySelector('#btInicio').onclick = iniciaJogo;
};

const iniciaJogo=()=>{
    cliquetravado=false;
    cartavirado=false;
    posicaovirada=-1;
    pontos=0;

    //embaralha
    for (let i = 0; i < imagens.length; i++) {
        let p= Math.floor(Math.random()*imagens.length);
        let aux= imagens[p];
        imagens[p]=imagens[i];
        imagens[i]=aux;
    }

    let elementos= document.querySelectorAll('#baralho img');
    elementos.forEach((img, i)=>{
        img.onclick= viraImagem;
        img.src=verso;
    });

}

const viraImagem=(e)=>{
    if(cliquetravado) return;
    let p=e.target.getAttribute('id');
    e.target.src=imagens[p];
    e.target.onclick=null;
    
    if(!cartavirado){
        cartavirado=true;
        posicaovirada=p;
    }else{
        if(imagens[p]==imagens[posicaovirada]){
            pontos++;
        }else{
            let aux= posicaovirada;
            cliquetravado=true;
            setTimeout(()=>{
                e.target.src=verso;
                e.target.onclick= viraImagem;
                let img= document.getElementById(aux)
                img.src=verso;
                img.onclick=viraImagem;
                cliquetravado=false;
            },2500) 
        }
        cartavirado=false;
        posicaovirada=-1;
    }
    
};