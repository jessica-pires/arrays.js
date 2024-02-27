const alunos = [
    { nome: 'João', nota: 7 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Ana', nota: 6 },
    { nome: 'Lucas', nota: 4 },
    {nome:'jessica', nota:8 }
];

function alunosComNotaMaior (arrayAlunos) { 
    return arrayAlunos.filter(aluno => aluno.nota >=6);
}

const filtroAprovados = alunosComNotaMaior(alunos);
console.log(filtroAprovados);