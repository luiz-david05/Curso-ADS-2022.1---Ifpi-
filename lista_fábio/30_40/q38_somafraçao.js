/*Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o
resultado em forma de fração*/
import {print,input} from '../../utils.js'
function main(){
    //entradas
    print('digite duas frações e veja a soma entre elas')
    const n1 = Number(input('digite o numerador da 1°: '))
    const d1 = Number(input('digite o denominador da 1°: '))
    const n2 = Number(input('digite o numerador da 2°: '))
    const d2 = Number(input('digite o denominador da 2°: '))
    //processo
    const d3 = d1 * d2
    const n4 = d3 / d2 * n2
    //saida
    print(`a soma é: ${n4} / ${d3}\n`)
}main()