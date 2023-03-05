/*
0 - 5.9 = Reprovado
6 - 6 - 9.9 = Aprovado
10 - Aluno Exemplar
*/

const reprovado = 5.9;
const aprovado = 6;
const notasDoAluno = [10, 10, 10];

function mediaNotas(notas){
    
    let media = 0;

    for(let nota of notas){
        media += nota;
    } // for...of percorre os valores e for...in as propriedades

   let mediaFinal = media / 3;

   if(mediaFinal <= reprovado){
        return `Aluno reprovado com nota ${mediaFinal.toFixed(2)}`;
   }
   else if(mediaFinal >= aprovado && mediaFinal <= 9.9){
        return `Aluno aprovado com nota ${mediaFinal.toFixed(2)}`;
   }
   else{
        return `Aluno exemplar com nota ${mediaFinal.toFixed(2)}`;
   }

}

resultado = mediaNotas(notasDoAluno);

console.log(resultado);