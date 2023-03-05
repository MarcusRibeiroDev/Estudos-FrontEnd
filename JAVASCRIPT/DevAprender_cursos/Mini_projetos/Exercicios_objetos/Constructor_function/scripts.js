// BOAS PRATICAS> começar a função com maiúscula

function CriandoPostagem(titulo,mensagem,autor){
    return{
        titulo:titulo,
        mensagem:mensagem,
        autor:autor,
        viwes:0,
        comentarios:[],
        estaAoVivo: false
    };
};

let postagem = CriandoPostagem('a','b','c');

console.log(postagem);

function CriandoPostagem1(titulo1,mensagem1,autor1){
    this.titulo1,
    this.mensagem1,
    this.autor1,
    this.comentarios1 = [],
    this.estaAoVivo = false
};

let postagem1 = new CriandoPostagem1('y','x','z')

console.log(postagem1);
