const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const aprovados = alunos.filter((_, indice) => { //neste caso podemos colocar apenas um underline no primeiro parâmetro pois não utilizaremos ele
    return medias[indice] >= 7
})
console.log(aprovados)

// exercício: filtre os participantes entre nota A, B ou C, na qual correspondem ao intervalo de 80-100, 60-80, 0-60 e coloque-os em template strings
const participantes = ['leo', 'may', 'biel', 'julia', 'julio']
const notas = [40, 90, 70, 60, 80]

const notaA = participantes.filter((participante, indice) => {
    return notas[indice] >= 80
})
const notaB = participantes.filter((participante, indice) => {
    return notas[indice] >= 60 && notas[indice] < 80
})
const notaC = participantes.filter((participante, indice) => {
    return notas[indice] < 60
})
console.log(`os participantes com nota acima de 80: ${notaA}`)
console.log(`os participantes com nota entre 60 e 80: ${notaB}`)
console.log(`os participantes com nota menor que 60: ${notaC}`)