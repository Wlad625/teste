class GerenciadorFormas {

}

abstract class Forma {
    lados: number;

    constructor(num_lados:number){
        this.lados = num_lados;
    }

    abstract calcularArea():number;
}

class Triangulo extends Forma {
    altura: number;
    base: number;

    constructor(altura:number,base:number){
        super(3);
        this.altura = altura;
        this.base = base;
    }


    calcularArea(): number {
        return this.base * this.altura / 2.0;
    }
}


const t1 = new Triangulo(10,10);

console.log(t1.calcularArea());

class retangulo extends Forma {
    altura: number;
    base: number;

    constructor(altura:number,base:number){
        super(4);
        this.altura = altura;
        this.base = base;
    }

    calcularArea(): number {
        return this.base * this.altura;
    }
}

const t2 = new retangulo(10,10);
console.log(t2.calcularArea());

class circulo extends Forma {
    raio: number;
    
    constructor( raio:number){   
        super(1);
        this.raio = raio;
    }
  
    calcularArea(): number {
        return Math. PI* this.raio;
    }
}


const t3 = new circulo(5);
console.log(t3.calcularArea());