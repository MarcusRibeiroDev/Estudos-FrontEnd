(function(m1,m2,m3){
    'use strict' // Recomendável para não deixar esquecer de usar let ou const
    let x = true // É necessário usar let ou const se não irá aparecer no escopo global
    function init(){
        console.log('menu', x,m1,m2,m3)
    }
    init()
})('menu1', 10000, false) // Definir os parámetros da função