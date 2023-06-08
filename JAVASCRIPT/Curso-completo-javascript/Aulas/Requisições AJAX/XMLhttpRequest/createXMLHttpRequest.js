function createXMLHttpRequest(method, url, data = null, cb){
    const xhr = new XMLHttpRequest()

    /*
    1 - Instânciar o objeto XMLHttpRequest
    2 - Usar o método open e enviar o tipo de requisição, e depois a URL que ele irá
    */

    xhr.open(method, url) 
    xhr.send(data)

    xhr.onreadystatechange = verificaAjax

    function verificaAjax(){
        if(xhr.readyState === 4){
            if(xhr.status === 200 || xhr.status === 304){
                let jason = JSON.parse(xhr.responseText) // Recupera as informações em json e as transforma em objeto
                cb(jason)
            }
            else{
                console.log({
                    status: xhr.status,
                    message: 'Erro'
                })
            }
        }
    }
}

function showJson(ref){
    console.log(ref)
}