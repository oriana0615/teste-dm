import moment from 'moment';


export function soma(a, b) {
    return a + b;
}


export function subtracao(a, b) {
    return a - b;
}


export function multiplicacao(a, b) {
    return a * b;
}


export function divisao(a, b) {
    if (b === 0) {
        throw new Error('Divisão por zero não é permitida');
    }
    return a / b;
}


export function calcularIdade(dataNascimento) {
    return moment().diff(moment(dataNascimento, 'YYYY-MM-DD'), 'years');
}