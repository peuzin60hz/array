var teclado = require("prompt-sync")();
var meuArray = [];
var maior = 0;
for (var cont = 0; cont <= 9; cont++) {
    meuArray[cont] = parseInt(teclado("Digite o ".concat(cont + 1, "\u00B0: ")));
}
for (var x = 0; x < 10; x++) {
    if (meuArray[x] > maior) {
        maior = meuArray[x];
    }
}
console.log(maior);
console.log("|-----------------------------------------------|");
console.log("|---------------------fim-----------------------|");
console.log("|-----------------------------------------------|");
