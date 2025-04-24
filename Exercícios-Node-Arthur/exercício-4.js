const readline = require('readline-sync'); 

const x = Number(readline.question("Digite um valor positivo para x: "));

if (x > 0) {
  const euler = ((1 + 1 / x), x);
  console.log('O número de Euler aproximado para x = ', x , 'é:', euler);
} else {
  console.log("Por favor, informe um valor positivo para 'x'.");
}