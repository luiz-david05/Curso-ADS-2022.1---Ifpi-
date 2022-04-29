/*Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias. */
import {input} from '../utils.js'
function main(){
    //questão MUITO chata - entradas
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
    const moedas_1real = Math.trunc(resto / 1)
    resto = resto % 1
    const moedas_50 = Math.trunc(resto / 0.50)
    resto = resto % 0.50
    const moedas_25 = Math.trunc(resto / 0.25)
    resto = resto % 0.25
    const moedas_10 = Math.trunc(resto / 0.10)
    resto = resto % 0.10
    const moedas_5 = Math.trunc(resto / 0.5)
    resto = resto % 0.5
    const moedas_01 = Math.trunc(resto)
    //saidas
    console.log(`NOTAS:`)
    console.log(`${nota_100} nota(s) de R$ 100,00`)
    console.log(`${nota_50} nota(s) de R$ 50,00`)
    console.log(`${nota_20} nota(s) de R$ 20,00`)
    console.log(`${nota_10} nota(s) de R$ 10,00`)
    console.log(`${nota_5} nota(s) de R$ 5,00`)
    console.log(`${nota_2} nota(s) de R$ 2,00`)
    console.log(`MOEDAS:`)
    console.log(`${moedas_1real} moeda(s) de R$ 1,00`)
    console.log(`${moedas_50} moeda(s) de R$ 0,50`)
    console.log(`${moedas_25} moeda(s) de R$ 0,25`)
    console.log(`${moedas_10} moeda(s) de R$ 0,10`)
    console.log(`${moedas_5} moeda(s) de R$ 0,05`)
    console.log(`${moedas_01} moeda(s) de R$ 0,01`)
    
}main()