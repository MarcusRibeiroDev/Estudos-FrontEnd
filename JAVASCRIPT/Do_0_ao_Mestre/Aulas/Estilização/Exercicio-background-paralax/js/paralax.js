(function(){

    const dataParalaxArray = Array.from(document.querySelectorAll('[data-paralax]'))

    window.addEventListener('scroll', getPositionImage)

    function getNewPositionImage(element){
        let velocity = parseFloat(element.getAttribute('data-p-velocity')) || 0.4

        return element.getBoundingClientRect().top * velocity * -1
    }

    function gettingOut(element){
        return element.getBoundingClientRect().top < 0
    } // Verifica se o elemento está saindo do viewport

    function getPositionImage(){
        dataParalaxArray.forEach((e)=>{
            let positionY = getComputedStyle(e).backgroundPositionY // Pegando o valor de backgroundPositionY no CSS
            let positionX = getComputedStyle(e).backgroundPositionX // Pegando o valor de backgroundPositionX no CSS

            if(gettingOut(e)){
                e.style.backgroundPosition = `${positionX} ${getNewPositionImage(e)}px`
            } // Caso o elemento realmente estiver saindo irá acionar a função
        })
    }

    getPositionImage()
})()