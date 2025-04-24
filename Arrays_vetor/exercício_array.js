const readline = require('readline-sync');

const notas = [];

let soma = 0;

// Pede para o usuário informar 5 notas e as guarda em const notas = [];.
for (let i = 0; i < 5; i++) {
    const n = Number(readline.question("Digite a "+(Number(i + 1)) +"ª nota: "));
    notas.push(n); 
    soma = soma + notas[i];
}

// Ordena as notas em ordem numérica.
notas.sort((a, b) => a - b);
console.log("Notas ordenadas:", notas);

// Fornece a maior nota.
const maiorNota = notas[4]; 
console.log("Sua maior nota é:", maiorNota);

// Fornece a menor nota.
const menorNota = notas[0]; 
console.log("Sua menor nota é:", menorNota);

// Calcula a média e informa se o usuário foi aprovado ou reprovado 
const media = soma/5;
console.log("Sua média é de: ", media);

if (media >= 7){
    console.log('Você foi aprovado :)');
} else {
    console.log('Você foi Reprovado :(');
}