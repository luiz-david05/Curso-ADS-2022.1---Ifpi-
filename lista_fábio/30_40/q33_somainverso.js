//Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso.
import {print, input} from '../../utils.js'
function main(){
    //entradas
    print(`digite um número de 3 dígitos.`)
    const n = (input('digite o número: '))
    //processo
    const inverso = n.split('').reverse().join('')
    const soma = (n + inverso)
    //saida
    print(`a soma de ${n} + ${inverso} = ${soma}`)
}main()