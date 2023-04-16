const arr = [1,2,3]
let _arr = [4,5,6]

function mostrar(){
    console.log(arguments)
}

mostrar(...arr) // Dividi o array pelos elementos, tratando como 3 parametros nesse caso

function concat(){
    _arr.unshift(...arr)
    console.log(_arr)
}

concat() // Dividi o array pelos elementos, tratando como 3 parametros nesse caso