const input = require ('prompt-sync')()

// inicio 
console.log('conversor de m/s para km/h')
let speed_ms = Number (input('velocidade em m/s: '))

// processo
speed_ms *= 3.6

// saida 
console.log(`feita a conversão: ${speed_ms} km/h`)