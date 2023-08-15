const arr = [1,5,10,true,'ola']

const arr1 = arr.filter(function(el,i,_arr){ 
    return typeof el === 'number'
}) // RECEBE COMO PARÂMETRO, ELEMENTO, INDÍCE E O PRÓPRIO ARRAY, IRÁ FAZER UM LOOP VALIDANDO A CONDIÇÃO IMPOSTA EM CADA ELEMENTO
// , CASO SEJA TRUE IRÁ RETORNAR O ELEMENTO. ***NÃO ALTERA ARRAY ORIGINAL***

const arr2 = arr.filter((el)=>{
    if(el % 5 === 0){
        return el
    }
})


console.log(arr1)


console.log(arr)

console.log(arr2)