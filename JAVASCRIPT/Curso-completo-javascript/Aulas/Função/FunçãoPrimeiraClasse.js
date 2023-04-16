// Passando funções em parâmetros de funções como callback

function mostrar(f1,f2){
    console.log('Função executada')
    console.log(typeof cf)
    f2()
    f1()
}

function cf(){
        console.log('Retorno Callback')
}

function cf2(){
        console.log('Retorno segundo Callback')
}

mostrar(cf,cf2) // Passando os parâmetros

console.log('***********************************************************')

// Passando funções em objetos

const obj = {
    cf,
    cf2
}

obj.cf()
obj.cf2()

console.log('***********************************************************')

// Retorno da função retornando uma função

function freturn(){
    return ()=>{
        console.log('Retorno da função _freturn')
    }
}

let funcao1 = freturn() // Como o retorno seria a arrow funtion então a variável funcao1 se torna uma função

funcao1()







