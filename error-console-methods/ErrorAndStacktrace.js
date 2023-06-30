//const nome; // chamará um SyntaxError, pois não há inicializador na variável const

let bool = true
console.log(bol) // chamará ReferenceError devido a inexistencia da var num  

let nomemelhor = nome.replace('t', 'c') // chamará TypeError devido ao recebimento do dado errado, já que boolean não é uma string para receber replace()

let numero = 1
console.log(numero.toFixed(-3)) // chamará RangeError, pois recebeu um tipo esperado, porém não dentro do formato aceitável, no caso o toFixed() recebeu um number, só que menor do que 0, que no caso é inválido pois só aceita valores de 0 a 100.


console.log("deu erro"); // apenas mostrará uma mensagem 'deu erro'
console.error(new Error("deu erro")); // a palavra-chave new seguida de Error com inicial maiúscula - é um gostinho de como trabalhamos com classes em JavaScript.