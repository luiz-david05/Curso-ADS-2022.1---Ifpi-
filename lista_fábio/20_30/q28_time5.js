/*Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele
corresponde.*/
import {print,input} from '../../utils.js'
function main(){
    //entrada
    const horas = Number(input('digite as horas: '))
    //processo
    const semanas = (horas / (7 * 24))
    const dias = (horas / 24) % 7
    const resto_horas = horas % 24
    //saida
    print(`equivalem a: ${semanas.toFixed(0)} semanas e ${dias.toFixed(0)} dias e ${resto_horas.toFixed(0)} horas`)
}main()