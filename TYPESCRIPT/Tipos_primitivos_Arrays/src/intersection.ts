type Level = "Aprendiz" | "Junior" | "Gerente"

type Gerente = {
    setor: string,
    salario?: number
}

type User = {
    nome: string,
    boss: true,
    level: Level
}

type UserAdm = User & Gerente

let marcus123: UserAdm = {
    nome: "Marcus",
    boss: true,
    level: "Gerente",
    setor: "Tecnologia",
    salario: 5000
}

export default 1