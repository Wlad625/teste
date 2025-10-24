class Pessoa { // cadastro dos clientes
    constructor(nome, cpf, dataNascimento) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
    }
// imprimi dados de cada cliente
    imprimirDetalhes() {
        console.log("---------------------");
        console.log(`Nome: ${this.nome}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Data de Nascimento: ${this.dataNascimento}`);
        console.log("---------------------");
    }
}

module.exports = Pessoa;