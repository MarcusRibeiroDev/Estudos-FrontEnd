const obj = {
    cor: 'vermelho'
} // LITERAL

const obj1 = new Object()
obj1.cor = 'verde'
obj1['segundaCor'] = 'preto' // NÃO LITERAL

console.log(obj)
console.log(obj1)

// REFERÊNCIA E VALOR

const x = {
    nome: 'Marcus',
    idade: '20'
}

const j = {
    nome: 'Marcus',
    idade: '20'
}

if(x === j){
    console.log('true')
} else{
    console.log('false')
} // Não é comparado o valor dentro do OBJ e sim sua referência, Objetos e Array são armazenados na memória com sua referência

const a = 'valorX'
const b = 'valorX'

if(a === b){
    console.log('true')
} else{
    console.log('false')
} // Compara os valores, valores primitivos como string, number, boolean são armazenados na memória com seu valor

