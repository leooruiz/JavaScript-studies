const notas = [10, 6.5, 8 ,7.5]
let somaDasNotas = 0
notas.forEach(function (nota){ //dá os valores do elemento e seu índice, vai aplicar a função em cada um dos elementos do array
    somaDasNotas += nota
    console.log(somaDasNotas)
})
let media = somaDasNotas/notas.length
console.log(media)