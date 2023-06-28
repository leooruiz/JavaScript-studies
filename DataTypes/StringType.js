const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana) //exemplos de codificacao de caracteres

let nome = 'Leonardo'
let input = 'leonardo'
let ParaMinuscula = nome.toLowerCase()
let ParaMaiuscula = nome.toUpperCase()
let caracteres = nome.length
console.log(caracteres)
console.log(ParaMinuscula)
console.log(ParaMaiuscula)
console.log(ParaMinuscula === input) // comparação é VERDADEIRA pois todos os caracteres estão minúsculos
console.log(nome === input) // comparação é FALSA pois não há convergência de minúsculas nas duas strings

let idadeTerra = '5 bilhões de anos aproximadamente'
console.log(idadeTerra)
idadeTerra = idadeTerra.replace('5', '4,5') //substituição de caracteres com .replace()
console.log(idadeTerra)

let frase = 'O rato roeu a roupa do rei de roma'
let palavras = frase.split(' ') // .split() divide a string em todos os espaços (neste caso), criando um array em que cada palavra antes e após o espaço torna-se um índice
console.log(palavras)
console.log (palavras[2]) // retorna somente a string de índice 2 no array /'roeu'/

//outro exemplo com .split()

let MeuNome = `Leonardo de Oliveira Ruiz`
let DivisaoNome = MeuNome.split(' ')
let PrimeroNome = DivisaoNome[0]
let SegundoNome = DivisaoNome[2]
let TerceiroNome = DivisaoNome[3]
console.log(`Seu primeiro nome é ${PrimeroNome}, seu segundo nome é ${SegundoNome} e seu terceiro nome é ${TerceiroNome}`)

let NomeComEspaços = '  leonardo  '
let NomeSemEspaços = NomeComEspaços.slice(2,10) // cortou os espaços em branco dentro da string
console.log(NomeSemEspaços)
