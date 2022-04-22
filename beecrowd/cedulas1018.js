/* Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.*/
import {input} from '../utils.js'
function main(){
    //questão chata - entradas
    const valor = Number(input('valor: '))
    //processo
    let resto = valor
    const nota_100 = Math.trunc(resto / 100)
    resto = resto % 100
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
    const moedas_1real = resto
    resto = resto % 1
    //saidas
    console.log(`${valor} R$`)
    console.log(`${nota_100} nota(s) de R$ 100,00`)
    console.log(`${nota_50} nota(s) de R$ 50,00`)
    console.log(`${nota_20} nota(s) de R$ 20,00`)
    console.log(`${nota_10} nota(s) de R$ 10,00`)
    console.log(`${nota_5} nota(s) de R$ 5,00`)
    console.log(`${nota_2} nota(s) de R$ 2,00`)
    console.log(`${moedas_1real} nota(s) de R$ 1,00`)
    
}main()