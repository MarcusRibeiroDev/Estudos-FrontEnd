function calcularMedia(){
    let total = 0
    for(let i = 0; i < arguments.length; i++){
        if(typeof arguments[i] !== 'number'){
            throw Error('Somente números são aceitos')
        }
        total += arguments[i]

    }
    if(arguments.length === 0){
        return 0
    }

    let media = total/arguments.length

    return media
}

console.log(calcularMedia())
