const frutas = {
    'fruta1': {
        'nome': 'maça',
        'cor': 'vermelha',
        'preco': 5.99,
        'peso': 100,
        'estragou': false,
    }
    ,'fruta2': {
        'nome': 'banana',
        'cor': 'amarela',
        'preco': 6.99,
        'peso': 300,
        'estragou': true,
    }
    ,'fruta3': {
        'nome': 'limão',
        'cor': 'verde',
        'preco': 10.99,
        'peso': 50,
        'estragou': false,
    }
};

for(let f in frutas) {
    if(frutas[f].estragou) {
        console.log(`Putz grila, a ${frutas[f].nome} está podre`)
    } else {
    /** toFixed serve para escolher a qtde de casas decimais que devem aparecer */
    console.log(`A ${frutas[f].nome} ${frutas[f].cor}, pesa ${frutas[f].peso}g e custa R$${frutas[f].preco.toFixed(2)}`) 
    }
}

console.log()
for(let f in frutas) {
    frutas[f].peso += (frutas[f].peso*10/100)
    frutas[f].preco += (frutas[f].preco*10/100)
    if(frutas[f].estragou) {
        console.log(`Putz grila, a ${frutas[f].nome} está podre`)
    } else {
    console.log(`A ${frutas[f].nome} ${frutas[f].cor}, pesa ${frutas[f].peso}g e custa R$${frutas[f].preco.toFixed(2)}`)
    }
}