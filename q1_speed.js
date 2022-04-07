// requisitando o modulo prompt-sync
const prompt = require('prompt-sync')()

// requisitando os dados
console.log('conversor de m/s para km/h') 
let speed_ms = Number(prompt('velocidade m/s : '))

// conversão 
speed_ms *= 3,6

// saída
console.log(`feita a conversão: ${speed_ms.toFixed(0)} km/h `)