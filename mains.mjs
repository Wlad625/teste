import { CriarDono } from "./donos.mjs";
import { Criapet } from "./pets.mjs";


const dono1 =  CriarDono("Arthur",23231321)

console.log(dono1);
const dono2 =  CriarDono("Jaco Pastorius",2199361143487)
console.log(dono2);
const dono3 = CriarDono("Nenhum",32);
console.log(dono3);
const dono4 =  CriarDono("Arthur",219936127612);
console.log(dono4);


const pet1 = Criapet("Michealwave","Gato","SRD",1,dono1);
console.log(pet1);
const pet2 = Criapet("Carrapato","Cachorro","Shitzu",10,dono2);
console.log(pet2);
const pet3 = Criapet("Nenhum","Gato","Frajola",1,dono3);
console.log(pet3);
const pet4 = Criapet("PMME1966","Gato","SRD",1,dono4);
console.log(pet4);