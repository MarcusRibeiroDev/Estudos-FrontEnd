const arr = [1,5,10,true,'ola']

console.log(arr.find(function(el){
    return typeof el === 'boolean' 
}))// RECEBE O ELEMENTO NO PARÂMETRO, RETORNA O PRIMEIRO ELEMENTO QUE SATISFAÇA A CONDIÇÃO, CASO NÃO ENCONTRE RETORNA UNDEFINED

console.log(arr.findIndex(function(el){
    return typeof el === 'x'
})) // RECEBE O ELEMENTO NO PARÂMETRO, RETORNA O INDÍCE DO PRIMEIRO ELEMENTO QUE SATISFAÇA A CONDIÇÃO, CASO NÃO ENCONTRE RETORNA -1