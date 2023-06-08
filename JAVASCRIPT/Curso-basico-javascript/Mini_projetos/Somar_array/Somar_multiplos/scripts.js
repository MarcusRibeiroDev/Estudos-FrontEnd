function somar(limite){
    let multiplosValor = 0;

    for(i = 0; i <= limite;i++){

        if(i % 3 === 0 | i % 5 === 0){
            multiplosValor += i;
        }

    };

    return multiplosValor;

};

let resultado = somar(10);

console.log(resultado)


