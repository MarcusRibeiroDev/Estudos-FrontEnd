class AlunosService{
    constructor(){
        this.alunos = []

    }

    add(aluno){
        if(!aluno instanceof AlunoModel){
            throw TypeError('Aluno must be instance of AlunoModel')
        }
        this.alunos.push(aluno)
    }

    searchById(id){
        return this.alunos.find(aluno => aluno._id === id)
    }
}