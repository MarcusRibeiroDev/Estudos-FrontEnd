function multiplicar(n1,n2){

    if(typeof n1 !== 'number' || typeof n2 !== 'number'){
        throw Error('Somente números são aceitos'); // Enviar mensagem padrão de erro do console 
    }
    return (n1*n2);
};