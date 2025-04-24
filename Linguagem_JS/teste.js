const readline = require('readline-sync');

const peso = Number(readline.question('Seu peso? '));

const altura = Number(readline.question('Sua altura? '));

// ** 2 eleva um número ou uma variável ao quadrado  
const imc = (peso/(altura*altura));

// o comando .toFixed() serve para reduzir a qtde de casas decimais
console.log('Seu IMC é:', imc.toFixed(2));