// 1ªfunção
function hello(){
    console.log('Bom-dia!');
}
for(let i=0; i<3; i++) {
    hello();
}


// 2ªfunção
function hi(){
    return 'Boa-tarde!';
}
const msg = hi();
console.log(msg);
console.log(hi());


// 3ªfunção
function somar(n1, n2){
    const n3 = n1 + n2;
    console.log(`${n1} + ${n2} = ${n3}`);
}
num1 = 'a', num2 ='bc';
somar(num1, num2);


// 4ªfunção
function soma(n1, n2){
    const n3 = n1 + n2;
    return n3;
}
console.log(soma(4, 6));


// 5ªfunção
function s(n1=0, n2=0){
    return n1 + n2;
}
console.log(s());

// Desafio
function func(){
    n1=8080;
}
let n1 = 10;
func();
console.log(n1);