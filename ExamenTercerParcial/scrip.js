/**
 * Esta función verifica si una frase es un palíndromo.
 * Se ejecuta cuando se pulsa el botón del formulario.
 */
function checkPalindrome() {
    // Obtener el valor de la frase desde el cuadro de texto
    var phrase = document.getElementById('phrase').value;

    // Limpiar la frase eliminando espacios y caracteres no alfanuméricos, y convertirla a minúsculas
    var cleanPhrase = phrase.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Invertir la frase limpia
    var reversedPhrase = cleanPhrase.split('').reverse().join('');

    // Verificar si la frase limpia es igual a la frase invertida
    var isPalindrome = cleanPhrase === reversedPhrase;

    // Obtener el elemento de resultado
    var resultElement = document.getElementById('result');

    // Mostrar el mensaje correspondiente y cambiar el color del texto
    if (isPalindrome) {
        resultElement.textContent = `"${phrase}" es un palíndromo.`;
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `"${phrase}" no es un palíndromo.`;
        resultElement.style.color = 'red';
    }
}

/**
 * Esta función verifica si una frase es un palíndromo.
 * @param {string} cadena - La frase a evaluar.
 * @returns {boolean} - True si la frase es un palíndromo, False si no lo es.
 */
function palindromo(cadena) {
    // Convertir a minúsculas y eliminar caracteres no alfanuméricos
    var cadenaOriginal = cadena.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Comparar la cadena con su versión invertida
    var cadenaReversa = cadenaOriginal.split('').reverse().join('');
    return cadenaOriginal === cadenaReversa;
}
