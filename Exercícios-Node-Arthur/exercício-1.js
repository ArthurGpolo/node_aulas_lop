const readline = require('readline-sync'); 

do {
  let numero = Number(readline.question("Digite um numero: ")); 

  if (numero % 2 === 0) {
    console.log(numero, 'é Par');
  } else {
    console.log(numero, 'é Ímpar');
  }

  console.log("Deseja continuar? S/N");
  var usuarioQuerContinuar = readline.question("").toUpperCase(); 
} while (usuarioQuerContinuar === 'S');

console.log("Programa finalizado");