const alunos = ["Caio", "Maria", "Pedro", "Juliana"];
const medias = [7, 4.5, 10, 9];

const reprovados = alunos.filter((aluno, i) => {
    return medias[i] < 6;
})

console.log(reprovados);