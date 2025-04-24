//** Criando um dicionário */
const notas = {'mat': 10, 'geo': 8}

console.log(notas);
console.log(notas.mat);
console.log(notas['mat']);

//** Inserindo um aluno */
const aluno = {'juca': {'ing': 6, 'bio': 4}} 

//** 6 => ing */
//** 4 => bio */
         
console.log(aluno['juca']);
console.log(aluno['juca']['bio']);  

//** Percorrendo o dicionário */
const n = {'mat': 10, 'geo': 8, 'eco': 4}

for (let chave in n) { //** chave é uma variável que foi criada */
    console.log(chave, '=>',n[chave]);
}

const notes = {'João': {'mat': 10, 'geo': 9}};

console.log(notes.João.mat);

notes['João']['bio'] = 8;

console.log(notes.João.bio);

for(let x in notes) {
    console.log(x, '=>', notes[x]);
    console.log(notes[x]['geo']);
}