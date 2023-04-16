alunos.forEach(aluno => {
    aluno.media = {} // Adiciona a propriedade "media" dentro de aluno em alunos

    for(materia in aluno.notas){
        aluno.media[materia] = avarege(...aluno.notas[materia]) // Adiciona as propriedades materias em media , que seria as propriedades dentro de notas
    }
})

console.log(alunos)