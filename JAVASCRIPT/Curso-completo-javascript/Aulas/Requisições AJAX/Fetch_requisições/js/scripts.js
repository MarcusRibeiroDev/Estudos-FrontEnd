const url = "https://jsonplaceholder.typicode.com/posts"

const loadingElement = document.querySelector("#loading")
const postsContainer = document.querySelector("#posts-container")

//  Pegar todos os posts

async function getAllPosts(){

    const response = await fetch(url) // Substitui as promisses e then
    const data = await response.json() // Retorna para variável data o json do objeto que era o response, é necessário usar o await para substituir o then

    loadingElement.classList.add("hide") // Adiciona um display none no elemento

    data.map((post) =>{

        const div = document.createElement("div")
        const title = document.createElement("h2")
        const body = document.createElement("p")
        const link = document.createElement("a")

        title.innerText = post.title
        body.innerText = post.body
        link.innerText = "Ler"
        link.setAttribute("href", `/post.html?id=${post.id}`)

        div.appendChild(title)
        div.appendChild(body)
        div.appendChild(link)

        postsContainer.appendChild(div)
        
    })  
}

getAllPosts()