// Para nomear a função é recomendável usar: VERBO + SUBSTANTIVO.

let carro = "Pálio Preto"

function trocaInfo(modelo, cor){

    carro = `${modelo} ${cor}`;

};

console.log(carro);
trocaInfo('Corsa', 'Verde');
console.log(carro);


// Há 3 maneiras de criálas

function somar(){
    // Declarada
}

const somar1 = function(){
    // Expressada
}

const somar2 = ()=>{
    // Arrow Function
}