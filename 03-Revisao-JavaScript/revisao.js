
//Node revisao.js
/*
comentario en bloco
*/

//variaveis

const nome = 'João';
let idade = 25;
const maiorIdade = true;

console.log(nome);
console.log(idade);
console.log("E maior de idade ", maiorIdade);

//nome = 'TEste';
idade = 26;
console.log(idade);

//operadores aritmeticos

const soma = 10 + 10;
const subtracao = 10 - 10;
const multiplicacao = 10 * 10;
const divisao = 10 / 10;

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);

const resto = 3 % 2;
let numero = 4;
console.log("RESTO", resto);


const incremento = numero++; //+1
console.log("INCREMENTO -> ",incremento);

const decremento = numero--; //-1
console.log("DECREMENTO -> ",decremento);


//faz a operação e atribuucao logo em seguida
let a = 3;

a %=2;                //a = a % 2
console.log(a);



//operadores de comparação

const igual = 10 == '10'; //true
console.log(igual);
const estritamenteIgual = 10 === '10'; //false
console.log(estritamenteIgual);


const maior = 3 > 2; //true
const menor = 2 < 3; //false
const maiorOuIgual = 3 >= 2; //true
const menorOuIgual = 2 <= 3; //false

//estrutuura de controle

if (idade >= 18) {
    console.log('Maior de Idade');
}

if (idade >= 18) {
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}

if (idade >= 18) {
    console.log('Maior de idade');
} else if (idade >= 18) {
    console.log('Menor de idade');
} else if (idade < 18 ) {
    console.log('Menor de idade');
} else {
        console.log('Idade invalida');
}


//operador ternario

const checkMaiorIdade = idade >= 18 ? 'Maior de idade' : 'Menor de idade';
console.log(checkMaiorIdade);

//array

let frutas = ['Maça', 'Banana', 'Uva'];
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[5]);
console.log(frutas.length);

frutas.push('Laranja');

frutas.forEach((fruta) => {
    console.log(fruta);
});

frutas.pop();
console.log(frutas);

//objetos

let pessoa = {
    nome: 'oriana',
    idade: 25,
    altura: 1.62,
    peso: 80,
    // maiorIdade: true 
};

// adicionando novo atributo

pessoa.email = 'oriana25@.com';
console.log(pessoa);

// remove atributo

delete pessoa.email;
console.log(pessoa);

//desestrutura objeto

let  {altura, peso} = pessoa;
console.log(altura);
console.log(peso);

// propagacao de Object

let endereco = {
    cidade: 'São Paulo',
    uf: 'SP',
};

let pessoaCompleta = {...pessoa, ...endereco};
console.log(pessoaCompleta);

//funcoes

function somar(numA, numB) {
    return numA + numB;
    
}

console.log(somar(2, 2));
console.log(somar(10, 2));
console.log(somar(5, 5));

function saudacao(nome) {
    console.log('Olá' + nome);
}

saudacao('Oriana');

//function anonima

let subtrair = function(numA, numB) {
    return numA - numB;
}

console.log(subtrair(4, 2));

//arrow function

let multiplicar = (numA, numB) => numA * numB;
console.log(multiplicar(2, 10));