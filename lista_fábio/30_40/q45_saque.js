/*Um algoritmo para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para
decidir o numero de notas de cada valor que deve ser disponibilizado para o cliente que realizou o
saque. Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor
disponíveis fossem distribuídas em número mínimo possível. Por exemplo, se a maquina só dispõe de
notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1, para uma quantia solicitada de R$ 87, o algoritmo deveria
indicar uma nota de R$ 50, três notas de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva um
algoritmo que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o
critério da distribuição ótima. */
import {input} from '../../utils.js'
function main(){
    //entradas
    const numero = Number (input('digite o valor pra saque R$: '))
    //processo por meio de uma função
    const notas_saque = saque(numero)
}
main()
function saque(valor){
    let resto = valor
    const nota_100 = Math.trunc(resto / 100)
    resto %= 100
    const nota_50 = Math.trunc(resto / 50)
    resto %= 50
    const nota_20 = Math.trunc(resto / 20)
    resto %= 50
    const nota_10 = Math.trunc(resto / 10)
    resto %= 10
    const nota_5 = Math.trunc(resto / 5)
    resto %= 5
    const nota_2 = Math.trunc(resto / 2)
    resto %= 2
    const nota_1real = resto
    console.log(`valor: ${valor} R$`)
    console.log(`${nota_100} nota(s) de R$ 100,00`)
    console.log(`${nota_50} nota(s) de R$ 50,00`)
    console.log(`${nota_20} nota(s) de R$ 20,00`)
    console.log(`${nota_10} nota(s) de R$ 10,00`)
    console.log(`${nota_5} nota(s) de R$ 5,00`)
    console.log(`${nota_2} nota(s) de R$ 2,00`)
    console.log(`${nota_1real} nota(s) de R$ 1,00`)
}