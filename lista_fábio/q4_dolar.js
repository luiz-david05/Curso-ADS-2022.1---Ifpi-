const input = require('prompt-sync')()

//inicio
console.log('conversor de real para dólar ')
let v_dolar = Number(input('cotação  do dólar hoje: '))
let dolar = Number(input('valor em dólar: '))

//processo 
dolar *= v_dolar

//saida 
console.log(`valor em reais: ${dolar .toFixed(2)}R$`)