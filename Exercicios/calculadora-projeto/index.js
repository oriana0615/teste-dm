import { soma, subtracao, multiplicacao, divisao, calcularIdade } from './calculadora.js';

console.log("Soma: ", soma(10, 5));
console.log("Subtração: ", subtracao(10, 5));
console.log("Multiplicação: ", multiplicacao(10, 5));
console.log("Divisão: ", divisao(10, 5));


const dataNascimento = '1997-03-25';
console.log(`Idade para a data de nascimento ${dataNascimento}: `, calcularIdade(dataNascimento));