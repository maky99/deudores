

function capturainformacion() {
    let corre = document.getElementById("correo").value;
    let apelli = document.getElementById("apellido").value;
    let nomb = document.getElementById("nombre").value;
    let domi = document.getElementById("domicilio").value;
    let tel = document.getElementById("telefono").value;
    let mensaje = document.getElementById("comentario").value;
    //le digo donde voy a mostrar el msj
    let correcto = true;
    let correito = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let telefonito = /^[0-9]+$/;
    let sale = document.getElementById("muestra");
    sale.innerHTML = "";
    let msj;
    //valido los campos que no esten en blanco 

    if (corre.trim() == "") {
        msj = document.createElement("ol");
        msj.innerHTML = "Completar Correo ";
        sale.appendChild(msj);
        correcto = false;
        corre = document.getElementById("correo").focus();
    } else if (!correito.test(corre)) {
        msj = document.createElement("ol");
        msj.innerHTML = "Correo invalido ";
        sale.appendChild(msj);
        correcto = false;
        corre = document.getElementById("correo").focus();
    }
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
    } else if (!telefonito.test(tel)) {
        msj = document.createElement("ol");
        msj.innerHTML = "Solo numeros en el campo Telefono";
        sale.appendChild(msj);
        correcto = false;
        tel = document.getElementById("telefono").focus();

    }
    if (mensaje == "") {
        msj = document.createElement("ol");
        msj.innerHTML = "Completar Mensaje";
        sale.appendChild(msj);
        correcto = false;
        tel = document.getElementById("comentario").focus();
    }
    if ((!corre == "") & (correito.test(corre)) & (!tel == "") & (telefonito.test(tel)) & (!domi == "") & (!nomb == "") & (!apelli == "") & (!mensaje == "")) {
        msj = document.createElement("ol");
        msj.innerHTML = "";
        sale.appendChild(msj);
        correcto = true;
    }
    if (correcto) {
        msj = document.createElement("ol");
        msj.innerHTML = "Su mensaje fue enviado de la siguiente manera : "
        sale.appendChild(msj);
        //correo
        msj = document.createElement("ol");
        msj.innerHTML = "Correo : " + corre;
        sale.appendChild(msj);

        //apellido
        msj = document.createElement("ol");
        msj.innerHTML = "Apellido : " + apelli;
        sale.appendChild(msj);
        //nombre
        msj = document.createElement("ol");
        msj.innerHTML = "Nombre: " + nomb;
        sale.appendChild(msj);
        //omicilio
        msj = document.createElement("ol");
        msj.innerHTML = "Domicilio : " + domi;
        sale.appendChild(msj);
        //telefono
        msj = document.createElement("ol");
        msj.innerHTML = "Telefono : " + tel;
        sale.appendChild(msj);
        //msj
        msj = document.createElement("ol");
        msj.innerHTML = "Mensaje : " + mensaje;
        sale.appendChild(msj);

        corre = document.getElementById("correo").value = "";
        apelli = document.getElementById("apellido").value = "";
        nomb = document.getElementById("nombre").value = "";
        domi = document.getElementById("domicilio").value = "";
        tel = document.getElementById("telefono").value = "";
        mensaje = document.getElementById("comentario").value="";
        apelli = document.getElementById("correo").focus();
    }
}