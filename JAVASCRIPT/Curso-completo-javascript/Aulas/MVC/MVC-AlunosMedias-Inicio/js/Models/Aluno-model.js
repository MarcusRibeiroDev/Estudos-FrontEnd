class AlunoModel{
    // Essa sintaxe de parâmetros, deixa a propriedade notas como optativa, caso não seja passa será um valor default de {}
    constructor({nome, _id, notas} = {notas: {}}){
        this.nome = nome
        this._id = (_id !== undefined) ? _id : this.generateId()
        this.notas = {...notas}

        if(this._id > AlunoModel.maxId){
            AlunoModel.maxId = this._id
        }

        this.media= {}

        for(let e in this.notas){
            this.media[e] = avarege(...this.notas[e]) // Adiciona as propriedades materias em media , que seria as propriedades dentro de notas
        }
    }

    generateId(){
        return AlunoModel.maxId + 1
    }
}

AlunoModel.maxId = 0