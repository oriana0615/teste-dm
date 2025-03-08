function Pexer(nome) {
 
    console.log(nome.toUpperCase()); 

    console.log(nome.toLowerCase()); 

    
    let nomeInvertido = nome.split('').reverse().join('');
    console.log(nomeInvertido); 

    
    console.log(nome.replace(/a/g, 'x'));
}

Pexer("Oriana");




// let nome = 'Oriana';

// // 1. Converte para maiúsculas
// console.log(nome.toUpperCase()); 

// // 2. Converte para minúsculas
// console.log(nome.toLowerCase()); 

// // 3. Inverte a string
// console.log(nome.split('').reverse().join('')); 

// // 4. Substitui todas as ocorrências de 'a' por 'x'
// console.log(nome.replace(/a/g, 'x'));








