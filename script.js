function visa() {
    var ruta = document.getElementsByClassName("overlay")[0];
    ruta.style.display = "grid";
    ruta.style.animation = "fade-in 0.5s linear";
    ruta.style.top = "0vh"  
}

function tillbaka() {
    var ruta = document.getElementsByClassName("overlay")[0];
    ruta.style.display = "none";
    ruta.style.animation = "fade-out 0.5s linear";
    ruta.style.transition = "all 1s"
}