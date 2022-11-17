

function capturainformacion() {
    let apelli = document.getElementById("apellido").value;
    let nomb = document.getElementById("nombre").value;
    let domi = document.getElementById("domicilio").value;
    let tel = document.getElementById("telefono").value;
    let mensaje= document.getElementById("comentario").value;
    //le digo donde voy a mostrar el msj
    let correcto = true;
    let sale = document.getElementById("muestra");
    sale.innerHTML = "";
    let msj;
    //valido los campos que no esten en blanco 
    if (apelli.trim() == "") {
        msj = document.createElement("ol");
        msj.innerHTML = "Completar Apellido ";
        sale.appendChild(msj);
        correcto = false;
        apelli = document.getElementById("apellido").focus();
    }
    if (nomb.trim() == "") {
        msj = document.createElement("ol");
        msj.innerHTML = "Completar Nombre";
        sale.appendChild(msj);
        correcto = false;
        nomb = document.getElementById("nombre").focus();
    }
    if (domi.trim() == "") {
        msj = document.createElement("ol");
        msj.innerHTML = "Completar Domicilio ";
        sale.appendChild(msj);
        correcto = false;
        domi = document.getElementById("domicilio").focus();
    }
    if (tel.trim() == "") {
        msj = document.createElement("ol");
        msj.innerHTML = "Completar Telefono";
        sale.appendChild(msj);
        correcto = false;
        tel = document.getElementById("telefono").focus();
    }
    if (mensaje=="") {
        msj = document.createElement("ol");
        msj.innerHTML = "Completar Mensaje";
        sale.appendChild(msj);
        correcto = false;
        tel = document.getElementById("comentario").focus();
       
    }
    if ((!tel == "") & (!domi == "") & (!nomb == "") & (!apelli == "")&(!mensaje=="")) {
        msj = document.createElement("ol");
        msj.innerHTML = "";
        sale.appendChild(msj);
        correcto = true;
    }
    if (correcto) {
        alert("Mensaje Enviado");
        console.log(apelli + " " + nomb);
        console.log(domi + " " + tel);
        apelli = document.getElementById("apellido").value = "";
        nomb = document.getElementById("nombre").value = "";
        domi = document.getElementById("domicilio").value = "";
        tel = document.getElementById("telefono").value = "";
        apelli = document.getElementById("apellido").focus();
        window.location.href="index.html";

    }
    else {
        alert("Revise la informacion")
    }
}