let aleatorio;
let acertou = false;

aleatorio = Math.floor(Math.random()*10);
console.log(`O número é ${aleatorio}`)

function chutarNumero(chute){

        if(aleatorio === chute){
            console.log('Acertou!');
            acertou = true;
        }
        else if(aleatorio < chute){
            console.log('Chutou Alto');
        }
        else if(aleatorio > chute){
            console.log('Chutou Baixo');
        }
        else{
            console.log('Digite um número')
        }
    
}
