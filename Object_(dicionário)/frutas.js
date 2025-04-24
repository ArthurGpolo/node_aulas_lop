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

for(let x in frutas) {
    if(frutas[x].estragou === true) {
        console.log('Vish a',frutas[x].nome,'estragou')
    } else {
        console.log('A fruta', frutas[x].nome, 'de cor', frutas[x].cor, 'custa R$',frutas[x].preco.toFixed(2), 'e pesa', frutas[x].peso +' gramas');
    }
}

console.log()
for(let y in frutas) {
    const aumentoPreco = (((10/100)*frutas[y].preco)+frutas[y].preco)
    const aumentoPeso = (((10/100)*frutas[y].peso)+frutas[y].peso)
    if(frutas[y].estragou === true) {
        console.log('Vish a',frutas[y].nome,'estragou')
    } else {
        console.log('A fruta', frutas[y].nome, 'de cor', frutas[y].cor, 'sofeu um aumento de 10 % passando a custar R$',aumentoPreco.toFixed(2), 'e pesar', aumentoPeso +' gramas');
    }
}
