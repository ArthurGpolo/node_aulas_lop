const m = [[3, 5], [0, 4]];

//** Manual */
console.log('Manual');
console.log(m[0][0] ** 2); //** 3^2 = 9 */ 
console.log(m[0][1] ** 2); //** 5^2 = 25 */
console.log(m[1][0] ** 2); //** 0^2 = 0 */
console.log(m[1][1] ** 2); //** 4^2 = 16 */ 

//** Automático */
console.log('Automático');
for (let linha= 0; linha < 2; linha++) {
    for (let coluna = 0; coluna < 2; coluna++) {
        console.log(m[linha][coluna] ** 2);
    }   
}