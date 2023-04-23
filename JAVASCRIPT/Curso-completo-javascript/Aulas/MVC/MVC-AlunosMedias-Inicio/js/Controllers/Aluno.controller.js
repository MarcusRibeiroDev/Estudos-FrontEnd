class AlunosController{
    constructor(service, view){
        view.render(service.alunos)
        this.service= service
        this.view = view
    }

    add(alunoNome){
        this.service.add(new AlunoModel(alunoNome))
        this.view.render(this.service.alunos)
    }
}