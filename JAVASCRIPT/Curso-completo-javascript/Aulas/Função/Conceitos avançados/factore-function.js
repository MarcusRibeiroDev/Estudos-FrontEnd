function fazerBolo(sabor){
    let tempoAssando = 0

    return {
        sabor,

        descrever(){
            return `O sabor do bolo é ${this.sabor} e o tempo de preparo é ${tempoAssando} minutos`
        },

        temporizar(t){
            return tempoAssando += t 
        }
    }
}

const bolo1 = fazerBolo("Baunilha")
bolo1.temporizar(60)
console.log(bolo1.descrever())

const bolo2 = fazerBolo("Chocolate")
bolo2.temporizar(40)
bolo2.temporizar(5)
console.log(bolo2.descrever())