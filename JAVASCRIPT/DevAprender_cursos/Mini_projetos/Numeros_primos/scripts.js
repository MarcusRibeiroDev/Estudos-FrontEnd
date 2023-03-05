function exibirPrimo(limite){

    for(let i = 2; i <= limite; i++){
        let ePrimo = true;
        for(let j = 2; j < i; j++){// Começa com 2 para descartar o numero 1 e é somente '<' para descartar numeros iguais, pois já é uma característica que todos os numeros possuem;
            if(i % j === 0){
                ePrimo = false;
                break
            };
        };
        if(ePrimo === true){
            console.log(i);
        };
    }
    
};

exibirPrimo(20)