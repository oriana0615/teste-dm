function operacoesBasicas(pr1, pr2) {
    console.log(`Números recebidos: ${pr1} e ${pr2}`);

    
    console.log(`Adição: ${pr1} + ${pr2} = ${pr1 + pr2}`);

    
    console.log(`Subtração: ${pr1} - ${pr2} = ${pr1 - pr2}`);

    
    console.log(`Multiplicação: ${pr1} * ${pr2} = ${pr1 * pr2}`);

 
    if (pr2 !== 0) {
        console.log(`Divisão: ${pr1} / ${pr2} = ${pr1 / pr2}`);
    } else {
        console.log('Divisão por zero não é permitida.');
    }

    
    console.log(`O primeiro número é maior que o segundo? ${pr1 > pr2}`);
}


operacoesBasicas(15, 5);