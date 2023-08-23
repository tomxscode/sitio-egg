const navbar = document.getElementById('navegacion');
const btnAbrir = document.getElementById('abrirNav');
const btnCerrar = document.getElementById('cerrarNav');

document.addEventListener("DOMContentLoaded", function () {
    btnAbrir.addEventListener('click', function () {
        navbar.style.display = "grid";
        btnAbrir.style.display = "none";
        btnCerrar.style.display = "block";
    })

    btnCerrar.addEventListener("click", function () {
        navbar.style.display = "none";
        btnAbrir.style.display = "block";
        btnCerrar.style.display = "none";
    })
})

window.addEventListener('resize', function () {
    let anchura = this.document.documentElement.clientWidth;
    if (anchura > 767) {
        navbar.style.display = "flex";
        btnCerrar.style.display = "none";
        btnAbrir.style.display = "none";
    } else {
        btnCerrar.style.display = "none";
        btnAbrir.style.display = "block";
        navbar.style.display = "none";
    }
})