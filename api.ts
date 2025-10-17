

async function pegarDados(): Promise<any> {
    try {
        const dados = await fetch(`https://jsonplaceholder.typicode.com/posts/2`);
        return dados.json();
    } catch (error) {
        throw new Error("Erro ao pegar dados!")
    }
}

/*
pegarDados().then( (resultado)=>{
    console.log(resultado);
}).catch( (erro)=> {
    console.error(erro);
});
*/

/*
async function imprimirDados() {
    try {
        const dados = await pegarDados();
        console.log(dados);
    } catch( erro) {
        console.error(erro);
    }
}

*/

async function pegarDados2(): Promise<any> {
    try {
        const dados = await fetch(`https://meowfacts.herokuapp.com/`);
        return dados.json();
     } catch (error) {
            throw new Error("Erro ao pegar dados!")
    
    }
}


pegarDados2().then( (resultado)=>{
    console.log(resultado);
}).catch( (erro)=> {
    console.error(erro);
});
    
async function variosdados() {
    const p = [];
    for (let index = 0; index < qtd; index++) {

    }
    const resultado = await Promise.all(p);
    console.log(resultado);
}
variosdados(6);
    
}