
let estoqueCaneta = {
    Quantidade: 10,
    subtrairEstoque(n){
        if(n > this.Quantidade){
            console.log('Estoque menor que n');
        }
        this.Quantidade -= n;
    },
}

estoqueCaneta.subtrairEstoque(11);

console.log(estoqueCaneta.Quantidade);