function genera_rfc() {
    var nombre = document.getElementById("nombre").value;
    var apellidoPaterno = document.getElementById("ap").value;
    var apellidoMaterno = document.getElementById("am").value;
    var anio = document.getElementById("anio").value;
    var mes = document.getElementById("mes").value;
    var dia = document.getElementById("dia").value;

    if (nombre === "" || apellidoPaterno === "" || apellidoMaterno === "" || anio === "" || mes === "" || dia === "") {
        alert("Por favor completa todos los campos.");
        return false; // Devolver false para evitar que el formulario se envíe
    }

    var fechaNacimiento = new Date(anio, mes - 1, dia);

    var rfc = generarRFCInternal(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento);

    document.getElementById("resultado").value = rfc;

    return true; // Devolver true para permitir que el formulario se envíe
}

function generarRFCInternal(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento) {
    nombre = nombre.toUpperCase();
    apellidoPaterno = apellidoPaterno.toUpperCase();
    apellidoMaterno = apellidoMaterno.toUpperCase();

    var rfc = apellidoPaterno.slice(0, 2) +
            apellidoMaterno.charAt(0) +
            nombre.charAt(0) +
            fechaNacimiento.getFullYear().toString().slice(-2) +
            ('0' + (fechaNacimiento.getMonth() + 1)).slice(-2) +
            ('0' + fechaNacimiento.getDate()).slice(-2);

    return rfc;
}
