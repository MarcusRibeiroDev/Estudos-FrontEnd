let arr = [1,2,3,4]

let soma =  arr.reduce(function(acumulador, elementoAtual){
    console.log(acumulador)
    console.log(elementoAtual)
    return acumulador += elementoAtual
}, ) // Loop dentro do array, 1º parâmetro é uma função, 2º parâmetro é o tipo de acumulador, assim irá decidir o tipo de retorno

//console.log(soma)

const palavras = ['olá','comida','acasalamento',]

let maiorPalavra = palavras.reduce(function(maior,palavraAtual){
    if(maior.length > palavraAtual.length){
        return maior
    }
    return palavraAtual // O retorno da função é sempre atribuido para o 1º parâmetro da própria função
},'')

//console.log(maiorPalavra)

let numeros = [1,1,2,2,3,3,4,5,6,7,7,8,9,9,10]

let numerosUnicos = numeros.reduce(function(numerosUnicos,numeroAtual){
    if(numerosUnicos.indexOf(numeroAtual) < 0){
        numerosUnicos.push(numeroAtual)
    }
    return numerosUnicos
}, [])  

console.log(numerosUnicos)

