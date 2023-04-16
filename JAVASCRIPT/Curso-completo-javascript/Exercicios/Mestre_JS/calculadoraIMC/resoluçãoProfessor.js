function calcularImc(p,a){

    if(p === undefined ||a === undefined){
        throw Error('Faltando parâmetro')
    } else if(typeof p !== 'number' || typeof a !== 'number'){
        throw Error('Somente números')
    }

    return (p/(a*a))
}

let imc = calcularImc(105.7,1.87)

function classificarImc(imc){
    
    if(imc <= 16.9){
        console.log('Muito abaixo do peso')
    } else if(imc > 17 && imc < 18.4){
        console.log('Abaixo do peso')
    } else if(imc > 18.4 && imc < 24.9){
        console.log('Normal')
    } else if(imc > 25 && imc < 29.9){
        console.log('Acima do peso')
    } else if(imc > 30 && imc < 34.9){
        console.log('Obesidade grau I')
    } else if(imc > 35 && imc < 40){
        console.log('Obesidade grau II')
    } else {
        console.log('Obesidade grau III')
    }

}

classificarImc(imc)