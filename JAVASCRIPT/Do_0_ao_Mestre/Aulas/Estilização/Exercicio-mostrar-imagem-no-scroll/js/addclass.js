(function(){

    let cards = [...document.querySelectorAll('[data-addclass-on-scroll]')]

    window.addEventListener('scroll', addClassOnScroll)

    function addClassOnScroll(){

        cards.forEach(el => {

            if(isElementVisible(el)){
                let delayElement = el.getAttribute('data-addclass-on-scroll-delay') || 0
                // Pegando o valor do atributo para adicionar um delay no aparecimento da imagem

                setTimeout(function(){
                    el.classList.add('show')
                }
                ,delayElement)
            }
        })

    }

    function isElementVisible(el){
        let rect = el.getBoundingClientRect()
        return (rect.top <= 0 && rect.bottom >= 0) || (rect.top >= 0 && rect.bottom <= innerHeight)
        // Caso essa pergunta retorne true, o elemento está visível na viewport
    }

})()