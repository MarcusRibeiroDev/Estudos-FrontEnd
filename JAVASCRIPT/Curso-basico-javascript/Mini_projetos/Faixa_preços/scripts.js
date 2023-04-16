function CriarFaixa(tooltip,min,max){
    return{
        tooltip,
        min,
        max
    };
};

let faixa = [
    CriarFaixa('a',0,500),
    CriarFaixa('b',500,1000),
    CriarFaixa('c',1000,2000)
];

console.log(faixa)