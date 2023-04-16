const pessoas = [
    {nome: 'Marcus',idade: 20, altura: '1,86m'},
    {nome: 'Sabrina',idade: 19, altura: '1,58'},
    {nome: 'Carlos',idade: 20, altura: '1,83'}
];

console.log(`O ${pessoas[0].nome} é irmão do ${pessoas[2].nome} e namorado da ${pessoas[1].nome}
ele tem ${pessoas[0].idade} anos e ${pessoas[0].altura} de altura.`)

for(let i = 0; i < pessoas.length; i++){
    console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} e altura de ${pessoas[i].altura}`);
};