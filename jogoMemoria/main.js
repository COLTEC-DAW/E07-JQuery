const cardBoard = document.querySelector("#cardboard");

const images = [
    'castelo de diamante.jpg',
    'lago dos cisnes.jpg',
    'magia dos aladus.png',
    'princesa e a plebeia.jpg',
    'quebra nozes.jpg',
    'rapunzel.jpg',
    'segredo das fadas.jpg',
    'tres mosqueteiras.jpg'  
];



let cardHTML = "";

images.forEach(img =>{
    cardHTML += `
        <div class = "memory-card">
            <img class = "front-face" src = "/assets/${img}">
            <img class = "back-face" src = "/assets/backCarta.png">
        <div>
        `;
});

cardBoard.innerHTML = cardHTML + cardHTML;