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
    let sale = document.getElementById("muestra");
    sale.innerHTML = "";
    let msj;
    if (apelli == "") {
        msj = document.createElement("ol");
        msj.innerHTML = "Completar Apellido ";
        sale.appendChild(msj);
        document.getElementById("apellido").focus();
        correcto = false;
    }
    if (nomb == "") {
        msj = document.createElement("ol");
        msj.innerHTML = "Completar Nombre ";
        sale.appendChild(msj);
        document.getElementById("nombre").focus();
        correcto = false;
    }
    if (domi == "") {
        msj = document.createElement("ol");
        msj.innerHTML = "Completar Domicilo ";
        sale.appendChild(msj);
        document.getElementById("domicilio").focus();
        correcto = false;
    }
    if (loca == "") {
        msj = document.createElement("ol");
        msj.innerHTML = "Completar Localidad ";
        sale.appendChild(msj);
        document.getElementById("localidad").focus();
        correcto = false;
    }
    if (prov == "") {
        msj = document.createElement("ol");
        msj.innerHTML = "Completar provincia";
        sale.appendChild(msj);
        document.getElementById("provincia").focus();
        correcto = false;
    }
    if (dni == "") {
        msj = document.createElement("ol");
        msj.innerHTML = "Completar Número de Dni";
        sale.appendChild(msj);
        document.getElementById("numero").focus();
        correcto = false;
    }
    let resul = pattern.test(cui);

    if (resul) {
        if (verifyCuit(cui)) {
        } else {
            msj = document.createElement("ol");
            msj.innerHTML = "Falta completar Cuil";
            sale.appendChild(msj);
            document.getElementById("cuil").focus();
            cui = document.getElementById("cuil").value;
            alert("esto no es un CUIL el formato correcto es XX00000000X")
            correcto = false;
        }
    } else {
        correcto = false;
        msj = document.createElement("ol");
        msj.innerHTML = "Formato correcto de  CUIT es XX11111111X";
        sale.appendChild(msj);
    }

    if (gene == "") {
        msj = document.createElement("ol");
        msj.innerHTML = "Completar Genero";
        sale.appendChild(msj);
        document.getElementById("genero").focus();
        correcto = false;
    }
    if ((prof == "") & (apelli == "")) {
        msj = document.createElement("ol");
        msj.innerHTML = "Completar Profesión";
        sale.appendChild(msj);
        document.getElementById("apellido").focus();
        correcto = false;
    } else{
        document.getElementById("profesion").focus();
    }
    if ((!prof == "") & (!gene == "") & (verifyCuit(cui)) & (!numdni == "") & (!prov == "") & (!loca == "") & (!domi == "") & (!nomb == "") & (!apelli == "")) {
        correcto = true;
    }
    if (correcto) {
        msj = document.createElement("ol");
        msj.innerHTML = "Su Formulario tiene la siguiente informacion : "
        sale.appendChild(msj);
        //apellido
        msj = document.createElement("ol");
        msj.innerHTML = "Apellido : " + apelli;
        sale.appendChild(msj);
        //nombre
        msj = document.createElement("ol");
        msj.innerHTML = "Nombre : " + nomb;
        sale.appendChild(msj);
        //domicilio
        msj = document.createElement("ol");
        msj.innerHTML = "Domicilo : " + domi;
        sale.appendChild(msj);
        //localidad
        msj = document.createElement("ol");
        msj.innerHTML = "Localidad :" + loca;
        sale.appendChild(msj);
        //provincia
        msj = document.createElement("ol");
        msj.innerHTML = "Provincia : " + prov;
        sale.appendChild(msj);
        //dni
        msj = document.createElement("ol");
        msj.innerHTML = "Dni :" + dni;
        sale.appendChild(msj);
        //cuil
        msj = document.createElement("ol");
        msj.innerHTML = "Cuil :" + cui;
        sale.appendChild(msj);
        //genero
        msj = document.createElement("ol");
        msj.innerHTML = "Genero : " + gene;
        sale.appendChild(msj);
        //profe
        msj = document.createElement("ol");
        msj.innerHTML = "Profesión : " + prof;
        sale.appendChild(msj);
        //mensaje
        msj = document.createElement("ol");
        msj.innerHTML = "Complete el Siguiente Formulario : "
        sale.appendChild(msj);
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
    let sale = document.getElementById("muestra2");
    sale.innerHTML = "";
    let msj;
    if (f2apelli == "") {
        msj = document.createElement("ol");
        msj.innerHTML = "Completar Apellido ";
        sale.appendChild(msj);
        document.getElementById("f2apellido").focus();
        correcto = false;
    }
    if (f2nomb == "") {
        msj = document.createElement("ol");
        msj.innerHTML = "Completar Nombre ";
        sale.appendChild(msj);
        document.getElementById("f2nombre").focus();
        correcto = false;
    }
    if (f2numdni == "") {
        msj = document.createElement("ol");
        msj.innerHTML = "Completar Numero de DNI ";
        sale.appendChild(msj);
        document.getElementById("f2numero").focus();
        correcto = false;
    }

    let resul = pattern.test(f2cui);

    if (resul) {
        if (verifyCuit(f2cui)) {
        } else {
            msj = document.createElement("ol");
            msj.innerHTML = "Falta completar Cuil";
            sale.appendChild(msj);
            document.getElementById("f2cuil").focus();
            f2cui = document.getElementById("f2cuil").value;
            alert("esto no es un CUIT el formato correcto es XX00000000X")
            correcto = false;
        }
    } else {
        correcto = false;
        msj = document.createElement("ol");
        msj.innerHTML = "Formato correcto de  CUIT es XX11111111X";
        sale.appendChild(msj);
    }

    if (f2domi == "") {
        msj = document.createElement("ol");
        msj.innerHTML = "Completar Domicilio ";
        sale.appendChild(msj);
        document.getElementById("f2domicilio").focus();
        correcto = false;
    }
    if (f2loca == "") {
        msj = document.createElement("ol");
        msj.innerHTML = "Completar Localidad ";
        sale.appendChild(msj);
        document.getElementById("f2localidad").focus();
        correcto = false;
    }
    if (f2prov == "") {
        msj = document.createElement("ol");
        msj.innerHTML = "Completar Provincia ";
        sale.appendChild(msj);
        document.getElementById("f2provincia").focus();
        correcto = false;
    }
    if (f2nacio == "") {
        msj = document.createElement("ol");
        msj.innerHTML = "Completar Nacionalidad ";
        sale.appendChild(msj);
        document.getElementById("f2nacionalidad").focus();
        correcto = false;
    }
    if (f2fechnaci == "") {
        msj = document.createElement("ol");
        msj.innerHTML = "Completar Fecha de Nacimiento ";
        sale.appendChild(msj);
        document.getElementById("f2fechanacimiento").focus();
        correcto = false;
    }
    if (f2gene == "") {
        msj = document.createElement("ol");
        msj.innerHTML = "Completar Genero ";
        sale.appendChild(msj);
        document.getElementById("f2genero").focus();
        correcto = false;
    }
    if (f2prof == "") {
        msj = document.createElement("ol");
        msj.innerHTML = "Completar Profesión ";
        sale.appendChild(msj);
        document.getElementById("f2profesion").focus();
        correcto = false;
    }
    if ((!f2apelli == "") & (!f2nomb == "") & (verifyCuit(cui)) & (!f2numdni == "") & (!f2domi == "") & (!f2prof == "") & (!f2gene == "") & (!f2fechnaci == "") & (!f2nacio == "") & (!f2prov == "") & (!f2loca == "")) {
        correcto = true;
    }
    if (correcto) {
        msj = document.createElement("ol");
        msj.innerHTML = "Su Formulario tiene la siguiente informacion : "
        sale.appendChild(msj);
        //apellido
        msj = document.createElement("ol");
        msj.innerHTML = "Apellido :" + f2apelli;
        sale.appendChild(msj);
        //nombre
        msj = document.createElement("ol");
        msj.innerHTML = "Nombre :" + f2nomb;
        sale.appendChild(msj);
        //dni
        msj = document.createElement("ol");
        msj.innerHTML = "DNI : " + f2numdni;
        sale.appendChild(msj);
        //cuil
        msj = document.createElement("ol");
        msj.innerHTML = "Cuil : " + f2cui;
        sale.appendChild(msj);
        //domi
        msj = document.createElement("ol");
        msj.innerHTML = "Domicilio :"+f2domi;
        sale.appendChild(msj);
        //Loca
        msj = document.createElement("ol");
        msj.innerHTML = "Localidad :"+f2loca;
        sale.appendChild(msj);
        //prov
        msj = document.createElement("ol");
        msj.innerHTML = "Provincia : "+f2prov;
        sale.appendChild(msj);
        //nacio
        msj = document.createElement("ol");
        msj.innerHTML = "Nacionalidad : "+f2nacio;
        sale.appendChild(msj);
        //naci
        msj = document.createElement("ol");
        msj.innerHTML = "Fecha de Nacimiento : "+f2nacio;
        sale.appendChild(msj);
        //gene
        msj = document.createElement("ol");
        msj.innerHTML = "Genero : "+f2gene;
        sale.appendChild(msj);
        //prof
        msj = document.createElement("ol");
        msj.innerHTML = "Profesión : "+f2prof;
        sale.appendChild(msj);
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


