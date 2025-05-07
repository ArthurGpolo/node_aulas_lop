// Agenda

const readline = require('readline-sync');

const CLS = '\x1Bc';

const agenda = [];

const fs = require('fs');

const contatos = {};

function menu() {
    console.log(`** Agenda **\n`);
    console.log(`1. Cadastrar usuários`);
    console.log(`2. Mostrar dados de um usuário`);
    console.log(`3. Listar todos nomes cadastrados`);
    console.log(`4. Remover usuário`);
    console.log(`5. Limpar toda agenda`);
    console.log(`6. Gravar arquivo`);
    console.log(`7. ler arquivo`);
    console.log(`8. Sair\n`)
    const opção = Number(readline.question(`Opcao: `));
    console.log();
    return opção;
}

function adicionar() {
    let nome = readline.question(`Nome: `);
    let email = readline.question(`E-mail: `);
    let telefone =readline.question(`Telefone: `);
    return {nome, email, telefone};
}

function gravar_agenda() {
    const file = 'contatos.json';
    const conteudoGravar = JSON.stringify(contatos);
    fs.writeFileSync(file, conteudoGravar);
}

let opcao;
do {
    opcao = menu();
    if (opcao === 1) {
        console.log(`${CLS}`);
        console.log(`** Cadastrar usuário **\n`);
        let registro = adicionar();
        agenda.push(registro);
        console.log(`${CLS}`);
    } 
    
    else if (opcao === 2) {
        console.log(`${CLS}`);
        console.log(`** Mostrar dados de um usuário **\n`);
        const nome = readline.question(`Infome o nome do usuário para o fornecimentos dos dados: `);
        console.log();
        const usuario = agenda.find(user => user.nome === nome);
        if (usuario) {
            console.log(`Nome: ${usuario.nome}`);
            console.log(`Email: ${usuario.email}`);
            console.log(`Telefone: ${usuario.telefone}\n`)
        } else {
            console.log(`Usuário não encontrado. \n`);
        }
    } 
    
    else if (opcao === 3) {
        console.log(`${CLS}`);
        console.log(`** Nomes cadastrados **\n`);
        const nomes = agenda.map(contato => contato.nome);
        console.log(nomes,'\n');
    } 
    
    else if (opcao === 4) {
        console.log(`** Remover usuário **\n`);
        const nome = readline.question(`Insira o nome do usuário que deseja remover: `);
        console.log();
        const usuario = agenda.find(user => user.nome === nome);
        if (usuario) {
            agenda.splice(0, 1);
        } else {
            console.log(`Usuário não encontrado. \n`);
        }
    } 
    
    else if (opcao === 5) {
        console.log(`${CLS}`);
        console.log(`** Limpar toda agenda **\n`);
        const limpar = readline.question(`Deseja realmente limpar toda a agenda s/n ? `);
        console.log();
        if (limpar == 's') {
            
        } else {}
    } 
    
    else if (opcao === 6) {
        console.log(`** Gravar arquivo **\n`);
        
    } 
    
    else if (opcao === 7) {
        console.log(`** ler arquivo **\n`);
    } 
    
    else if (opcao === 8) {
        console.log(`${CLS}`);
        console.log(`** Fechando agenda **\n`);
    } else {
        console.log(`${CLS}`);
        console.log(`** Opção inválida tente novamente **\n`);
    }
} while (opcao != 8);
