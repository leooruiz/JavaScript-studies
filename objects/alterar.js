const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
  };

console.log(pessoa.nome)
console.log(pessoa.telefone)

pessoa.telefone = '11 222333444';
console.log(pessoa.telefone)

pessoa.nome = 'Luma Silva'
console.log(pessoa) //é possível manipular propriedades de um objeto que foram declarados com const

const novaPessoa = {
    nome: "Pedro",
  };
  
// pessoa = novaPessoa; // não é possível reatribuir valores,mas uma propriedade de um objeto é possível manipular