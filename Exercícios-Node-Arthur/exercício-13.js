const readline = require('readline-sync');

let contador=0, numReferencia=2
ehPrimo = true
let qtde = Number(readline.question("Digite a qtde de numeros primos: "));

while (contador < qtde) {
  for (let i=2 ; i<numReferencia/2+1 ; i++) {
    if (numRef % i == 0) {
      ehPrimo = false
      numReferencia++
      break
    }
  }
  if (ehPrimo === true) {
    console.log(numReferencia, "\t");
    numReferencia++
    contador++
  }
  ehPrimo = true
} 