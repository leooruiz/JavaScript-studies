const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala){                                        // 0 mostra o inicial do acc (acumulador)
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => acumulador+nota, 0) //retorna a soma de todos os elementos de uma array 
    //reduce funciona a partir de um acumulador que soma todos os elementos do array, reduzindo a apenas um valor, por isso o nome reduce
    // os parâmetros de reduce são a função callback que também tem parâmetros (retorna a soma das notas) e o valor inicial do acc (neste caso é 0)
    const mediaNotas = somaDasNotas/notasDaSala.length //divide o acumulador total pelo número de elementos no array para calcular a media
    return mediaNotas
}

console.log(calculaMedia(salaJS))
console.log(calculaMedia(salaPython))
console.log(calculaMedia(salaJava))


//outro exemplo
const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acc, atual) => atual + acc, 0)

console.log(soma) //170