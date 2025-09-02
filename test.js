const prompt = require('prompt-sync')();
const name = prompt('qual é o seu nome? ');
console.log(`olá ${name}`);

function perguntaidade(){
    const idade = prompt("Qual é a idade do animal?");
    return idade;    
};

const idade1 = perguntaidade();

console.log(`Meu animal tem ${13} anos`);

function calcularidadeAjustada(idadeOrig){
    const idadeNova = idadeOrig * 7;
    return idadeNova;

}


console.log(`Meu animal tem ${calcularidadeAjustada(15)} anos`);

const calcularidade2 = (idadeOrig) => { 
   const idadeNova = idadeOrig * 7;
    return idadeNova;
 
}
console.log(`Meu animal tem ${calcularidade2(15)} anos`);

const notas = [5,10,8,7]
notas.push(41)
console.log(notas);
notas.pop(41)
console.log(notas[1]);
notas[3]=20
console.log(notas);

notas.forEach( elemento => {
    console.log("Meu elemento é", elemento)
});

const arr = [5,10,15];

arr.push(perguntaidade());
console.log("AQUI")
arr.push(perguntaidade());
arr.push(perguntaidade());
arr.push(perguntaidade());

arr.forEach(el=>{
    const resul = calcularidade2(el);
    console.log(resul);
});