class AlunosService{
    constructor(){
        this.alunos = []
        this.updateAlunosFromLocalStorage()

    }

    add(aluno){
        if(!aluno instanceof AlunoModel){
            throw TypeError('Aluno must be instance of AlunoModel')
        }
        this.alunos.push(aluno)
        this.updateLocalStorage()
    }

    searchById(id){
        return this.alunos.find(aluno => aluno._id === id)
    }

    updateLocalStorage(){
        const alunosJson = JSON.stringify(this.alunos) // Transforma informações em string na forma de JSON
        localStorage.setItem('alunosList', alunosJson) // Colcando as informações no LocalStorage
    } // Armazenando dados no LocalStorage

    updateAlunosFromLocalStorage(){
        const local = localStorage.getItem('alunosList')
        if(local){
            const alunos = JSON.parse(local)
             alunos.forEach((a)=>{
               this.add(new AlunoModel(a))
            })
        }
    }
}