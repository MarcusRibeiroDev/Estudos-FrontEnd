// Propriedade usada para permitir passar uma quantidade de parâmetros indefinida para determinada função;
// Não funciona com arrow function

function somar(){
    let total = 0
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total
}

console.log(somar(1,2,3,5))

//************************

function multiplicar(){
    let total = 1
    for(let i = 0; i < arguments.length; i++){
        total *= arguments[i]
    }
    return total
}

console.log(multiplicar(1,5,10))


