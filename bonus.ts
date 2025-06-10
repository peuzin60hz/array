let teclado = require(`prompt-sync`)();
let numeros: number [] = []
let temporario: number = 0;

for (let x = 0; x <= 9; x++){
    numeros[x] = parseInt(teclado(`Digite o número do indice ${x} do Array:`));
}

for (let z = 0; z < 10; z++){
    
    for (let y = z + 1; y < 10; y++) {
      if (numeros[z] < numeros[y]) {
          temporario = numeros[z];
          numeros[z] = numeros[y];
          numeros[y] = temporario;
        }
    }
}
console.log(numeros)