function sum(){
    const numbers = Array.from(arguments) // CRIA UM ARRAY COM BASE O USUÁRIO COLOCA PARÂMETROS NA FUNÇÃO
    // const numbers = [...arguments] // SEGUNDA OPÇÃO
    let total = 0

    for(el of numbers){
        total += el
    }

    console.log(`A soma é: ${total}`)
}

sum(5,5,10)

function average(){
    const numbers = Array.from(arguments) // CRIA UM ARRAY COM BASE O USUÁRIO COLOCA PARÂMETROS NA FUNÇÃO
    // const numbers = [...arguments] // SEGUNDA OPÇÃO
    let media = 0

    let total = numbers.reduce((acumulador,atual)=>{
        return acumulador + atual
    })

    media = (total / numbers.length)

    console.log(`A média é: ${media}`)
}

average(10,50,60)

