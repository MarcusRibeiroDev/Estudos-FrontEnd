function add(x: number, y: number){
    return x + y
}

const multiply = (x: number, y: number) => {
    return x * y
}

const subtract: (x: number, y: number)=> number = (x, y)=>{
    return x - y
}

// Exemplo usando os objetos de "intersections"

type Level = "Aprendiz" | "Junior" | "Gerente"

type User = {
    nome: string,
    boss: true,
    level: Level
}

let marcus123: User = {
    nome: "Marcus",
    boss: true,
    level: "Gerente"
}

// Function

type IsAdmin = (user: User)=> boolean

const isBoss: IsAdmin = (user)=>{
    return user.boss
}

isBoss(marcus123) // A saída seria um true

export default 1