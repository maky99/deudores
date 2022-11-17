let pattern = /^[0-9]+$/;
function capturainformacion() {
    var apelli = document.getElementById("apellido").value;
    var nomb = document.getElementById("nombre").value;
    var domi = document.getElementById("domicilio").value;
    var loca = document.getElementById("localidad").value;
    var prov = document.getElementById("provincia").value;
    var dni = document.getElementById("tipodni").value;
    var numdni = document.getElementById("numero").value;
    var cui = document.getElementById("cuil").value;
    var gene = document.getElementById("genero").value;
    var prof = document.getElementById("profesion").value;
    let correcto = true;
    if (apelli == "") {
        alert("Completar Apellido");
        document.getElementById("apellido").focus();
        correcto = false;
    }
    if (nomb == "") {
        alert("Completar Nombre");
        document.getElementById("nombre").focus();
        correcto = false;
    }
    if (domi == "") {
        alert("Completar Domicilio");
        document.getElementById("domicilio").focus();
        correcto = false;
    }
    if (loca == "") {
        alert("Completar Localidad");
        document.getElementById("localidad").focus();
        correcto = false;
    }
    if (prov == "") {
        alert("Completar provincia");
        document.getElementById("provincia").focus();
        correcto = false;
    }
    if (numdni == "") {
        alert("Completar Número de Dni");
        document.getElementById("numero").focus();
        correcto = false;
    }
    let resul = pattern.test(cui);

    if (resul) {
        if (verifyCuit(cui)) {
        } else {
            alert("Completar");
            document.getElementById("cuil").focus();
            cui = document.getElementById("cuil").value;
            alert("esto no es un CUIT el formato correcto es XX00000000X")
            correcto = false;
        }

    } else {
        correcto = false;
        alert("esto no es un CUIT el formato correcto es XX11111111X")
    }

    if (gene == "") {
        alert("Completar Genero");
        document.getElementById("genero").focus();
        correcto = false;
    }
    if (prof == "") {
        alert("Completar Profesión");
        document.getElementById("profesion").focus();
        correcto = false;
    }
    if ((!prof == "") & (!gene == "") & (verifyCuit(cui)) & (!numdni == "") & (!prov == "") & (!loca == "") & (!domi == "") & (!nomb == "") & (!apelli == "")) {
        correcto = true;
    }
    if (correcto) {
        console.log(apelli + " " + nomb);//aca muestro en la consola
        console.log(domi + " Loca " + loca + " Prov " + prov);
        console.log(dni + " Numero " + numdni + " Cuil " + cui);
        console.log(gene + " Profe " + prof);
        alert("Se cargo con exito");
        alert("Continuar llenando el siguiente formulario");
        //vacio los campos
        document.getElementById("apellido").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("domicilio").value = "";
        document.getElementById("localidad").value = "";
        document.getElementById("provincia").value = "";
        document.getElementById("numero").value = "";
        document.getElementById("cuil").value = "";
        document.getElementById("genero").value = "";
        document.getElementById("profesion").value = "";
        //vuelvo a hacer foco en pellido
        document.getElementById("apellido").focus();
        ocultar();
    }


}

function verifyCuit(cuit) {

    if (cuit.length !== 11) {
        return false;
    }

    let acumulado = 0;
    let digitos = cuit.split('');
    let digito = parseInt(digitos.pop());

    for (let i = 0; i < digitos.length; i++) {
        acumulado += digitos[9 - i] * (2 + (i % 6));
    }

    let verif = 11 - (acumulado % 11);
    if (verif === 11) {
        verif = 0;
    } else if (verif === 10) {
        verif = 9;
    }

    return digito === verif;
}

function capturaInformacionf2() {
    var f2apelli = document.getElementById("f2apellido").value;
    var f2nomb = document.getElementById("f2nombre").value;
    var f2dni = document.getElementById("f2tipodni").value;
    var f2numdni = document.getElementById("f2numero").value;
    var f2cui = document.getElementById("f2cuil").value;
    var f2domi = document.getElementById("f2domicilio").value;
    var f2loca = document.getElementById("f2localidad").value;
    var f2prov = document.getElementById("f2provincia").value;
    var f2nacio = document.getElementById("f2nacionalidad").value;
    var f2fechnaci = document.getElementById("f2fechanacimiento").value;
    var f2gene = document.getElementById("f2genero").value;
    var f2prof = document.getElementById("f2profesion").value;
    var tomo = document.getElementById("solsdadai").value;
    let correcto = true;
    if (f2apelli == "") {
        alert("Completar Apellido");
        document.getElementById("f2apellido").focus();
        correcto = false;
    }
    if (f2nomb == "") {
        alert("Completar Nombre");
        document.getElementById("f2nombre").focus();
        correcto = false;
    }
    if (f2numdni == "") {
        alert("Completar Número de Dni");
        document.getElementById("f2numero").focus();
        correcto = false;
    }

    let resul = pattern.test(f2cui);

    if (resul) {
        if (verifyCuit(f2cui)) {
        } else {
            alert("Completar");
            document.getElementById("f2cuil").focus();
            f2cui = document.getElementById("f2cuil").value;
            alert("esto no es un CUIT el formato correcto es XX00000000X")
            correcto = false;
        }

    } else {
        correcto = false;
        alert("esto no es un CUIT el formato correcto es XX11111111X")
    }

    if (f2domi == "") {
        alert("Completar Domicilio");
        document.getElementById("f2domicilio").focus();
        correcto = false;
    }
    if (f2loca == "") {
        alert("Completar Localidad");
        document.getElementById("f2localidad").focus();
        correcto = false;
    }
    if (f2prov == "") {
        alert("Completar provincia");
        document.getElementById("f2provincia").focus();
        correcto = false;
    }
    if (f2nacio == "") {
        alert("Completar Nacionalidad");
        document.getElementById("f2nacionalidad").focus();
        correcto = false;
    }
    if (f2fechnaci == "") {
        alert("Completar Fecha de Nacimiento");
        document.getElementById("f2fechanacimiento").focus();
        correcto = false;
    }
    if (f2gene == "") {
        alert("Completar Genero");
        document.getElementById("f2genero").focus();
        correcto = false;
    }
    if (f2prof == "") {
        alert("Completar Profesión");
        document.getElementById("f2profesion").focus();
        correcto = false;
    }
    if (correcto) {
        console.log(f2apelli + " " + f2nomb);//aca muestro en la consola
        console.log(f2dni + " Numero " + f2numdni + " Cuil " + f2cui);
        console.log(f2domi + " Loca " + f2loca + " Prov " + f2prov);
        console.log(f2nacio + "Fecha de nac " + f2fechnaci);
        console.log(f2gene + " Profe " + f2prof + "");
        console.log(tomo)
        alert("Cargdo con exito")
        //vacio los campos
        document.getElementById("f2apellido").value = "";
        document.getElementById("f2nombre").value = "";
        document.getElementById("f2tipodni").value = "";
        document.getElementById("f2numero").value = "";
        document.getElementById("f2cuil").value = "";
        document.getElementById("f2domicilio").value = "";
        document.getElementById("f2localidad").value = "";
        document.getElementById("f2provincia").value = "";
        document.getElementById("f2nacionalidad").value = "";
        document.getElementById("f2fechanacimiento").value = "";
        document.getElementById("f2genero").value = "";
        document.getElementById("f2profesion").value = "";

        //vuelvo a hacer foco en pellido
        document.getElementById("f2apellido").focus();
        window.location.href="index.html";
    }


}


function tomavalor() {
    var tomo = document.getElementById("titra").value;//aca tomo lo que selecciona el de opciones
    //document.getElementById("formu1").innerHTML="puto salio? " + tomo;
    if (tomo == "empresa" || tomo == "tercero" || tomo == "organismoPublico") {
        mostrar();

    }
    if (tomo == "particular") {
        ocultar();

    }
}
function mostrar() {
    alert("Completar Formulario con datos de quien Solicita");
    document.getElementById("formu1").style.display = "block";
}
function ocultar() {
    document.getElementById("formu1").style.display = "none";
}


