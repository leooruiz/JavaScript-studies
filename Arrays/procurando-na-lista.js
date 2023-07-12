const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];
NomeEMediaAluno('Ana') //chamada da função

function NomeEMediaAluno(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)){ //includes é usado para verificar se o elemento está presente no array, retorna true ou false
        const [alunos, medias] = listaDeAlunosEMedias; //nomeando cada lista presente na listaDeAlunosEMedias, alunos recebe o índice [0] e medias o índice [1]
        const indice = alunos.indexOf(aluno);
        const media = medias[indice] 
        console.log(`A média de ${aluno} é ${media}`)
    } else{
        console.log('Aluno não encontrado')
    }
}