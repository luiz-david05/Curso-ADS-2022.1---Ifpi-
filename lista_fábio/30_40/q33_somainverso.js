//Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso.
import {print, input} from '../../utils.js'
function main(){
    //entrada
    print(`digite um número de 3 dígitos.`)
    const numero = Number(input('digite o número: '))
    //processo
    const reverso = valor => Number(valor.toString().split('').reverse().join('')) * Math.sign(valor)
    const inverso = reverso(numero)
    const soma = numero + inverso
    //saida 
    console.log(`[${numero}] + [${inverso}] = [${soma}]`)

}main()