const arr = [1,5,10,true,'ola']

const onlyNumber = arr.every(function(n){
    return typeof n === 'number'
}) // SE ALGUM DOS ELEMENTOS NÃO CUMPRIR A CONDIÇÃO, IRÁ RETORNAR FALSE

const onlyNumber1 = arr.some(function(n){
    return typeof n === 'number'
}) // SE ALGUM DOS ELEMENTOS CUMPRIR A CONDIÇÃO, IRÁ RETORNAR TRUE

console.log(onlyNumber)