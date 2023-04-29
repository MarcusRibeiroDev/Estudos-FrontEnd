class AlunosView {
    constructor(tableDom,materias){
        this.tableList = tableDom
        this.theadDom = this.tableList.querySelector('thead')
        this.tbodyDom = this.tableList.querySelector('tbody')
        this.materias = materias
        
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
        this.tbodyDom.innerHTML = ''

        alunosArray.forEach((a)  => {
            const htmlBody = document.createElement('tr')
            let htmlMedias = `<td>${a.nome}</td>`
            let founded = false

            this.materias.forEach(materia => {
                if(materia in a.notas){
                    founded = true
                }
            })

            if(founded){
                this.materias.forEach((m) => {
                    htmlMedias += `<td>
                    ${a.media[m] !== undefined ? a.media[m] :
                    `<a href="edit.html?id=${a._id}">Incluir Nota</a>`}
                    </td>`
                })
            }else{
                htmlMedias += `<td colspan='${this.materias.length}'>
                <a href="edit.html?id=${a._id}">Incluir Notas</a>
                </td>`
            }
    
            htmlBody.innerHTML = htmlMedias
            this.tbodyDom.appendChild(htmlBody)
        })
    }
}