// Calcula a média por materia de cada aluno e cria uma propriedade chamada media ↓
alunos.forEach(aluno => {
    aluno.media = {} // Adiciona a propriedade "media" dentro de aluno em alunos

    for(materia in aluno.notas){
        aluno.media[materia] = avarege(...aluno.notas[materia]) // Adiciona as propriedades materias em media , que seria as propriedades dentro de notas
    }
})

console.log(alunos)

// Inserir no thead "nome" e as materias ↓
const htmlHeader = document.createElement('tr')

const htmlHeaderMaterias = Object.keys(alunos[0].notas).map((m) => {
    return `<td>${m}</td>`
}).join("")
// Object.keys() recebe um objeto, e retorna um array contendo todas as propriedades do objeto
/// join() serve para juntar todos os elementos do array em uma única string

htmlHeader.innerHTML = '<td>Nome</td>'
htmlHeader.innerHTML += htmlHeaderMaterias

document.querySelector('[data-table] thead').appendChild(htmlHeader)

// Percorrer cada aluno do obejto alunos e gerar uma tr com as notas

alunos.forEach((aluno)  => {
    const htmlBody = document.createElement('tr')
    let htmlMedias = `<td>${aluno.nome}</td>`

    Object.keys(aluno.notas).forEach((m) => {
        htmlMedias += `<td>${aluno.media[m]}</td>`
    })

    htmlBody.innerHTML = htmlMedias
    document.querySelector('[data-table] tbody').appendChild(htmlBody)
})