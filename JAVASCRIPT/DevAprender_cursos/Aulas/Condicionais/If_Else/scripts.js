let hora = 14;

function comprimentar(){
    if (hora > 6 && hora < 12){
        return 'Bom dia!';
    }
    else if (hora > 12 && hora < 18){
        return 'Boa tarde!';
    }
    else {
        return 'Boa noite!';
    }
};

let resultado = comprimentar();

console.log(resultado);
