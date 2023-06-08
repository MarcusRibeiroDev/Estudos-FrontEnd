let fatorial = 1;

function calcularFatorial(numero){

    if(numero >= 1){
        for(let i = 1; i <= numero; i++){
            fatorial = fatorial * i // "fatorial *= i"" é a mesma coisa.
        }
        return fatorial
    }
    else{
        console.log('Digite um número positivo')
    }

};

resultado = calcularFatorial(5)

console.log(resultado);