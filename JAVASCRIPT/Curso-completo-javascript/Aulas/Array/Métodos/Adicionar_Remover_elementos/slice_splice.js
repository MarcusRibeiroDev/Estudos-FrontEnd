let arr = [true,false,null,undefined,11,22,33,44]

let _slice = arr.slice(1,4) // RETORNA OS ELEMENTOS REMOVIDOS, 1ª RETIRA O ÍNDICE E APARTIR DELE... 2º RETIRA ATÉ ELE, NÃO ALTERA O ARRA ORIGINAL
console.log(_slice)
console.log(arr)
console.log('******************************************************************************************')

let _splice = arr.splice(1,4,'Adicionado') // RETORNA OS ELEMENTOS REMOVIDOS, 1º RETIRA O ÍNDICE E APARTIR DELE... 2º RETIRA ELE E ATÉ ELE,
// 3º ADICIONA ITENS APARTIR DO 1º PARÂMETRO, NÃO ALTERA O ARRAY ORIGINAL

console.log(_splice)
console.log(arr)
console.log('******************************************************************************************')