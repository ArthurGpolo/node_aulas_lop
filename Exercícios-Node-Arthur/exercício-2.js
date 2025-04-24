const readline = require('readline-sync');

let tentativas = 0;
const loginCorreto = "Polo";
const senhaCorreta = "123";

do {

  let login = readline.question("Digite seu login: ");
  let senha = readline.question("Digite sua senha: ");

  if (login === loginCorreto && senha === senhaCorreta) {
    console.log("Bem-vindo ao sistema!");
    break
  } else {
    console.log("Login ou senha incorretos!");
    tentativas++;
    console.log('Tentativas restantes:', 3 - tentativas);
  }
  
} while (tentativas < 3);

if (tentativas === 3) {
  console.log("Você excedeu o número de tentativas permitidas. Acesso bloqueado.");
}

console.log("Programa finalizado.");
