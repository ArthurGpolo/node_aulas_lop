const readline = require('readline-sync');

      let qtde = Number(readline.question("Digite um numero: "));
      
      let n1=1, n2=1, n3
      if (qtde === 1) {
        console.log(1);
      } else if (qtde === 2) {
        console.log(1,"\n1");
      } else if (qtde > 2) {
        console.log(1,"\n1");
        for (let i=2 ; i<qtde ; i++) {
          n3 = n1 + n2
          console.log(n3);
          n1 = n2 
          n2 = n3 
        }
      }