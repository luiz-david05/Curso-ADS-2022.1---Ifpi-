//Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.
import {print,input} from '../../utils.js'
function main(){
    //entradas
    print('digite o número na base binária de 4 dígitos (um por vez).')
    const b_1 = Number(input('número binário(1° dígito): '))
    const b_2 = Number(input('número binário(2° dígito): '))
    const b_3 = Number(input('número binário(3° dígito): '))
    const b_4 = Number(input('número binário(4° dígito): '))
    //processo
    const decimal = (b_1 * Math.pow(2,3)) + b_2 * Math.pow(2,2) +
    b_3 * Math.pow (2,1) + b_4 * Math.pow (2,0)
    //saida
    print(`na base decimal: ${decimal}`)  

}main()