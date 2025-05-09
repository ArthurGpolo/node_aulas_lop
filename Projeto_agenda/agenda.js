// Agenda

const readline = require('readline-sync');

const fs = require('fs');

let agenda = [];

const CLS = '\x1Bc'; // Limpar tela

function Menu() {
    console.log(CLS);
    console.log("** Agenda **\n");
    console.log("1. Cadastrar usuário");
    console.log("2. Mostrar dados de um usuário");
    console.log("3. Mostrar todos os nomes");
    console.log("4. Remover usuário");
    console.log("5. Limpar agenda");
    console.log("6. Gravar arquivo");
    console.log("7. Ler arquivo");
    console.log("8. Sair\n");

    return Number(readline.question("Opcao: "));
}

function pausar() {
    readline.question("\nPressione [Enter] para continuar\t");
}

function validarNome(nome, agenda) {
    const nomeValido = /^[A-Za-zÀ-ú\s\-]+$/.test(nome);
    if (!nomeValido) return false;

    const nomeDuplicado = agenda.some(usuario => usuario.nome.toLowerCase() === nome.toLowerCase());
    return !nomeDuplicado;
}

function validarEmail(email) {
    const padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return padrao.test(email);
}

function validarTelefone(telefone) {
    const padrao = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;
    return padrao.test(telefone);
}

function cadastrarUsuario() {
    console.clear(CLS);
    console.log("** Cadastrar usuário **\n");
    const nome = readline.question("Nome: ");
    if (!validarNome(nome, agenda)) {
        console.log("\nNome inválido ou já cadastrado");
        return pausar();
    }

    const email = readline.question("Email: ");
    if (!validarEmail(email)) {
        console.log("\nE-mail inválido faça com no exemplo ao lado => Ex: usuario@dominio.com");
        return pausar();
    }

    const telefone = readline.question("Telefone (formato (11) 91234-5678): ");
    if (!validarTelefone(telefone)) {
        console.log("\nTelefone inválido use o formato (11) 91234-5678");
        return pausar();
    }

    agenda.push({ nome, email, telefone });
    console.log("\nUsuário cadastrado com sucesso");
    pausar();
}

function mostrarUsuario() {
    console.log(CLS);
    console.log("** Mostrar dados de um usuário **\n");
    const nome = readline.question("Informe o nome do usuário: ");
    const usuario = agenda.find(user => user.nome === nome);
    console.log();
    if (usuario) {
        console.log(`Nome: ${usuario.nome}`);
        console.log(`Email: ${usuario.email}`);
        console.log(`Telefone: ${usuario.telefone}`);
    } else {
        console.log("Usuário não encontrado");
    }
    pausar();
}

function listarNomes() {
    console.log(CLS);
    console.log("** Nomes cadastrados **\n");
    if (agenda.length === 0) {
        console.log("Nenhum nome cadastrado");
    } else {
        agenda.forEach(user => console.log(user.nome));
    }
    pausar();
}

function removerUsuario() {
    console.log(CLS);
    console.log("** Remover usuário **\n");
    const nome = readline.question("Nome do usuário que deseja remover: ");
    const index = agenda.findIndex(user => user.nome === nome);
    if (index !== -1) {
        agenda.splice(index, 1);
        console.log("\nUsuário removido com sucesso");
    } else {
        console.log("\nUsuário não encontrado");
    }
    pausar();
}

function limparAgenda() {
    console.log(CLS);
    console.log("** Limpar agenda **\n");
    const confirmar = readline.question("Deseja limpar toda a agenda? (s/n): ");
    if (confirmar.toLowerCase() === 's') {
        agenda.length = 0;
        console.log("\nAgenda limpa com sucesso");
    } else {
        console.log("\nCancelando...");
    }
    pausar();
}

function gravarArquivo() {
    console.log(CLS);
    console.log("** Gravar arquivo **\n");
    fs.writeFileSync('agenda.json', JSON.stringify(agenda, null, 2));
    console.log("Dados gravados com sucesso");
    pausar();
}

function lerArquivo() {
    console.log(CLS);
    console.log("** Ler arquivo **\n");
    if (fs.existsSync('agenda.json')) {
        const dados = fs.readFileSync('agenda.json');
        agenda = JSON.parse(dados);
        console.log("Agenda carregada com sucesso");
    } else {
        console.log("Arquivo não encontrado");
    }
    pausar();
}

function sair() {
    console.log(CLS);
    console.log("** Fechando agenda **\n");
}

let opcao;
do {
    opcao = Menu();

    if (opcao === 1) {
        cadastrarUsuario();
    } else if (opcao === 2) {
        mostrarUsuario();
    } else if (opcao === 3) {
        listarNomes();
    } else if (opcao === 4) {
        removerUsuario();
    } else if (opcao === 5) {
        limparAgenda();
    } else if (opcao === 6) {
        gravarArquivo();
    } else if (opcao === 7) {
        lerArquivo();
    } else if (opcao === 8) {
        sair();
    } else {
        console.log(CLS);
        console.log("** Opção inválida, tente novamente **");
        pausar();
    }

} while (opcao !== 8);