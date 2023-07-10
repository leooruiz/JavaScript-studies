// métodos que podem ser utilizados em strings e suas respectivas funções
console.log("alura".charAt(3)) // r é o valor que consta na posição 3 da string

const palavra="Alura"
console.log(palavra[0]) // A // usar a notação de colchetes para encontrar um caractere da string

const palavra2="Alura"
console.log(palavra.indexOf("a")) // 4 // além de arrays, indexOf também pode ser utilizada em strings, lembrando que retornará apenas a primeira ocorrência.

let frase= "Mergulhando em tecnologia."
console.log(frase.substr(0,11)) // Mergulhando // permite que façamos a extração de parte de uma string, é similar ao .slice(), porém este se tornou obsoleto.

let novaString = "Programe nas principais linguagens e plataformas. Explore linguagens como ";
console.log(novaString.concat("JavaScript,").concat(" Python,").concat(" e C#."))// O método concat() é uma opção para concatenar strings sem a utilização do operador de adição (+), adiciona no final da string anterior.

let login = "   andre@emailteste.com      ";
let loginSemEspaco = login.trim();
console.log(loginSemEspaco); //andre@emailteste.com// O trim() remove os espaços em branco no início ou fim de uma string.
// No JavaScript ainda temos algumas variações desta função como: trimEnd(),trimStart(),trimLeft() e trimRight()

