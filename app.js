class jogador{
    constructor(nome, clube, idade){
        this.nome = nome;
        this.clube = clube;
        this.idade = idade;
    }
    getNome(){
        return this.nome;
    }
    getClube(){
        return this.clube;
    }
    getIdade(){
        return this.idade;
    }
}

let listajogadores = [];

function criarjogador(){
    let nome = prompt('Digite o nome do jogador: ');
    let clube = prompt('Digite o clube do jogador: ');
    let idade = Number(prompt('Digite a idade do jogador: '));
    let player = new jogador(nome, clube, idade);
    listajogadores.push(player);
}

function mostrarjogadores(){
    document.write('<h1>Jogadores cadastrados: </h1>');
    for (let i = 0; i < listajogadores.length; i++) {
        let jogador = listajogadores[i];
        document.write("<p>Nome: " + jogador.getNome() + ", Clube: " + jogador.getClube() + ", Idade: " + jogador.getIdade() + "</p>");
    };
}
