let numeros = [10, 20, 30, 40, 50];


numeros.push(60);
console.log('Array após adicionar um número ao final:', numeros);


numeros.shift();
console.log('Array após remover o primeiro número:', numeros);


let maiorNumero = Math.max(...numeros);
console.log('Maior número do array:', maiorNumero);


let menorNumero = Math.min(...numeros);
console.log('Menor número do array:', menorNumero);