// DOM
const galeria = document.querySelectorAll('.galeria img');
const overlay = document.querySelector('.overlay');
const imgActual = document.querySelector('.imgactual');
const btnPrev = document.querySelector('.prev');
const btnSig = document.querySelector('.sig');

let imagenActual = 0;

btnPrev.addEventListener('click', () => mostrarImagen(imagenActual - 1));
btnSig.addEventListener('click', () => mostrarImagen(imagenActual + 1));

galeria.forEach((imagen, indice) => {
    imagen.addEventListener('click', function() {
        imagenActual = indice;
        overlay.style.display = "flex";
        mostrarImagen(indice)
    })
})

function mostrarImagen(indiceImg) {
    if (indiceImg < 0) {
        indiceImg = galeria.length - 1;
    } else if (indiceImg >= galeria.length) {
        indiceImg = 0;
    }

    imagenActual = indiceImg;
    
    imgActual.src = galeria[indiceImg].src;
}

document.addEventListener('keydown', (event) => {
    let key = event.key;
    if (key == "Escape") {
        overlay.style.display = "none";
    }
})