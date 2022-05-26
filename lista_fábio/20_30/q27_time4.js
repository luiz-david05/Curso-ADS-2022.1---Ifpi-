/* Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos
segundos ele corresponde */
import {print,input} from '../../utils.js'
function main(){
    //entradas
    const segundos = Number(input('digite os segundos: '))
    //processo
    const n_s = 3600
    const horas = segundos / n_s
    const minutos = (segundos / 60) % 60 
    const resto_segundos = segundos % 60
    //saida
    print(`${segundos} segundos equivalem a: `)
    print(`${horas.toFixed(0)} horas, ${minutos.toFixed(0)} minutos e ${resto_segundos.toFixed(0)} segundos`) 
}main()