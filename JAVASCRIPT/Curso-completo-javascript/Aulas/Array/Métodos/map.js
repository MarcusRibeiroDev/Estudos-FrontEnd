const arr = [1,2,6,8,10]

const arr1 = arr.map(function(el,i,_arr){
    return el * el
}) // RECEBE COMO PARÂMETRO, ELEMENTO, INDÍCE E O PRÓPRIO ARRAY, IRÁ FAZER UM LOOP VALIDANDO A CONDIÇÃO IMPOSTA, OU REALIZANDO QUALQUER AÇÃO EM CADA
// ELEMENTO, RETORNA UM NOVO ARRAY TRANSFORMADO ***NÃO ALTERA ARRAY ORIGINAL***

console.log(arr1)

console.log(arr)

