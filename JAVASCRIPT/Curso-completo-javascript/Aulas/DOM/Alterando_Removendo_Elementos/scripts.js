(function(){
    const nameUser = null
    const lastName = 'Ribeiro'
    const headerWelcome = document.querySelector('.top-bar p')

    if(nameUser && lastName){
        headerWelcome.innerHTML += `<b>${nameUser} </b>`
        headerWelcome.textContent += lastName // Não renderiza tags HTML
        document.querySelector('.hero-content h1').textContent += ' PARA MARCUS'
    } else {
        // headerWelcome.parentElement.style.display = 'none' // parentElement serve para acessar o pai da propriedade anterior
        // headerWelcome.parentElement.remove()
        // const elementToRemove = headerWelcome.parentElement 
           elementToRemove.parentElement.removeChild(elementToRemove)
    }

})()