let pessoa = {
    /*CHAVE: VALOR*/
    nome: 'Marcus',
    idade: 20,
    sexo: 'Masculino'
};

pessoa.telefone = 11970234563; // Adicionando propriedade

delete pessoa.idade; // Excluindo propriedade


console.log(pessoa);
