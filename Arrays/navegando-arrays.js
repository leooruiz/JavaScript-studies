let numeros = [100, 200, 300, 400, 500, 600]
for (let i in numeros){
    console.log(`valor é ${numeros[i]}, e seu índice é ${i}`)
}


let num = 0
const notas = [10, 6.5, 8, 7.5]
for(let i = 0; i < notas.length; i++){
    num += notas[i]
}
let media = num/notas.length
console.log(`A soma entre as notas é ${num} e a média é ${media}`)


// usando dois for para percorrer arrays dentro de outra array
const notas1 = [10, 6.5, 8 ,7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]
const notasGerais = [notas1,notas2,notas3]
let media2 = 0

for (let i = 0; i < notasGerais.length; i++) { // i será usado para percorrer as arrays externas
  for (let j = 0; j < notasGerais[i].length; j++) { // j será usado para percorrer as arrays internas
    media2 += notasGerais[i][j]/notasGerais[i].length; // esta média será a soma das médias de cada array
  }
}
media2 = media2/notasGerais.length // fazendo a média das 3 médias 
console.log(media)


// percorrendo uma array acrescentando todos os números pares até 100
const numerosPares = [];

for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}
numerosPares.unshift()
console.log(numerosPares);