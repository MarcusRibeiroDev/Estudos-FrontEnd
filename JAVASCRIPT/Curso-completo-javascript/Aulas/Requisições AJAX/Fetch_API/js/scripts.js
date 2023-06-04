// Variáveis gerais
const url = "https://jsonplaceholder.typicode.com/posts"
const loadingElement = document.querySelector("#loading")

// Variáveis do index.html
const postsContainer = document.querySelector("#posts-container")

// Variáveis do post.html
const postPage = document.querySelector("#post")
const postContainer = document.querySelector("#post-container")
const commentsContainer = document.querySelector("#comments-container")
const commentForm = document.querySelector("#comment-form")
const emailInput = document.querySelector("#email")
const commentInput = document.querySelector("#body")

// Pegar o id do post clicado
const uidParams = new URLSearchParams(window.location.search)
const userId = uidParams.get("id")

// Ativar a função getAllPosts() referente a funcionabilidade de index.html, caso o userId não tiver id na url válido, na página post ativar a função getPost()
// referente a funcionabilidade de post.html
if(!userId){
    getAllPosts()
} else{
    getPost(userId)

    // Adicionando o evento de submit no formulário

    commentForm.addEventListener("submit", (event) => {
        event.preventDefault()

        let structureComment = {
            email: emailInput.value,
            body: commentInput.value
        }

        const commentJSON = JSON.stringify(structureComment)

        postComment(commentJSON)
    })
}

async function postComment(comment){
    const response = await fetch(`${url}/${userId}/comments`, {
        method: "POST",
        body: comment,
        headers: {
            "Content-type": "application/json",
        },
    })

    const data = await response.json()

    createComments(data)
} // Função usando POST para enviar comentário

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
        link.setAttribute("href", `post.html?id=${post.id}`)

        div.appendChild(title)
        div.appendChild(body)
        div.appendChild(link)

        postsContainer.appendChild(div)
        
    })  
}

async function getPost(id){

    const [responsePost, responseComments] = await Promise.all([
        fetch(`${url}/${id}`),
        fetch(`${url}/${id}/comments`)
    ]) // Realizando 2 requisições de uma vez e de forma performática

    const responsePostObj = await responsePost.json()
    const responseCommentsObj = await responseComments.json()

    loadingElement.classList.add("hide")

    postPage.classList.remove("hide")

    const title = document.createElement('h1')

    const body = document.createElement('p')

    title.innerHTML = responsePostObj.title

    body.innerHTML = responsePostObj.body

    postContainer.appendChild(title)
    postContainer.appendChild(body)

    responseCommentsObj.map((comment) => {
        createComments(comment)
    })

}

function createComments(c) {

    const div = document.createElement('div')
    const email = document.createElement('h3')
    const body = document.createElement('p')

    email.innerHTML = c.email
    body.innerHTML = c.body

    div.appendChild(email)
    div.appendChild(body)

    commentsContainer.appendChild(div)
} // Função criada paga gerar comentário 




