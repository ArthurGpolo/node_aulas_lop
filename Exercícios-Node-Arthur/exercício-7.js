const readline = require('readline-sync');

const numero = Number(readline.question("Digite um numero inteiro positivo: "));

if (numero < 0) {
    console.log('Informe um numero inteiro positivo');
} else {
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial = i * fatorial
    }
    console.log('O fatorial de', numero, 'é:', fatorial);
}