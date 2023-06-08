(function(m1,m2,m3){
    'use strict' // Recomendável para não deixar esquecer de usar let ou const
    let x = false // É necessário usar let ou const se não irá aparecer no escopo global
    function init(){
        console.log('modal',x,m1,m2,m3)
    }
    init()
})('modal1', 20000, true) // Definir os parámetros da função