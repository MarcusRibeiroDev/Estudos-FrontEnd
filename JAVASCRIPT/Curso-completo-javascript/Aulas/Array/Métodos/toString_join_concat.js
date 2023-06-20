let arr1 = [1,2,3]

let arr2 = [4,5,6]

console.log(arr1.toString())

console.log(arr2.join(' & '))

const concatenado = arr1.concat(arr2)

console.log(concatenado)

console.log(concatenado.reduce((ac, el)=>{
    return ac + el
}))