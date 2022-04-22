/*Faça um programa que leia o nome de um vendedor, o seu salário fixo e o
total de vendas efetuadas por ele no mês (em dinheiro). 
Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas,
informar o total a receber no final do mês, com duas casas decimais. */
import {input} from '../utils.js'
function main(){
    const name = Number(input('nome do vendedor: '))
    const salario = Number(input('salario: '))
    const vendas = Number(input('vendas do mês: '))
    const valor_final = salario + (vendas * 0.15)
    console.log(`Total = ${valor_final.toFixed(2)}`)

}main()