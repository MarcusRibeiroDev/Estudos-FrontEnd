let numberUser = '92734-5678'

function maskNumber(n){

    if(n.length === 10){

        let firstNumbers = n.slice(0,2)
        let lastNumbers = n.slice(8, 10)
        return `${firstNumbers}***-**${lastNumbers}`

    } else if(n.length === 9){

        let firstNumbers = n.slice(0,1)
        let lastNumbers = n.slice(7, 9)
        return `${firstNumbers}***-**${lastNumbers}`

    } else {
        return `The number ${n} is not valid`
    }
    
}

let maskedNumber = maskNumber(numberUser)

console.log(maskedNumber)