const capacete = {

    descrição: 'FF358 Monocolor',
    valor: 899,
    peso: 2,
    genero: 'Unisex'

};

console.log(capacete)

const capacete1 = Object.assign({
    cor: 'Amarelo'
},capacete); // Adicionando mais 1 propriedade e clonando.

console.log(capacete1)

const capacete2 = {...capacete}; // Clonagem mais rapida.

console.log(capacete2)