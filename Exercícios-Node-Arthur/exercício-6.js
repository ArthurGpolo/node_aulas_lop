const frase = "Exemplo de laço for...";

// length == comprimento
const larguraMoldura = frase.length + 4; 

function criarMoldura() {

  let linhaSuperior = "█".repeat(larguraMoldura);

  console.log(linhaSuperior);

  console.log('█', frase, '█');

  console.log(linhaSuperior);
}

criarMoldura();