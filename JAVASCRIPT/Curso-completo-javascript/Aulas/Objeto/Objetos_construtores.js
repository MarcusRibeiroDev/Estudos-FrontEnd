function CreateObj(n,i){
   'use strict'
   let _name = n  
   this.idade = i 
   this.updateAt = new Date()
   this.change = function(newN){
        _name = newN
   }
   this.getName = function(){
    return _name
   }
}

const obj1 = new CreateObj('task1',20) // Caso o usuário esqueça de colocar o operador new, o this irá definir as propriedades no escopo global, para evitar é só colocar o 'use strict'

console.log(obj1)
obj1.change('nova task')
console.log(obj1.getName()) // ÚNICO JEITO DE O USUÁRIO VER O NAME, IMPEDINDO DELE ALTERAR O NAME como é possivel por exemplo alterar a idade com o obj1.idade = x