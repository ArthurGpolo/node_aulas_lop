const readline = require('readline-sync');

let num = Number(readline.question('Digite um número(inteiro): '))
let ehPrimo = true

for(let i=2 ; i<num/2+1 ; i++) {
    if(num % i === 0) {
        ehPrimo = false  
    }
}

if(ehPrimo === true) {
    console.log(num, i++)
} 