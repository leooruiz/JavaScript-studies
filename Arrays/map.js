const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota)=>{
    return nota+1 >= 10 ? 10 : nota+1; //utilizando operador ternário para condicional na arrow function
})
console.log(notasAtualizadas)


// alterando os elementos do array para torná-los maiúsculos de forma padronizada
const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];
const nomesMaiusculos = nomes.map((nome)=> nome.toUpperCase())//lembrando que map n altera o array original, então deve-se alocá-lo a uma variável
console.log(nomesMaiusculos)
