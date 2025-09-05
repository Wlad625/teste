const gato = {
    nome:"Bobby",
    espécie:"Gato",
    raça:"Frajola",
    idade:5
};


console.log(gato);

const dog = {
    nome: "Scooby",
    espécie: "Cão",
    raça: "Labrador",
    idade: "4",
    consultas:["12/09/2025","19/09/2025"],
    dono: {nome: "Wlad", celular:"21997782763"},
    imprimirNomeDono(){
        console.log(this.dono.nome);
    },
    verificarConsulta(){
        if(this.consultas.length>0) {
            console.log("Tem consultas: ", this.consultas)
        }
        else{
            console.log("Não tem consultas");
        }
    }
}


dog.verificarConsulta()