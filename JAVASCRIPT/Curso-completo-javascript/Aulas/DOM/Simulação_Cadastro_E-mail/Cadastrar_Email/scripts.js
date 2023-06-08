const emailUser = document.getElementById('txtEmail')
const msgSucess = document.getElementById('newsletterFeedback')

function saveEmail(){
    let email = emailUser.value // Recuperar valor de input
    msgSucess.innerHTML =  `O email: ${email} foi salvo com sucesso`
}