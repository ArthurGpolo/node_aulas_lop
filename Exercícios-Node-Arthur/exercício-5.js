const readline = require('readline-sync'); 

let valorInicial = Number(readline.question("Digite o valor inicial: "));
const repeticoes = Number(readline.question("Quantas vezes deseja repetir o processo? "));

if (valorInicial > 0 && repeticoes > 0) {
  for (let i = 0; i < repeticoes; i++) {
    valorInicial += 1; 
    const euler = (1 + 1 / valorInicial) ** valorInicial; 
    console.log('Para x =', valorInicial, 'o número de Euler aproximado é:', euler);
  }
} else {
  console.log("Por favor, informe valores positivos para o valor inicial e o número de repetições.");
}