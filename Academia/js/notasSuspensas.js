//Escribo en rojo las notas inferiores a 5
window.onload = notasSupensas;
//Función que añade la clase "rojo" a las celdas que contienen notas inferiores a 5.0
function notasSupensas(){
    for(let i=0;i<document.getElementById("tabla").children[1].children.length;i++){
        for(let j=0;j<document.getElementById("tabla").children[1].children[i].children.length;j++){
            var texto = document.getElementById("tabla").children[1].children[i].children[j].textContent;
            if(texto<5.0){
                document.getElementById("tabla").children[1].children[i].children[j].classList.add("rojo");
            }
        }
    }
}