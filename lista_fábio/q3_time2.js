const input = require('prompt-sync')()

//inicio 
console.log('conversor de minutos para horas e minutos')
let mins = Number(input('minutos: '))

//processo 
let hrs = Math.trunc (mins/60)
let hrs_mins = mins % 60

//saida 
console.log(`feita a conversão: ${hrs} hora(s) e ${hrs_mins} minuto(s)`)