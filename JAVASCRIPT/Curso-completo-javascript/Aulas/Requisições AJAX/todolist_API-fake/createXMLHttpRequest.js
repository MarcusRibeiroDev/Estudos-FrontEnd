export function createXMLHttpRequest(method, url, cb, data = null){
    const xhr = new XMLHttpRequest()

    /*
    1 - Instânciar o objeto XMLHttpRequest
    2 - Usar o método open e enviar o tipo de requisição, e depois a URL que ele irá
    */

    xhr.open(method, url)
    xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8")
    xhr.send(data)

    xhr.onreadystatechange = verificaAjax

    function verificaAjax(){
        if(xhr.readyState === 4){
            if(xhr.status < 400){
                let jason = JSON.parse(xhr.responseText) // Recupera as informações em json e as transforma em objeto
                cb(jason)
            }
            else if(typeof cb === 'function'){
                cb({
                    error: true,
                    status: xhr.status,
                    message: 'Erro'
                })
            }
        }
    }
}