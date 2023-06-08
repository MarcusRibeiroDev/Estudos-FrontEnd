let number = 123.90

console.log(number.toString('2')) // Com parâmetro 2 ele transforma o numero em um string com numero binário, com 16 hexadecimal e etc...

console.log(number.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'}))
console.log(number.toLocaleString('pt-PT',{style: 'currency', currency:'EUR'}))
console.log(number.toLocaleString('pt-BR',{style: 'currency', currency:'USD'}))