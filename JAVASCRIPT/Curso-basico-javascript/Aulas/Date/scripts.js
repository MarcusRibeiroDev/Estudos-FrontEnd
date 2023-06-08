let data1 = new Date();

let data2 = new Date("September 11 2002 23:20");

let data3 = new Date(1995,5,21,18,30);

data1.setFullYear(2021);


console.log(data1.toDateString())
console.log(data2.toISOString())
console.log(data3.toTimeString())

// Alguns métodos

let phase = `Data:

A Data de hoje é ${data1.toTimeString()}

`;

console.log(phase)