function somar(n: number, y:number): void{
    console.log(n + y)
} // Void é usado para funções que você não deseja nenhum retorno, porém retorna "por baixo dos panos" um undefined


console.log(somar(20,56))

function mostrarErro(msg: string): never{
    throw new Error("Você é burro")
} // Never é usado para funções que jamais iram retorna qualquer coisa, mais usadas para funções de catch (lançar erro)
