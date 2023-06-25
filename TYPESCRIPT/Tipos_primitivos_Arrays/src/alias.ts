type testeAlias = number | string // Usando conceito de alias

let testReal: testeAlias

testReal = 50

testReal= "Marcus"

// Usando o conceito de enum com alias

type Sizes123 = "12px" | "18px" | "24px"

const small: Sizes123 = "12px"
const medium: Sizes123 = "18px"
// const large: Sizes123 = "23px" // Falhou por corta de não estar no padrão do alias do Sizes123

// Usando alias com objetos

type User = {
    nome: string,
    idade?: number
}

const jogador1: User = {
    nome: "Marcus",
    idade: 20
}

const jogador2: User = {
    nome: "Sabrina",
    idade: 46
}