const nomes =  ["Maria", "Joaquim", "Juca"];

console.log(nomes);

// Nomes índice 0 serve para pegar o primeiro item do array (vetor) 

console.log(nomes[0]);

nomes[0] = "Ana";

console.log(nomes[0]);


/*/ Metodos /*/

// Inseri novos items à uma lista. 
nomes.push("Joca", "Asdrubal", "Phelipe"); 

// Serve para ordenar em ordem alphabética uma lista.
nomes.sort(); 
console.log(nomes);

// Remove o último item da lista.
nomes.pop(); 
console.log(nomes);

// Altera a ordem do array (lista).
nomes.reverse();
console.log(nomes);


// Adiciona um item em qualquer posição do array e também excluir qualquer item do array.

/*/ nomes.splice(posição, ação, valor_para-adicionar);
Sendo ação: 0 => mantem o valor da posição especificada 
            1 => remove o valor da posição especificada /*/
nomes.splice(1, 0, "Maria");
console.log(nomes);

nomes.splice(4, 1);
console.log(nomes);

// nomes.lenght retorna a quantidade de elementos presente em um array (vetor)
nomes.length
