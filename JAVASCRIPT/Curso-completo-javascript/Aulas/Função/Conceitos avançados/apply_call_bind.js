function teste(cor1, cor2){
    console.log(this.name) // No node seria o objeto global, usando o call, apply eu consigo criar o "this" de maneira artificial
    console.log(cor1, cor2)
}

teste.call({name:'rex'},...['Preto','Azul']) // Coloca primeiro a criação e segundo os parâmetros
teste.apply({name: 'Nox'}, ['Amarelo', 'Vermelho']) // Coloca primeiro a criação e segundo os parâmetros dentro de um array

const testeBind = teste.bind({name:'Brutus'}) // Retorna uma função nova, considerando "this" o que está no parâmetro

testeBind('Roxo', 'Marrom')

