// while --> enquanto
const entradaDados = require('readline-sync');
let contador = 0;

console.log("Deseja contar? S/N");
let usuarioQuerContar = entradaDados.question("");

// o usuário falou que não quer ver o contator contar 
do{
console.log("contador:", contador);
contador++;
}while(contador <= 10 && usuarioQuerContar === 'S')
