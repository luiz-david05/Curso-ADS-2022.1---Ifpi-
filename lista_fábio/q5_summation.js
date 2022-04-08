const input = require('prompt-sync')()

//inicio 
console.log('soma dos elementos de um número inteiro de 3 digitos (c + d + u) ')
let n = Number (input('número: '))

//processo 
let c = (n / 100)
let rest = (n % 100)
let d = (rest / 10)
let u = (rest % 10)
let sum_n = Math.trunc(c + d + u)

//saida 
console.log(`a soma dos elementos: ${sum_n}`)
