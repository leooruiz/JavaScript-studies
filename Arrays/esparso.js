let arrayVazia = [,,,];
console.log(arrayVazia.length)
console.log(arrayVazia[0])
console.log(arrayVazia[1])
console.log(arrayVazia[2])
// 3
// undefined
// undefined
// undefined
arrayVazia = [,,,];
console.log(arrayVazia.length)
arrayVazia.push(50)
console.log(arrayVazia)
console.log(arrayVazia.length)
// 3
// [ <3 empty items>, 50 ]
// 4
//Chamamos este tipo de estrutura de array esparso