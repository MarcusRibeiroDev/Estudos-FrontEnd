const operações = {

    value: 0,

    somar(n){
        this.value += n
        return this
    },

    subtrair(n){
        this.value -= n
        return this
    },

    log(){
        console.log(this.value)
        return this
    }

}

operações.somar(10).subtrair(5).log()

