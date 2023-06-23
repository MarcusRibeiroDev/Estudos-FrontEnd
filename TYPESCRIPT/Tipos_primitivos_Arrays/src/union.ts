const Obj: {   
    nome: string,
    idade: number,
    msg: [number|string, number|string] // Permite adicionar uma ou outra opção
} = {
    nome: "Marcus",
    idade: 12,
    msg: ["Oi", 1]
}

function concatenar(obj1: number|string, obj2: number|string): void{
    if(obj1 === "number" && obj2 === "number"){
        console.log(obj1 + obj2)
    } else{
        console.log(`${obj1} ${obj2}`)
    }
}  // Permite adicionar uma ou outra opção