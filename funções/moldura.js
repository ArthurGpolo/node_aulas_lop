const readline = require('readline-sync');
const frase = readline.question(`Digite uma frase: `);
//** atl + 219 = '█' */
const c = '█';

for(let i=0; i<frase.length + 4; i++) {
    process.stdout.write(c);
}
console.log()
for(let i=0; i<frase.length + 4; i++) {
    process.stdout.write(c);
}

console.log(`\n${c} ${frase} ${c}`);

for(let i=0; i<frase.length + 4; i++) {
    process.stdout.write(c);
}
console.log()
for(let i=0; i<frase.length + 4; i++) {
    process.stdout.write(c);
}