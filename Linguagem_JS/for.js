// for --> para | (inicialização; condição; atualização)
const entradaDados = require('readline-sync');
let contador = 0 

// break --> pare
for(let i = 0; i<10; i++){
    console.log('contador: ', i); 

    let usuarioQuerContinuar = entradaDados.question("Deseja continuar? S/N ");

    if(usuarioQuerContinuar === 'N'){
        console.log('Programa Finalizado');
        break
    }else if(usuarioQuerContinuar === 'S') {
        continue
    }
    console.log('opção inválida');
} 