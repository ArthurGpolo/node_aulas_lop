// Calculadora

const readline = require('readline-sync');

function input() {
    const conta = readline.question('Digite a conta: ').split(" "); // .split retorna as variáves em array
    //** console.log(conta); */
    //** console.log(typeof conta); typeof informa o tipo da variável */
    return conta;
}

function somar(n1, n2) {
    return n1 + n2;
}

function subtrair(n1, n2) {
    return n1 - n2;
}

function multiplicar(n1, n2) {
    return n1 * n2;
}

function dividir(n1, n2) {
    return n1 / n2;
}

// ---------------------------------------------------------------------

const conta = input();
const num1 = Number(conta[0]);
const num2 = Number(conta[2]);
const operação = conta[1];
let resultado;

if (operação == '+') {
    resultado = somar(num1, num2);
} else if (operação == '-') {
    resultado = subtrair(num1, num2);
} else if (operação == '*') {
    resultado = multiplicar(num1, num2);
} else if (operação == '/') {
    resultado = dividir(num1, num2).toFixed(2); // determina a quantidade de casa decimais
} else {
    console.log('\nOperação Inválida\n');
}

if (resultado != Infinity) {
    console.log(`${num1} ${operação} ${num2} = ${resultado}`);
} else {
    console.log(`Não existe divisão por 0`);
}