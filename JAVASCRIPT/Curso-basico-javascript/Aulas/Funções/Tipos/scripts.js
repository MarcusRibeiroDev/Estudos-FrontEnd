// Realiza uma tarefa mas não retorna nada.

function nomearNome(nome){
    console.log('Seu nome é '+nome)
};

let nome = nomearNome('Marcus')

console.log(nome);

// Faz uma operação e retorna algo que pode ser colocado numa variável.

function dobrarValor(valor){
    return valor*2;
};

let resultado = dobrarValor(45);

console.log(resultado);
