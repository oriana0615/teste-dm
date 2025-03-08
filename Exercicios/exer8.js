let pessoa = {
    nome: 'Carlos',
    idade: 28,
    cidade: 'São Paulo'
};


pessoa.email = 'oriana25@.com';
console.log('Após adicionar email:', pessoa);


delete pessoa.email;
console.log('Após remover email:', pessoa);


console.log('Listando todas as propriedades do objeto pessoa:');

Object.keys(pessoa).forEach(propriedade => {
    console.log(`${propriedade}: ${pessoa[propriedade]}`);
});
