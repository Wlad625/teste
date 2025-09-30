type Aluno = {
    nome:string;
    matricula:number;
    nota:number;
};


const imprimirAluno = (al:Aluno) => {
    console.log(`Aluno ${al.nome} com Matricula ${al.matricula} e Nota ${al.nota}`);
}


const wlad:Aluno = {
    nome:"Wladimir",
    matricula:23123213,
    nota:10
};

imprimirAluno(wlad);

type Turma = {
    materia: string;
    codigo: number;
    alunos: Array<Aluno>;

};

const imprimirPresença = (tur:Turma) => {
    console.log(tur.materia);
    tur.alunos.forEach((al)=> {
        console.log(`- ${al.nome} - ${al.nota}`)
    });
}

const t:Turma = {
    materia:"React Front End",
    codigo:82372831,
    alunos:[wlad]
}

imprimirPresença(t);