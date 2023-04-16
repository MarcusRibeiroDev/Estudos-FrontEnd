// VERSÃO MINHA

let imc_calcularImc = 0

function classificarImc(f1){

    let peso1 = parseFloat(prompt('Digite seu peso em KG (use ponto para decimal)'))

    let altura1 = parseFloat(prompt('Digite sua altura em M (use ponto para decimal)'))

    f1(peso1, altura1)

    console.log(imc_calcularImc)

    if(imc_calcularImc <= 16.9){
        console.log('Muito abaixo do peso')
    } else if(imc_calcularImc > 17 && imc_calcularImc < 18.4){
        console.log('Abaixo do peso')
    } else if(imc_calcularImc > 18.4 && imc_calcularImc < 24.9){
        console.log('Normal')
    } else if(imc_calcularImc > 25 && imc_calcularImc < 29.9){
        console.log('Acima do peso')
    } else if(imc_calcularImc > 30 && imc_calcularImc < 34.9){
        console.log('Obesidade grau I')
    } else if(imc_calcularImc > 35 && imc_calcularImc < 40){
        console.log('Obesidade grau II')
    } else {
        console.log('Obesidade grau III')
    }

}

function calcularImc(peso,altura){

    if(peso === undefined ||altura === undefined){
        throw Error('Faltando parâmetro')
    } else if(typeof peso !== 'number' || typeof altura !== 'number'){
        throw Error('Somente números')
    }

    let nImc = (peso/(altura**2))

    imc_calcularImc = nImc
    
}

classificarImc(calcularImc)





