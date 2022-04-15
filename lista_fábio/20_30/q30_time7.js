/*Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele
corresponde */
import {print , input} from '../../utils.js'
function main(){
    //entradas
    const minutos = Number(input('número de minutos: '))
    //processo
    const dias = (minutos /  (24*60))
    const horas = (minutos / 60) % 24
    const resto_minutos = minutos % 60
    //saida
    print(`equivalem a: ${dias.toFixed(0)} dias, ${horas.toFixed(0)} horas e ${resto_minutos.toFixed(0)} minutos`)
}main()