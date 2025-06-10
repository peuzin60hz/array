let teclado = require(`prompt-sync`)();
    let n: number = parseInt(teclado("Digite o valor de n:"));
    let fatorial: number = 1;
    
for (let i = 1; i <= n; i++) {
      fatorial = fatorial * i
    
}
    
console.log(n + " =", fatorial);