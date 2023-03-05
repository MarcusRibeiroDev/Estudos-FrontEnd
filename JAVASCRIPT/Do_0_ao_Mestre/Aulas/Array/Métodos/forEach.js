const arr = [1,5,10,true,'ola']

arr.forEach(function(el,i,_arr){
    console.log(el)
})// RECEBE COMO PARÂMETRO, ELEMENTO, INDÍCE E O PRÓPRIO ARRAY, IRÁ FAZER UM LOOP VALIDANDO A CONDIÇÃO IMPOSTA EM CADA ELEMENTO
// ***NÃO ALTERA ARRAY ORIGINAL*** ***NÃO RETORNA NADA***