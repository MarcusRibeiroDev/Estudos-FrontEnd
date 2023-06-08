const txtEmail = document.getElementById("txtEmail")

function editEmail(){
    txtEmail.disabled = false // Desabilitando o Disabled
    txtEmail.focus() // Foca a digitação diretamente para dentro do input
}

function editBlocked(){
    txtEmail.disabled = true // Habilitando o Disabled
} // -> onblur irá ativar quando tocar fora do elemento, no caso do input que está no HTML
