function criarEndereco(rua,numero,bairro,cidade,cep){
    return {
        rua,
        numero,
        bairro,
        cidade,
        cep
    }
}

let endereco1 = criarEndereco('Venancio Amico',55,'Potiguara','Itu',13312754);
let endereco2 = criarEndereco('Venancio Amico',154,'Jardim das flores','ABC',12456966);

function compararObjeto(x,y){
    if(
        x.rua === y.rua &&
        x.numero === y.numero &&
        x.bairro === y.bairro &&
        x.cidade === y.cidade &&
        x.cep === y.cep
    ){
        return true
    }
    else{
        return false
    }
}

let resultado = compararObjeto(endereco1,endereco2);

console.log(resultado)



