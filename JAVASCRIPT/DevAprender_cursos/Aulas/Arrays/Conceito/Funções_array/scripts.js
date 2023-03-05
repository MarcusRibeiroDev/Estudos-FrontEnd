console.log('1 **************************************************');
// ADICIONANDO ELEMENTOS
const numeros = [1,2,3];
numeros.unshift('primeiro'); // PRIMEIRO
numeros.splice(3,0,'qualquerLugar');// QUALQUER LUGAR - POSIÇÃO,QUANTOS REMOVER,ELEMENTO
numeros.push('final'); // FINAL
console.log(numeros);


console.log('2 **************************************************');
// REMOVENDO ELEMENTOS
const frutas = ['Uva','Pera','Laranja','Maça','Limão'];
frutas.shift(); // INICIO
frutas.pop(); // FINAL
frutas.splice(1,1); // QUALQUER LUGAR - POSIÇÃO, QUANTOS REMOVER
console.log(frutas);


console.log('3 **************************************************');
// ENCONTRANDO(ou NÃO) E VERIFICANDO ELEMENTOS
const lista = [10,20,30,40,10];
console.log(lista.indexOf(30)); // MOSTRA A POSIÇÃO
console.log(lista.lastIndexOf(10)); // MOSTRA A POSIÇÃO DA ULTIMA OCORRENCIA DO VALOR PROCURADO
console.log(lista.includes(60)); // MOSTRA SE TEM OU NÃO O ELEMENTO


console.log('4 **************************************************');
// ENCONTRANDO(ou NÃO) E VERIFICANDO ELEMENTOS(TIPOS DE REFERÊNCIA)
const calcados = [
    {id:1,nome:'aaaaa',marca:'nike'},
    {id:2,nome:'ccccc',marca:'adidas'}
];
let nike = calcados.find(function(x){
    return x.marca === 'nike';
}); // O PARAMETRO DA FUNÇÃO REPRESENTA O ELEMENTO PROCURADO
let adidas = calcados.find(function(y){
    return y.marca === 'adidas';
}); // O PARAMETRO DA FUNÇÃO REPRESENTA O ELEMENTO PROCURADO
console.log(nike);
console.log(adidas);


console.log('5 **************************************************');
// ESVAZIANDO ARRAY
const mixLista = [true,10,'Ovo',false,100,'Preto'];
mixLista.length = 0;
console.log(mixLista);

console.log('6 **************************************************');
// CONCATENAR OU DIVIDIR 
// .concat and .slice
const letras = ['a','b','c','d','e','f'];
const letras1 = ['g','h','i','j','k','l'];
let concatenarArray = letras.concat(letras1);
console.log(concatenarArray);
let dividirArray = letras.slice(0,3);
console.log(dividirArray);
// SPREAD --- MAIS SIMPLES
let numeroEletra = [1,2,3];
let numeroEletra1 = [4,5,6];
let concatenadoSpread = [...numeroEletra,'%',...numeroEletra1]; // UNINDO ARRAYS E ELEMENTO
console.log(concatenadoSpread);
let clonado = [...numeroEletra1]; // CLONANDO UM ARRAY
console.log(clonado);

console.log('7 **************************************************');
// USANDO O LOOP EM ARRAY COM FOREACH
const produtos = ['Calça','Camisa','Blusa','Sapato','Meia'];
let produtoComIndice = produtos.forEach((produto,index) => {
    console.log(produto,index)
}); // Primeiro parametro é o valor e depois o indice.

console.log('8 **************************************************');
// COMBINANDO ARRAY
const frase = 'O meu nome é Marcus Eduardo Costa Ribeiro';
const arraySeparado = frase.split(' '); // SEPARAR
let arraySeparado1 = arraySeparado.join('-'); // JUNTAR ARRAY COM '-'     
console.log(arraySeparado1);


