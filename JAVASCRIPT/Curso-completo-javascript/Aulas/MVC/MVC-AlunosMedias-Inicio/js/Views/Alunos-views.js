class AlunosView {
    constructor(tableDom){
        this.tableList = tableDom
        this.theadDom = this.tableList.querySelector('thead')
        this.tbodyDom = this.tableList.querySelector('tbody')
        this.materias = ['portugues', 'matematica', 'historia', 'ciencias']
        
        this.renderHeader()
    }

    renderHeader(){
        const htmlHeader = document.createElement('tr')
    
        const htmlHeaderMaterias = this.materias.map((m) => {
            return `<td>${m}</td>`
        }).join("")
        /// join() serve para juntar todos os elementos do array em uma única string
    
        htmlHeader.innerHTML = '<td>Nome</td>'
        htmlHeader.innerHTML += htmlHeaderMaterias
    
        this.theadDom.appendChild(htmlHeader)
    
        // Percorrer cada aluno do objeto alunos e gerar uma tr com as notas
    }

    render(alunosArray){
        alunosArray.forEach((a)  => {
            const htmlBody = document.createElement('tr')
            let htmlMedias = `<td>${a.nome}</td>`
    
            this.materias.forEach((m) => {
                htmlMedias += `<td>${a.media[m]}</td>`
            })
    
            htmlBody.innerHTML = htmlMedias
            this.theadDom.appendChild(htmlBody)
        })
    }
}