function evalua() {
    var cadena = document.getElementById('cadena').value;
    var resultado = document.getElementById('parrafo');
    if (cadena === cadena.toUpperCase()) {
        resultado.textContent = 'Los caracteres '+ cadena+' contiene solo mayúsculas.';
    } else if (cadena === cadena.toLowerCase()) {
        resultado.textContent = 'Los caracteres '+ cadena+' contiene solo minúsculas.';
    } else {
        resultado.textContent = 'Los caracteres '+ cadena+' contiene mayúsculas y minúsculas.';
    }
}

