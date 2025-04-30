// Agenda

const readline = require('readline-sync');

let agenda = [];

function menu() {
    console.log(`\n* Projeto Agenda *\n`);
    console.log(`1. Adicionar registro `);
    console.log(`2. listar agenda`);
    console.log(`3. Buscar usuário`);
    console.log(`4. Apagar registro`);
    console.log(`5. Salvar em disco`);
    console.log(`6. Sair\n`);
    const opção = Number(readline.question(`Opcao: `));
    console.log();
    return opção;
}

function adicionar() {
    console.log(`* Tela adicionar *\n`)
    let nome = readline.question(`Nome: `);
    let endereço = readline.question(`Endereco: `);
    let telefone =readline.question(`Telefone: `);
    return {nome, endereço, telefone};
}

let opcao;
do {
    opcao = menu();
    if (opcao === 1) {
        let registro = adicionar();
        agenda.push(registro);
        console.log(`\nRegistro adicionado com sucesso!`);
    } else if (opcao === 2) {
        console.log(`* Lista de registros *`);
        console.log(agenda);
    } else if (opcao === 3) {
        console.log(`* Buscar usuário *`);
    } else if (opcao === 4) {
        console.log(`* Apagar registro *`);
    } else if (opcao === 5) {
        console.log(`* Salvar em disco *`);
    } else if (opcao === 6) {
        console.log(`* Fechando agenda... *`);
    } else {
        console.log(`* Opção inválida. Tente novamente. *`);
    }
} while (opcao != 6);
