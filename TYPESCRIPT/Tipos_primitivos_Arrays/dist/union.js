"use strict";
const Obj = {
    nome: "Marcus",
    idade: 12,
    msg: ["Oi", 1]
};
function concatenar(obj1, obj2) {
    if (obj1 === "number" && obj2 === "number") {
        console.log(obj1 + obj2);
    }
    else {
        console.log(`${obj1} ${obj2}`);
    }
} // Permite adicionar uma ou outra opção
