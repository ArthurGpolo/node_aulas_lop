const readline = require('readline-sync'); 

const base = Number(readline.question("Digite a base (inteiro positivo): "));
const expoente = Number(readline.question("Digite o expoente (inteiro positivo): "));

let resultado = 1; 

for (let i = 0; i < expoente; i++) {
    resultado = base * resultado;
}

console.log(base, 'elevado a', expoente, 'é igual à', resultado);
