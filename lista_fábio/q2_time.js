const input = require ('prompt-sync')()

//inicio 
console.log('conversor de horas/minutos para minutos')
let hrs = Number(input('horas: '))
let mins = Number(input('minutos: '))

// processo 
hrs *= 60 + mins 

//saida 
console.log(`feita a conversão: ${hrs} minuto(s)`)