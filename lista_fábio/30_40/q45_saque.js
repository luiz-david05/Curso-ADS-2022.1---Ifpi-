/*Um algoritmo para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para
decidir o numero de notas de cada valor que deve ser disponibilizado para o cliente que realizou o
saque. Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor
disponíveis fossem distribuídas em número mínimo possível. Por exemplo, se a maquina só dispõe de
notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1, para uma quantia solicitada de R$ 87, o algoritmo deveria
indicar uma nota de R$ 50, três notas de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva um
algoritmo que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o
critério da distribuição ótima. */
import {print, input} from '../../utils.js'
function main(){
    //entradas
    const saque = Number (input('digite o valor pra saque: R$'))
    //processo
    let resto = saque
    const nota_100 = Math.trunc(resto / 100)
    resto = resto % 100
    const nota_50 = Math.trunc(resto / 50)
    resto = resto % 50
    const nota_20 = Math.trunc(resto / 20)
    resto = resto % 50
    const nota_10 = Math.trunc(resto / 10)
    resto = resto % 10
    const nota_5 = Math.trunc(resto / 5)
    resto = resto % 5
    const nota_2 = Math.trunc(resto / 2)
    resto = resto % 2
    const moedas_1real = resto
    resto = resto % 1
    //saida
    print(`o valor ${saque} R$`)
    print(`quantidade de notas de 100 R$: ${nota_100}`)
    print(`quantidade de notas de 50 R$: ${nota_50}`)
    print(`quantidade de notas de 20 R$: ${nota_20}`)
    print(`quantidade de notas de 10 R$: ${nota_10}`)
    print(`quantidade de notas de 5 R$: ${nota_5}`)
    print(`quantidade de notas de 2 R$: ${nota_2}`)
    print(`quantidade de moedas de 1 R$: ${moedas_1real}`)

}main()