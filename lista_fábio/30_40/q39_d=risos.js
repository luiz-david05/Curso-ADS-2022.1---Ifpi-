//Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão:
//d = r + s / 2, onde r = a + b ^2  e s = b + c ^2 
import {print, input} from '../../utils.js'
function main(){
    //entradas
    const a = Number(input('digite o valor de A:')) 
    const b = Number(input('digite o valor de B:')) 
    const c = Number(input('digite o valor de C:'))
    //processo
    const r = (a + b )** 2
    const s = (b + c )** 2
    const d = (r + s) / 2
    //saida
    print(`o resultado da expressão: ${d}`)
}main()