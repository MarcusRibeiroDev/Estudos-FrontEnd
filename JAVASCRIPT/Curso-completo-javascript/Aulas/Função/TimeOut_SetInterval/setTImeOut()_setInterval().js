setTimeout(function ativate(){
    console.log("Ativada")
}, 3000) // Irá ativar após 2 seg

let n = 0;

const intervalFunction = setInterval(() => {
    console.log(`Intervalo criado ${n}`)
    n += 1
    if(n > 5){
        clearInterval(intervalFunction) // Irá parar a repetição
    }
}, 2000); // Irá ativar a cada 5 seg