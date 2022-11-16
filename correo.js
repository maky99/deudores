

function capturainformacion() {
    let apelli = document.getElementById("apellido").value;
    let nomb = document.getElementById("nombre").value;
    let domi = document.getElementById("domicilio").value;
    let tel = document.getElementById("telefono").value;
    //le digo donde voy a mostrar el msj
    let correcto = true;
    let sale = document.getElementById("muestra");
    let msj = "";
    //valido los campos que no esten en blanco 
    if (apelli.trim() == "") {
        msj = document.createElement("ol");
        sale.innerHTML = "Campo apellido vacio ";
        sale.appendChild(msj);
        correcto = false;
        apelli = document.getElementById("apellido").focus();
    } else if (nomb.trim() == "") {
        msj = document.createElement("ol");
        sale.innerHTML = "Campo nombre Vacio";
        sale.appendChild(msj);
        correcto = false;
        nomb = document.getElementById("nombre").focus();
    } else if (domi.trim() == "") {
        msj = document.createElement("ol");
        sale.innerHTML = "Campo domicilio vacio ";
        sale.appendChild(msj);
        correcto = false;
        domi = document.getElementById("domicilio").focus();
    } else if (tel.trim() == "") {
        msj = document.createElement("ol");
        sale.innerHTML = "Campo tel vacio";
        sale.appendChild(msj);
        correcto = false;
        tel = document.getElementById("telefono").focus();
    } else {
        msj = document.createElement("ol");
        sale.innerHTML = "";
        sale.appendChild(msj);
        correcto = true;
    }

    if (correcto) {
        alert("Mensaje Enviado");
        console.log( apelli + " " + nombre + " " + domi + " "+ tel);
        apelli = document.getElementById("apellido").value="";
        nomb = document.getElementById("nombre").value="";
        domi = document.getElementById("domicilio").value="";
        tel = document.getElementById("telefono").value="";
        apelli = document.getElementById("apellido").focus();

    }
    else {
        alert("Revise la informacion")
    }
}