let arr = []

let _push = arr.push(true,false,null,undefined) // RETORNA O LENGTH ATUAL, APÓS ADICIONAR, ALTERA O ARRAY ORIGINAL ADICIONANDO SEMPRE NO FINAL

console.log(_push)
console.log(arr)
console.log('******************************************************************************************')

let _unshift = arr.unshift(11,22,33,44) // RETORNA O LENGTH ATUAL, APÓS ADICIONAR, ALTERA O ARRAY ORIGINAL ADICIONANDO SEMPRE NO ÍNICIO

console.log(_unshift)
console.log(arr)
console.log('******************************************************************************************')

let _pop = arr.pop() // RETORNA O ÚLTIMO ELEMENTO, APÓS RETIRALO, ALTERA O ARRAY ORIGINAL REMOVENDO SEMPRE O ÚLTIMO ELEMENTO

console.log(_pop)
console.log(arr)
console.log('*******************************************************************************************')

let _shift = arr.shift() // RETORNA O PRIMEIRO ELEMENTO, APÓS RETIRALO, ALTERA O ARRAY ORIGINAL REMOVENDO SEMPRE O PRIMEIRO ELEMENTO

console.log(_shift)
console.log(arr)
console.log('*******************************************************************************************')