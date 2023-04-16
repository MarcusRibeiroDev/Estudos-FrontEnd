// FACTORY FUNCTION *PREFERIDA POR MIM

let celular = {

    marca: 'Samsung',
    preço: 2500,
    modelo: 'Galaxy S',
    bomEstado: true,
    detalhes:{
        bateria: 6000,
        gramas: 350      
    },
    ligar(){
        if(this.bomEstado === true){
            console.log('Ligando Normalmente');
        }
        else{
            console.log('Não ligando')
        }
    }

}; // Objeto base

// Criando uma função para facilitar a criação de mais objetos celular;

function CriandoCelular(marca,preço,modelo,bomEstado,bateria,gramas){
    return{
        marca,
        preço,
        modelo,
        bomEstado,
        bateria,
        gramas,
        ligar(){
            console.log('Ligando...')
        }
    }
}

let celular1 = CriandoCelular('Motorola',1600,'Moto G',true,4000,300);
let celular2 = CriandoCelular('Apple',5000,'Iphone 7', false, 2000, 320);

console.log(celular);
console.log(celular1);
console.log(celular2);



//CONSTRUCTOR FUNCTION

function Hotdog(sabor,tamanho,valor,vegano){
    this.sabor = sabor,
    this.tamanho = tamanho,
    this.valor = valor,
    this.vegano = vegano,
    this.eBom = function(){
        console.log('Muito Bom!')
    }
};

let pedido1 = new Hotdog('Calabresa e Bacon','Grande',18,false);

console.log(pedido1)