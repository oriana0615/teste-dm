let frutas = ["Maçã", "Banana", "Abacaxi", "Laranja"];


let frutasMaiusculas = frutas.map(fruta => fruta.toUpperCase());
console.log('Frutas em maiúsculas:', frutasMaiusculas);


let frutasComA = frutas.filter(fruta => fruta.startsWith('A'));
console.log('Frutas que começam com a letra A:', frutasComA);


let comprimentoFrutas = frutas.map(fruta => fruta.length);
console.log('Comprimento de cada fruta:', comprimentoFrutas);
