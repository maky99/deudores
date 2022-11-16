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
    let pepe="salir";
    if (apelli == "") {
        alert("Completar Apellido");
        document.getElementById("apellido").focus();
    } else if (nomb == "") {
        alert("Completar Nombre");
        document.getElementById("nombre").focus();
    } else if (domi == "") {
        alert("Completar Domicilio");
        document.getElementById("domicilio").focus();
    } else if (loca == "") {
        alert("Completar Localidad");
        document.getElementById("localidad").focus();
    } else if (prov == "") {
        alert("Completar provincia");
        document.getElementById("provincia").focus();
    } else if (numdni == "") {
        alert("Completar Número de Dni");
        document.getElementById("numero").focus();
    }
    
    
    let resul=pattern.test(cui);
    if (resul) {
         if (verifyCuit(cui)) {
            alert("bien entro ak");
            }else{
            alert("Completar");
            document.getElementById("cuil").focus();
            cui = document.getElementById("cuil").value;
        }    
        
    }    else {
        alert("esto no es un CUIT el formato correcto es XXXXXXXXXXX")
    }
    
    if (gene == "") {
        alert("Completar Genero");
        document.getElementById("genero").focus();
    } else if (prof == "") {
        alert("Completar Profesión");
        document.getElementById("profesion").focus();
    } else {
        console.log(apelli + " " + nomb);//aca muestro en la consola
        console.log(domi + " Loca " + loca + " Prov " + prov);
        console.log(dni + " Numero " + numdni + " Cuil " + cui);
        console.log(gene + " Profe " + prof);
        alert("Cargdo con exito")
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
    }
}
function verifyCuit(cuit){
    
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
    if (f2apelli == "") {
        alert("Completar Apellido");
        document.getElementById("f2apellido").focus();
    } else if (f2nomb == "") {
        alert("Completar Nombre");
        document.getElementById("f2nombre").focus();
    } else if (f2numdni == "") {
        alert("Completar Número de Dni");
        document.getElementById("f2numero").focus();
    } else if (f2cui == "") {
        alert("Completar Número de Cuil");
        document.getElementById("f2cuil").focus();
    } else if (f2domi == "") {
        alert("Completar Domicilio");
        document.getElementById("f2domicilio").focus();
    } else if (f2loca == "") {
        alert("Completar Localidad");
        document.getElementById("f2localidad").focus();
    } else if (f2prov == "") {
        alert("Completar provincia");
        document.getElementById("f2provincia").focus();
    } else if (f2nacio == "") {
        alert("Completar Nacionalidad");
        document.getElementById("f2nacionalidad").focus();
    } else if (f2fechnaci == "") {
        alert("Completar Fecha de Nacimiento");
        document.getElementById("f2fechanacimiento").focus();
    } else if (f2gene == "") {
        alert("Completar Genero");
        document.getElementById("f2genero").focus();
    } else if (f2prof == "") {
        alert("Completar Profesión");
        document.getElementById("f2profesion").focus();
    } else {
        console.log(f2apelli + " " + f2nomb);//aca muestro en la consola
        console.log(f2dni + " Numero " + f2numdni + " Cuil " + f2cui);
        console.log(f2domi + " Loca " + f2loca + " Prov " + f2prov);
        console.log(f2nacio + "Fecha de nac " + f2fechnaci);
        console.log(f2gene + " Profe " + f2prof + "");
        alert("Cargdo con exito")
        //vacio los campos
        document.getElementById("f2apellido").value ="";
        document.getElementById("f2nombre").value ="";
        document.getElementById("f2tipodni").value ="";
        document.getElementById("f2numero").value ="";
        document.getElementById("f2cuil").value ="";
        document.getElementById("f2domicilio").value ="";
        document.getElementById("f2localidad").value ="";
        document.getElementById("f2provincia").value ="";
        document.getElementById("f2nacionalidad").value ="";
        document.getElementById("f2fechanacimiento").value ="";
        document.getElementById("f2genero").value ="";
        document.getElementById("f2profesion").value ="";

        //vuelvo a hacer foco en pellido
        document.getElementById("f2apellido").focus();
    }
    
      
}


function tomavalor() {
    var tomo = document.getElementById("titra").value;//aca tomo lo que selecciona el de opciones
    //document.getElementById("formu1").innerHTML="puto salio? " + tomo;
    if (tomo == "empresa" || tomo =="tercero" || tomo=="organismoPublico") {
        mostrar();

    } 
    if (tomo=="particular") {
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


