const calcularCubo = (num:number):number => {
    return num**3;
}

const resposta:number = calcularCubo(10);
console.log(resposta);

const primeiraOuUltimaLetra = (palavra:string,pOuU:boolean) => {
    if(pOuU) {
        console.log(palavra[0]);
    } else {
        console.log(palavra[palavra.length-1]);
    }
}

primeiraOuUltimaLetra("asdasd",true);

