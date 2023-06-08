(function(){
    const nameUser = 'Marcus'

    if(nameUser){
        // ITEM CRIADO APENAS NA "MEMÓRIA", NECESSÁRIO ADICIONAR NA ÁRVORE DO DOM

        const createdElement = document.createElement('div') // Criando elemento
        createdElement.className = 'top-bar' // Atribuindo uma class para o elemento
        createdElement.innerHTML = `<p>Olá, ${nameUser} <b></b></p>` // Criando HTML do interior do elemento

        // INSERINDO ELEMENTO NA ÁRVORE DO DOM

        const parentElement = document.querySelector('.hero')
        // Elemento pai, insertBefore(Elemento novo, Referência)
        parentElement.insertBefore(createdElement, parentElement.firstElementChild) 
    }

})()