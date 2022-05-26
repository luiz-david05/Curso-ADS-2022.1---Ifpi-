import fs from 'fs';
const input = fs.readFileSync('1018.txt', 'utf8')
var lines = input.split('\n');
function main(){
    const valor = Number(lines[0])
    const nota_100 = Math.trunc(valor / 100)
    let resto = valor % 100
    const nota_50 = Math.trunc(resto / 50)
    resto = resto % 50
    const nota_20 = Math.trunc(resto / 20)
    resto = resto % 20
    const nota_10 = Math.trunc(resto / 10)
    resto = resto % 10
    const nota_5 = Math.trunc(resto / 5)
    resto = resto % 5
    const nota_2 = Math.trunc(resto / 2)
    resto = resto % 2
    const nota_1 = resto
    
    console.log(`${valor}`)
    console.log(`${nota_100} nota(s) de R$ 100,00`)
    console.log(`${nota_50} nota(s) de R$ 50,00`)
    console.log(`${nota_20} nota(s) de R$ 20,00`)
    console.log(`${nota_10} nota(s) de R$ 10,00`)
    console.log(`${nota_5} nota(s) de R$ 5,00`)
    console.log(`${nota_2} nota(s) de R$ 2,00`)
    console.log(`${nota_1} nota(s) de R$ 1,00`)
}
main()
