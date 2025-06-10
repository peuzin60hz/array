var teclado = require("prompt-sync")();
var n = parseInt(teclado("Digite o valor de n:"));
var fatorial = 1;
for (var i = 1; i <= n; i++) {
    fatorial = fatorial * i;
}
console.log(n + " =", fatorial);
