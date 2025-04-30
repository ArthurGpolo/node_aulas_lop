// Calculadora 

console.log('* Escolha a operação *\n');
console.log('1. Soma');
console.log('2. Subtração');
console.log('3. Multiplicação');
console.log('4. Divisão\n');

const readline = require('readline-sync');
let op = Number(readline.question('Opcao? '));
console.log('\n* Informe os valores da operação *\n');


let num1 = Number(readline.question('Valor: '));
let num2 = Number(readline.question('Valor: '));


if(op === 1){
    function soma(n1, n2){
        return n1 + n2;
    }
    console.log(soma(num1, num2));

} else if (op === 2){
    function subt(n1, n2){
        return n1 - n2;
    }
    console.log(subt(num1, num2));

} else if (op === 3){
    function mult(n1, n2){
        return n1 * n2;
    }
    console.log(mult(num1, num2));

} else if (op === 4){
    function div(n1, n2){
        return n1 / n2;
    }
    console.log(div(num1, num2));
}
