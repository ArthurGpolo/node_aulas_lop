const readline = require('readline-sync');

const pIncial = Number(readline.question('Informe o preco do produto? R$ '));

const desconto = Number(readline.question('Informe o valor do desconto? [%]: '));

const pFinal = Number(pIncial-(pIncial*(desconto/100)));

console.log('O preço final do produto é: R$', pFinal);