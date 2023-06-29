

let area; // Pode-se declarar a variável com let sem valor
let altura = 8 //let é para declarar variável antes de usá-la, além disso seu valor se mantém dentro de seu escopo, é de escopo local.
var comprimento; //var representa a variável qde escopo global, então funciona em qualquer parte do código, o que pode gerar possíveis problemas em relação à lógica da aplicação.
const forma = 'retângulo' //valor não pode ser alterado
if(forma == 'retângulo'){
    area = altura*comprimento
} else{
    area = altura**2
}
console.log(area)