const alunos = [
    {
      _id: 0,
      nome: "chico melato",
      notas: {
        portugues: [1, 1, 2, 2],
        matematica: [2, 2, 2, 2],
        historia: [2, 2, 3, 3],
        ciencias: [3, 3, 3, 3],
      },
    },
    {
      _id: 1,
      nome: "talita lima",
      notas: {
        portugues: [4, 4, 4, 4],
        matematica: [4, 4, 5, 5],
        historia: [5, 5, 6, 6],
        ciencias: [7, 7, 8, 9],
      },
    },
];

const alunosService = new AlunosService() // Cria um array para guardar os alunos e disponibiliza suas funções

alunos.forEach((e)=>{
    alunosService.add(new AlunoModel(e))
})

const alunosView = new AlunosView(document.querySelector('[data-table]')) // Passando um elemento do Dom com parametro

const alunosController = new AlunosController(alunosService,alunosView)

const form = document.querySelector('.form-add')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const nome = document.querySelector('#first_name').value

    alunosController.add({nome})
})

/*

NÃO USANDO O M.V.C

// Calcula a média por materia de cada aluno e cria uma propriedade chamada media ↓
alunos.forEach(aluno => {
    aluno.media = {} // Adiciona a propriedade "media" dentro de aluno em alunos

    for(let materia in aluno.notas){
         aluno.media[materia] = avarege(...aluno.notas[materia]) // Adiciona as propriedades materias em media , que seria as propriedades dentro de notas
    }
})

function render(){
    document.querySelector('[data-table] thead').innerHTML = ''
    document.querySelector('[data-table] tbody').innerHTML = '' // Serve para limpar a estrutura html antiga e adicionar a nova

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

    // Percorrer cada aluno do objeto alunos e gerar uma tr com as notas

    alunos.forEach((aluno)  => {
        const htmlBody = document.createElement('tr')
        let htmlMedias = `<td>${aluno.nome}</td>`

        Object.keys(aluno.notas).forEach((m) => {
            htmlMedias += `<td>${aluno.media[m]}</td>`
        })

        htmlBody.innerHTML = htmlMedias
        document.querySelector('[data-table] tbody').appendChild(htmlBody)
    })
}

render()

// Adicionar alunos

const form = document.querySelector('.form-add')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const nome = document.querySelector('#first_name').value

    const novoAluno = {
        _id: ((alunos.length - 1) + 1),
        nome,
        notas: {
          portugues: [1, 1, 2, 2],
          matematica: [2, 2, 2, 2],
          historia: [2, 2, 3, 3],
          ciencias: [3, 3, 3, 3],
        },
    }

    novoAluno.media = {}

    for(materia in novoAluno.notas){
        novoAluno.media[materia] = avarege(...novoAluno.notas[materia]) // Adiciona as propriedades materias em media , que seria as propriedades dentro de notas
    }

    alunos.push(novoAluno)

    render()
})

*/

