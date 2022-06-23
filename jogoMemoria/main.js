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
        <div>
            <img src="/assets/${img}">
            <img src="/assets/barbie-logo.svg">
        <div>
        `;
});

cardBoard.innerHTML = cardHTML;