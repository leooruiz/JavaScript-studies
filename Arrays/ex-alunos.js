const alunos = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "Andre",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];
let sala1 = alunos.slice(0, alunos.length/2) //(0, 10)
let sala2 = alunos.slice(alunos.length/2) // (10) //quando cortar apenas um índice ele cortará todos a sua frente juntos
console.log(sala1)
console.log(sala2)