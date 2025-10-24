class Emprestimo {
//
    constructor(livro, pessoa, dias_emprestimo) {
        this.livro = livro;
        this.pessoa = pessoa;
        this.dias_emprestimo = dias_emprestimo;
        this.livro.qtdEstoque -= 1; // Isso daqui indica a quantidade de livros no estoque.
    }
// imprimi detalhes sobre o livro, pessoa e dias de emprestimo
    imprimirDetalhes() {
        console.log("---------------------");
        console.log(`Livro: ${this.livro.titulo}`);
        console.log(`Pessoa: ${this.pessoa.nome}`);
        console.log(`Dias de Empréstimo: ${this.dias_emprestimo}`);
        console.log("---------------------");
    }
// Calcula a multa a ser paga
    calcularMulta(demoraDias) {
        if (demoraDias <= this.dias_emprestimo) {
            return 0.0;
        } // calcula a demora na devolução e a quatidade de páginas do livro. O que influencia diretamente  no valor da multa.
        return (demoraDias - this.dias_emprestimo) * Math.ceil(this.livro.numeroPaginas / 100) * 2.0;
    } 

}

module.exports = Emprestimo;