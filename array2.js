var teclado = require('prompt-sync')();
var resultados = new Array(10);
for (var i = 0; i < 10; i++) {
    var num1 = parseFloat(teclado("Digite o primeiro n\u00FAmero: "));
    var num2 = parseFloat(teclado("Digite o segundo n\u00FAmero: "));
    resultados[i] = num1 * num2;
}
var j = 0;
console.log("Resultados das multiplica\u00E7\u00F5es: ");
do {
    console.log("Resultado ".concat(j + 1, ": ").concat(resultados[j]));
    j++;
} while (j < 10);
