//Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.
import {print,input} from '../../utils.js'
function main(){
    //entradas
    print('Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.')
    const idade = Number(input('digite sua idade em dias: '))
    //processo
    const anos = Math.trunc(idade / 366)
    const resto_idade = Math.trunc(idade % 366)
    const meses = Math.trunc(resto_idade / 31)
    const dias = Math.trunc(resto_idade % 31) 
    //saida
    print(`resultado: ${anos} anos, ${meses} meses e ${dias} dias`)
}main()