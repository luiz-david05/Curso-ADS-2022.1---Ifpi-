//Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.
import {print,input} from '../../utils.js'
function main(){
    //entradas
    const dias = Number(input('digite o número de dias: '))
    //processo
    const semanas = dias / 7
    const resto_dias = dias % 7
    //saida
    print(`${dias.toFixed(0)} dias equivalem a: ${semanas.toFixed(0)} semana(s) e ${resto_dias.toFixed(0)} dia(s)`) 
} main()
