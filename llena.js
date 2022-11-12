//dom
const imagenes = document.querySelector(".imagenes");
const Todasimgenes = document.querySelectorAll(".imagen");
const avaBtn = document.querySelector(".ava");
const retroBtn = document.querySelector(".retro");
avaBtn.addEventListener("click",sigu)
retroBtn.addEventListener("click", previa)
let indice = 0;
let intervalo = setInterval(inicioIntervalo, 2000);
function inicioIntervalo() {
    indice++
    moverCarrusel();
}
function reste() {
    clearInterval(intervalo)
    intervalo=setInterval(inicioIntervalo,5000)
}
function moverCarrusel() {

    if (indice >Todasimgenes.length-1) {
        indice = 0
    } else if (indice < 0) {
        indice = Todasimgenes.length - 1
    }    
    imagenes.style.transform = `translateX(-${indice * 400}px)`    
}
function previa() {
    indice --
    reste()
    moverCarrusel()
}
function sigu() {
    indice++
    reste()
    moverCarrusel()
}