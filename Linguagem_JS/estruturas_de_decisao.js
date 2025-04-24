// se == if e senao == else
const readline = require('readline-sync');

const numero = Number(readline.question('Digite um numero: '));

const resto = Number(numero/2)

if (resto % 1){;
console.log('Este número é ímpar')
} else {
console.log('Este numero é par')
}
