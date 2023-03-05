(function(){

    // CRIANDO BLOQUEI DE ENVIO DE FORMULÁRIO CASO O TÍTULO NÃO SEJA PREECHIDO e ADICIONANDO O STYLE NO ALERT********************************************************

    'use strict';

    const formCadastro = document.querySelector('.formCadastro')

    const txtTitulo = document.querySelector('#txtTitulo')

    const feedbackMsg = document.querySelector('#feedbackMessage')

    const feedbackMsgClose = feedbackMsg.getElementsByTagName('button')[0]

    formCadastro.addEventListener('submit',function(e){
        if(!txtTitulo.value){
            showError('Você precisa escrever algo',function(){
                txtTitulo.focus() // Foca no input escolhido
            })
            e.preventDefault() // Previni o evento padrão de acontecer
        }
    }) // submit no 1º parâmetro irá ativar quando algum evento de "submit" acontecer nesse elemento que recebe o evento

    function showError(msg,cb){
        
        feedbackMsg.classList.add('show') // Adicionar uma classList sem alterar outra mesma
        feedbackMsg.firstElementChild.textContent = msg
        feedbackMsgClose.focus()

        function hideError(){
            
            console.log('clicou')

            feedbackMsg.classList.remove('show') //  Remover uma classList

            feedbackMsgClose.removeEventListener('click', hideError)

            feedbackMsgClose.removeEventListener('keyup', pressedEsc)

            if(cb === 'function'){
                cb() // Evento callback de autofocus, após clicar em fechar aviso
            }

        }

        function pressedEsc(e){
            if(e.keyCode === 27){
                hideError()
            }
        }

        feedbackMsgClose.addEventListener('click', hideError)

        feedbackMsgClose.addEventListener('keyup', pressedEsc)

    }

    // CRIANDO CONTAGEM AUTOMÁTICA DO CONTADOR********************************************************

    const contadorContainer = document.querySelector('#contador')

    const contadorDigito = contadorContainer.querySelector('span')

    const txtDescricao = document.querySelector("#txtDescricao")

    const contadorMax = txtDescricao.maxLength

    contadorContainer.removeAttribute('style')

    contadorDigito.textContent = contadorMax

    txtDescricao.addEventListener('input', function(){
        let caracterDigitado = this.value.length
        let caracterSobra = parseInt(contadorMax - caracterDigitado)
        contadorDigito.textContent = caracterSobra
    }) // Evento input irá ocorrer sempre que houver alguma alteração no input

    // OCULTAR BOTÃO ADICIONAR********************************************************

    const btnSubmit = document.querySelector('#btn')

    btnSubmit.disabled = true

    let checkBox1 = document.getElementById('responsability')

    checkBox1.addEventListener('change',function(){
        btnSubmit.disabled = !this.checked
    })

})()