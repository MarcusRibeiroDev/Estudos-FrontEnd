function miar(){
    console.log(this.name,'Miauuuuu')
}

function latir(){
    console.log(this.name,'Auauauau')
}

const cachorro = {
    name: 'Negão',
    falar: latir
}

const gato = {
    name: 'Shena',
    falar(){
        miar.call(this) // Usando call eu consigo chamar o this no escopo do objeto, não do método
    }    
}

cachorro.falar()

gato.falar()
