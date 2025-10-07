class GuardaInfo {
    private info:string;

    constructor(informacao:string){
        this.info = informacao;
    }

    guardarInfo(infoNova:string){
        this.info = infoNova;
    }

 FalarInfo(infoNova:string){
    console.log(this.info) 

class GuardaSegredo extends GuardaInformacao{
    private senha: string;

    constructor(info:string,senha: string){
        super(info);
        this.senha = senha;
    }

    guardarinfo2(infonova: string,senha:string): void {
        if(this.senha === senha) {
            this.info = infonova;
        }
    }

 }
}


const gi = new GuardaInfo("Meu segredo é...");

gi.guardarInfo("Segredo novo");


class Animal{
    fazer Som() Voide {
        console.log("O animal faz um som qualquer")
    };
    Mover() Voide{
        Console.log("O animal se movel");
    }
}
class Cachorro exdents Animal{
    fazerSom(): Voide{
        console.log("O cachorro latiu");
    }
}
class gato exdents Animal{
    fazerSom(): Voide{
        console.log("O gato miou");
    }
}