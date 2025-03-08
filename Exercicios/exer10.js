let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let numerosPares = numeros.filter(num => num % 2 === 0);
console.log('Números pares:', numerosPares);


let numerosMultiplicados = numerosPares.map(num => num * 2);
console.log('Números pares multiplicados por 2:', numerosMultiplicados);


let soma = numerosMultiplicados.reduce((acc, num) => acc + num, 0);
console.log('Soma dos números pares multiplicados por 2:', soma);