const prompts = require("prompt-sync")();
class Nota {
    tom:string;
    oitava: number;
    tons_validos:string= "CDEFGAB";

    constructor(tom:string,oitava:number){
        if(this.tons_validos.includes(tom)){
            this.tom = tom;
            this.oitava = oitava;
        }
        else 
        {
            throw Error("Não é um tom válido!");
        }
    
    }
}

class GerenciarNotas {
    notas: Array<Nota>;

    constructor(){
        this.notas =[];
    }

    perguntarNota() {
        const t = prompts("Qual é o tom?");
        const o = Number(prompts("Qual é o oitava?"));
        this.adicionarNotas(t,o)
    }

    adicionarNotas(t:string,o:number){
        try {
            const novaNota = new Nota(t,o);
            this.notas.push(novaNota);
        } catch (error:any) {
            console.log("O seguinte erro aconteceu", error.message)
        }
        
        

    }


}

/*
const ger = new GerenciarNotas();
for (let index = 0; index<5; index++) {
    ger.adicionarNotas();
    console.log(ger.notas);
}
const n = new Nota("T",2);
console.log(n.tom+n.oitava);
*/

module.exports = {GerenciarNotas,Nota}