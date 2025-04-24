const readline = require('readline-sync');

let num = Number(readline.question("Digite um numero >= 2: "));
let ehPrimo = true

while(true) {
    if(num >= 2) {
        break
    }
} 
    for(let i=2 ; i<num/2+1 ; i++) {
        if(num % i === 0) {
            ehPrimo = false 
            console.log(num, " não é Primo e é divisível por: ", i); 
            break
        }
    }
    if(ehPrimo === true) {
        console.log(num, " é Primo");
} 