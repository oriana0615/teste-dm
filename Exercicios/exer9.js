let livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R. Tolkien",
    ano: 1954
};


let { titulo, autor } = livro;
console.log(`Título: ${titulo}`);
console.log(`Autor: ${autor}`);


function obterDetalhesLivro(livro) {
    let { titulo, autor } = livro;
    return `Título: ${titulo}, Autor: ${autor}`;
}


console.log(obterDetalhesLivro(livro));