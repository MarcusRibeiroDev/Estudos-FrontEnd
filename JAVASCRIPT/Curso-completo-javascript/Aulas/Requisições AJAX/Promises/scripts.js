// Criação da promessa

const myPromisse = new Promise((resolve, reject) => {

    const nome = "Marcus"

    if(nome === "Marcus"){

        resolve("Marcus encontrado!")

    } else{

        reject("Não encontrado")

    }

}) // Primeiro instância, ela irá retornar o valor de resolve caso de certo e se der errado irá retornar o valor de reject

myPromisse.then((data) => {
    console.log(data)
})

// Encadeamento de "Then"

const myPromisse2 = new Promise((resolve, reject) => {
    
    const nome = "Marcus"

    if(nome === "Marcus"){

        resolve("Marcus encontrado!")

    } else{

        reject("Não encontrado")

    }

})

myPromisse2.then((data) => {
    return data.toUpperCase()
}).then((data2) => {
    console.log(data2)
})

// Dar fim a um possível erro com "Catch"

const myPromisse3 = new Promise((resolve, reject) => {

    const nome = "Marcus"

    if(nome === "Carlos"){

        resolve("Marcus encontrado!")

    } else{

        reject("Não encontrado")

    }

})

myPromisse3.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(`Erro: ${err}`)
}) //  Caso a função then retorne um erro, a função catch irá dar alguma ação útil ao erro


// Muitas promises sendo executadas juntas usando ALL

const p1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("P1 executado com sucesso...")
    }, 2000)
    
})

const p2 = new Promise((resolve, reject) => {
    resolve("P2 executado com sucesso...")
})

const p3 = new Promise((resolve, reject) => {
    resolve("P3 executado com sucesso...")
})

const resolveAll = Promise.all(([p1, p2, p3])).then((data) => {
    console.log(data)
}) // Usando esse método da class Promise é possível mandar um array de promises e fazer a verificação de todos...

// Usando o Race que irá retornar quem for executado primeiro

const p4 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("P4 executado com sucesso...")
    }, 2000)
    
})

const p5 = new Promise((resolve, reject) => {
    resolve("P5 executado com sucesso...")
})

const p6 = new Promise((resolve, reject) => {
    resolve("P6 executado com sucesso...")
})

const resolveRace = Promise.race(([p4, p5, p6])).then((data) => {
    console.log(data)
})

// Usando o fetch com promisses

const userName = "MarcusRibeiroDev"

fetch(`https://api.github.com/users/${userName}`, {
    method: "GET",
    headers: {
        Accept: "application/vnd.github.v3=json",
    },
}).then((response => {
    console.log(response)
    return response.json()
})).then((data) => {
    console.log(data)
    console.log(`O nome inteiro do dono da conta ${userName}, é ${data.name}`)
})

