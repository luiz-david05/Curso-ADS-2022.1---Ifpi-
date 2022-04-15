/* Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.*/
import {print, input} from '../../utils.js'
function main (){
    //entradas
    const meses = Number(input('número de meses: '))
    //processo
    const anos = meses / 12
    const resto_meses = meses % 12
    //saida
    print(`equivalem a : ${anos.toFixed(0)} ano(s) e ${resto_meses.toFixed(0)} meses`)
}main()