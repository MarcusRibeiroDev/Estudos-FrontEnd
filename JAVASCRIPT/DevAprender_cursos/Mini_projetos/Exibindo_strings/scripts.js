// Criar um método para ler propriedades de um objeto e exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
    titulo: "Avatar",
    ano: 2009,
    diretor: "Mell Gibson",
    bilheteria: 12000000,
    produtora: "Alamo",
    bom_filme: true,
};

exibirPropriedades(filme);

function exibirPropriedades(obj){
    for(i in obj){
        if(typeof(obj[i]) === 'string'){
            console.log(i,obj[i])
        }
    }
};