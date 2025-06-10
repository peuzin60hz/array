let teclado = require('prompt-sync')();

let resultados = new Array(10);

for (let i = 0; i < 10; i++) {
    let num1 = parseFloat(teclado(`Digite o primeiro número: `));
    let num2 = parseFloat(teclado(`Digite o segundo número: `));

    resultados[i] = num1 * num2;
}

let j = 0;
console.log(`Resultados das multiplicações: `);
do {
    console.log(`Resultado ${j + 1}: ${resultados[j]}`);
    j++;
} while (j < 10);