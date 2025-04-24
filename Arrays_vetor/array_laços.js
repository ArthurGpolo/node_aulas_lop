const paises = ['ar', 'br', 'jp', 'es', 'it'];

// Os laços for e for-each servem para percorrermos a lista.
for (let index in paises){
    console.log(Number(index) + 1 +"º país =>",paises[index]);
}