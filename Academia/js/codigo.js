window.onload = iniciar;

function iniciar(){
    //Comprobamos si anteriormente se ha modificado el modo
    var modo=sessionStorage.getItem("modo");
    if(modo!=null){
        document.getElementById("modo").value = modo;
        cambiarModo();
    }
    //Añadimos el evento "click" al input de cambiar modo
    document.getElementById("modo").addEventListener("click",cambiarModo);
    //Mostramos la fecha actual en la parte superior derecha
    obtenerHora();
}

//Función para escribir la fecha
function obtenerHora(){
    var fecha = new Date();
    document.getElementsByTagName("time")[0].setAttribute("datetime",fecha);
    //Se mostrará de la forma:
    //Jueves, 19 Diciembre de 2019 14:03
    var dias = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
    var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    var diaSemana = dias[fecha.getDay()-1];
    var diaMes = fecha.getDate();
    var mes = meses[fecha.getMonth()];
    var anyo = fecha.getFullYear();
    var hora = fecha.getHours();
    var minuto = fecha.getMinutes();
    var cadena = diaSemana+", "+diaMes+" "+mes+" de "+anyo+" "+hora+":"+minuto;
    document.getElementsByTagName("time")[0].innerHTML = cadena;
}

//Función para activar o desactivar el modo nocturno
function cambiarModo() {
    var modo = document.getElementById("modo").value;
    if (modo == 1) {
        sessionStorage.setItem("modo","1");
        document.body.style.background = "black";
        document.body.style.color = "white";
        document.getElementById("usuarios").src = "./img/usuarios2.png";
        document.getElementById("pie").style.background = "grey";
    } else if(modo==0){
        sessionStorage.setItem("modo","0");
        document.body.style.background = "#b9e6a8";
        document.body.style.color = "black";
        if(document.getElementById("usuarios")!=null){
            document.getElementById("usuarios").src = "./img/usuarios.png";
        }
        document.getElementById("pie").style.background = "white";
    }
}