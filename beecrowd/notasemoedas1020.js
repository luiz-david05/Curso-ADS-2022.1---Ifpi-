import fs from 'fs';
const input = fs.readFileSync('1020.txt', 'utf8')
var lines = input.split('\n');
function main(){
    const valor = Number(lines[0])
    let resto = valor
    const nota_100 = Math.trunc(resto / 100) 
    resto %= 100 
    const nota_50 = Math.trunc(resto / 50)
    resto %= 50  
    const nota_20 = Math.trunc(resto / 20)
    resto %= 20 
    const nota_10 = Math.trunc(resto / 10)
    resto %= 10 
    const nota_5 = Math.trunc(resto / 5)
    resto = resto % 5 
    const nota_2 = Math.trunc(resto / 2)
    resto = resto % 2 
    const moedas_1real = Math.trunc(resto / 1)
    resto *= 100
    resto %= 100
    const moedas_50 = Math.trunc(resto / 50)
    resto %= 50 
    const moedas_25 = Math.trunc(resto / 25)
    resto %= 25
    const moedas_10 = Math.trunc(resto / 10)
    resto %= 10 
    const moedas_5 = Math.trunc(resto / 5) 
    resto %=5 
    const moedas_01 = Math.trunc(resto)
    
    console.log(`NOTAS:`)
    console.log(`${nota_100} nota(s) de R$ 100.00`)
    console.log(`${nota_50} nota(s) de R$ 50.00`)
    console.log(`${nota_20} nota(s) de R$ 20.00`)
    console.log(`${nota_10} nota(s) de R$ 10.00`)
    console.log(`${nota_5} nota(s) de R$ 5.00`)
    console.log(`${nota_2} nota(s) de R$ 2.00`)
    console.log(`MOEDAS:`)
    console.log(`${moedas_1real} moeda(s) de R$ 1.00`)
    console.log(`${moedas_50} moeda(s) de R$ 0.50`)
    console.log(`${moedas_25} moeda(s) de R$ 0.25`)
    console.log(`${moedas_10} moeda(s) de R$ 0.10`)
    console.log(`${moedas_5} moeda(s) de R$ 0.05`)
    console.log(`${moedas_01} moeda(s) de R$ 0.01`)
    
}main()