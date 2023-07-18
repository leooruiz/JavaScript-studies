const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
const meuSet = new Set(nomes); // new Set remove os elementos repetidos em uma array
console.log(meuSet)

const meuSetAtualizado = [...meuSet] // transforma o set em array

console.log(meuSetAtualizado)