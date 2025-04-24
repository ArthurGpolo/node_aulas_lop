const readline = require("readline-sync");

const notas = [];
let soma = 0;

for (let i=0 ; i<5 ; i++){
    notas.push(Number(readline.question(`${i + 1}ª nota: `)));
    soma = soma + notas[i];
}

notas.sort((a, b) => a - b);
console.log("Notas ordenadas:", notas);

// notas.length = nº de elemetos em const notas
let maior = notas[0]; 
for (let i=1 ; i<notas.length ; i++){ 
    if (maior < notas[i]){
        maior = notas[i];
    }
}
console.log("Sua maior nota é:", maior);

let menor = notas[0]; 
for (let i=1 ; i<notas.length ; i++){
    if (menor > notas[i]){
        menor = notas[i];
    }
}
console.log("Sua menor nota é:", menor);

const media = soma / notas.length; 
console.log("Sua média é de: ", media);

if (media >= 7){
    console.log("Você foi aprovado :)");
} else {
    console.log("Você foi Reprovado :(");
}