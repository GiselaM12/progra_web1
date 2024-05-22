function multi() {
    var num = prompt('Ingresa un número (1-10)', '');
    num = parseInt(num);

    if (num >= 1 && num <= 10) {
        var tabla = "<div id='tabla-container'><h2>Tabla de Multiplicar del " + num + "</h2>";

        for (var x = 1; x <= 10; x++) {
            var resultado = num * x;
            tabla += "<p>" + num + " x " + x + " = " + resultado + "</p>";
        }

        tabla += "</div>";

        document.body.innerHTML += tabla;
    } else {
        alert("Por favor, ingresa un número válido del 1 al 10.");
    }
}
