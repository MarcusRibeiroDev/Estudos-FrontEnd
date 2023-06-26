const domElement = document.querySelector("teste") as HTMLButtonElement // Essa código está sendo tratado como um elemento HTML somente, porém caso o retorno seja algo diferente de um element vai dar erro

domElement.addEventListener("click", (e)=>{console.log("ElementDOM Capturado")})