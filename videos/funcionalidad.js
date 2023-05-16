//Documento JavaScript

var mivideo, reproducir, barra, progreso;

function comenzar() {
    mivideo=document.getElementById("mivideo");
    reproducir=document.getElementById("reproducir");
    barra=document.getElementById("barra");
    progreso=document.getElementById("progreso");

    reproducir.addeventListener("click",clickeando, false);
    progreso.addeventListener("click",avance, false);
}

function clickeando(){
    if((mivideo.paused==false) && (mivideo.ended==false)){
        mivideo.paused();                  }
    else {
        mivideo.play();
    }
}

function avance(){

}

window.addEventListener("load", comenzar, false);
