
// VARIÁVEIS

const inputNew = document.querySelector('#item-input')
const addItem = document.querySelector('#add-item')
const formTask = document.querySelector('#todo-add')
const ul = document.querySelector('#todo-list')
let lis = ul.getElementsByTagName('li')

// let arrayTasks = [] // Estrutura de dados fictícia *SEM LOCAL STORAGE

let arrayTasks = getSavedData()

function getSavedData(){
    let taskData =  localStorage.getItem('tasksData')
    taskData = JSON.parse(taskData)
    return taskData && taskData.length ? taskData : [] // Precisa da verificação se o dado existe ou se ele tem conteúdo, caso o usuário limpe não de erro no código
}

function setSavedData(){
    localStorage.setItem('tasksData', JSON.stringify(arrayTasks))
    renderTask()
}

setSavedData()

function generateTask(obj){

    const li = document.createElement('li')
    const p = document.createElement('p')
    const buttonLi = document.createElement('button')
    const i1 = document.createElement('i')
    const i2 = document.createElement('i')

    buttonLi.className = 'button-check'
    buttonLi.innerHTML = `<i class="fas fa-check ${obj.completed ? '' : 'displayNone'}" data-event="check"></i>`
    buttonLi.setAttribute('data-event', 'check')
    i1.className = 'fas fa-edit'
    i1.setAttribute('data-event', 'edit')
    i2.className = 'fas fa-trash-alt'
    i2.setAttribute('data-event', 'delete')
    li.className = 'todo-item'
    p.className = 'task-name'
    p.textContent = obj.name

    const containerEdit = document.createElement('div')
    containerEdit.className = 'editContainer'
    const inputEdit = document.createElement('input')
    inputEdit.setAttribute('type', 'text')
    inputEdit.className = 'editInput'
    inputEdit.value = obj.name

    containerEdit.appendChild(inputEdit)
    const containerEditButton = document.createElement('button')
    containerEditButton.className = 'editButton'
    containerEditButton.textContent = 'Edit'
    containerEditButton.setAttribute('data-event', 'editButton')
    containerEdit.appendChild(containerEditButton)
    const containerCancelButton = document.createElement('button')
    containerCancelButton.className = 'cancelButton'
    containerCancelButton.textContent = 'Cancel'
    containerCancelButton.setAttribute('data-event','cancelButton')
    containerEdit.appendChild(containerCancelButton)


    li.appendChild(buttonLi)
    li.appendChild(i1)
    li.appendChild(containerEdit)
    li.appendChild(i2)
    li.appendChild(p)

    return li
} // Criando a li e usando o "obj".name

function renderTask(){

    ul.innerHTML = ''
    arrayTasks.forEach(function(e){
        ul.appendChild(generateTask(e))
    })

} // Adiciona as li na ul, mostrando na tela

function addtask(task){

    arrayTasks.push(
        {
            name: task,
            date: Date.now(),
            completed: false
        }
    )

    setSavedData()

} // Adicionando a task (objeto) no arrayTasks

function eventsInside(e){

    const clickedEvent = e.target.getAttribute('data-event')

    if(!clickedEvent)return // Bloquear a função caso tenha clicado em algo que não tenha data-event

    //

    let currentLi = e.target
    while(currentLi.nodeName !== 'LI'){

        currentLi = currentLi.parentElement

    } // Irá procuar o pai do elemento atual clicado até ser a LI, Objetivo: Saber em qual li foi clicado

    // 

    currentLiIndex = Array.from(lis).indexOf(currentLi) // Encontrando o index da LI

    //

    const eventsInsideLi = {

        edit: function(){

            let editContainerCurrentLi = currentLi.querySelector('.editContainer')
            Array.from(ul.querySelectorAll('.editContainer')).forEach(function(e){
                e.removeAttribute('style')
            }) // Selecionando todas as div = .editContainer e excluindo o atributo style
            editContainerCurrentLi.style.display = 'flex'

        },

        delete: function(){

            arrayTasks.splice(currentLiIndex,1)
            renderTask()
            // currentLi.remove()
            setSavedData()

        },

        check: function(){

            arrayTasks[currentLiIndex].completed = !arrayTasks[currentLiIndex].completed // Alterar propriedade completed do obj no arrayTasks

            /* if(arrayTasks[currentLiIndex].completed){
                currentLi.querySelector('.fa-check').classList.remove('displayNone')
            } else{
                currentLi.querySelector('.fa-check').classList.add('displayNone')
            } */ // Mudando apenas o DOM, não iria funcionar usando LocalStorage

            renderTask()
            setSavedData()

        },

        editButton: function(){

            const val = currentLi.querySelector('.editInput').value
            arrayTasks[currentLiIndex].name = val
            renderTask()
            setSavedData()

        },

        cancelButton: function(){

            let editContainerCurrentLiCancel = currentLi.querySelector('.editContainer')
            editContainerCurrentLiCancel.style.display = 'none'

        }

    }

    if(eventsInsideLi[clickedEvent]){

        eventsInsideLi[clickedEvent]()

    }

}

ul.addEventListener('click', eventsInside)

formTask.addEventListener('submit',function(e){

    e.preventDefault()
    addtask(inputNew.value)
    renderTask() // Sempre que clicar botão 'Add', irá zerar a ul e renderizar novamente com a task nova adicionada
    inputNew.value = ''
    inputNew.focus()

});