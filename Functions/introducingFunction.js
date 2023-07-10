let num5 = 5;
let num2 = 2;
function soma2e5(n1, n2){
    return n1+n2 // função necessita de um return, senão ela será dada como undefined
}
let numero = soma2e5(7, 4) // a função retorna o valro e o atribui para a variável numero, o console.log é apenas para facilitar a visibilidade para o programador.
console.log(numero) // é possível perceber que a const numero recebe 7+4 e só é mostrada agora.



function somaCom9(num){
    num += 9
    return num
}
console.log(somaCom9(soma2e5(7, 4))) // é possível utilizar o retorno de uma função dentro de outra.



function cumprimentar(){ // função sem parâmetro pode ser utilizada quando se executa uma tarefa simples sem o uso de variáveis, Neste exemplo usa-se uma string fixa, então não há necessidade de parâmetros.
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) { // função sem retorno neste caso é utilizada reaproveitando outra função em seu interior, executando apenas um console.log.
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”