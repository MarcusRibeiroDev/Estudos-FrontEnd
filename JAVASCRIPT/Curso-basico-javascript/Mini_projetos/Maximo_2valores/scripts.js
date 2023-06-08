function maiorValor(x,y){
    if(x > y){
        return x;
    }
    else if(y > x){
        return y;
    }
    else{
        return 'Os 2 números possuem o mesmo valor';
    }
};

resultado = maiorValor(8,5);

console.log(resultado);

// Com operador ternário

function maiorNumero(a,b){
    return a > b ? a : b;
};

let maxNumber = maiorNumero(70,22);

console.log(maxNumber);