/**Crie uma classe chamada Livro com as propriedades titulo (string), autor (string) e anoPublicacao (number).
Implemente um método na classe chamado obterInformacoes, que retorna uma string formatada com as informações do livro.
Crie três objetos da classe Livro, cada um representando um livro diferente.
Exiba no console as informações de cada livro, utilizando o método obterInformacoes. */

class Book{
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year  = year;
    }
    get getInfo(){
        return `Livro: ${this.title}
        Autor: ${this.author}
        Ano: ${this.year}`
    }
}

const livro1 = new Book('JavaScript: O Guia Definitivo', 'David Flanagan', 2012)
console.log(livro1.getInfo);
const livro2 = new Book('Código Limpo', 'Robert C. Martin ', 2009)
console.log(livro2.getInfo);
const livro3 = new Book('Estruturas de Dados e Algoritmos com JavaScript', 'Loiane Groner', 2019)
console.log(livro3.getInfo);