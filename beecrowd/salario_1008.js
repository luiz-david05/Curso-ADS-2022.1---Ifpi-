/* Escreva um programa que leia o número de um funcionário,
seu número de horas trabalhadas, o valor que recebe por hora e calcula
o salário desse funcionário. A seguir,
mostre o número e o salário do funcionário, com duas casas decimais.*/
import {input} from '../utils.js'
function main(){
    const numero = Number(input('numero do funcionario*: '))
    const hrs_trabalhadas = Number(input('horas trabalhadas*: '))
    const valor_hrs = Number(input('valor das horas*: '))
    const salario = hrs_trabalhadas * valor_hrs

    console.log(`Number = ${numero}`)
    console.log(`Salary = ${salario.toFixed(2)}`)

} 
main()