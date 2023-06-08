// Velocidade até 70
// a cada 5km acima do limite você ganha 1 ponto
// maior ou igual a 12 pontos = carteira supendida

verificarVelocidade(70)

function verificarVelocidade(velocidade){

    const velocidadePermitida = 70;
    const pontosSuspensao = 12;
    const ponto = Math.floor((velocidade - velocidadePermitida)/5); // Math.floor irá arredondar para baixo;

    if(velocidade <= velocidadePermitida){
        console.log('Velocidade Permitida');
    }
    else if(ponto >= pontosSuspensao){
        console.log('Sua carteira foi suspendida');
    }
    else {
        console.log(`Você recebeu ${ponto} pontos`);
    }
};