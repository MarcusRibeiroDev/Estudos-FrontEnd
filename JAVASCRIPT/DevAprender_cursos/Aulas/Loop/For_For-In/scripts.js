//@@@ For, cria uma variável, coloca condição e adiciona incremento ou decremento...

// Imprimindo números pares do 1 ao 10

/*for(let i = 1; i <= 10; i++){
    if(i % 2 === 0) // A sobra de i dividido por 2 for diferente de 0
    console.log(i)
}*/

//@@@ */ For-In, Criar loops com objetos e array...

let pessoa = {
    nome: 'Marcus',
    idade: 20
};

for(let key in pessoa){
    console.log(key);
}; // Mostrar as propriedades

for(let key in pessoa){
    console.log(pessoa[key]);
}; // Mostrar os valores

let cores = ['Amarelo','Vermelho','Verde'];

for(let index in cores){
    console.log(index, cores[index]);
}; // Somente o index mostra a posição do elemento e array[index] mostra os valores...

