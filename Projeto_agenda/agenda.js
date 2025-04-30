const readline = require('readline-sync');

function menu() {
    const adicionar = readline.question('1. Adicionar registro: ')
    return adicionar;
}