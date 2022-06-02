//Leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso.
import {print,input} from '../../utils.js'
function main(){
    //entrada
    print(`digite um número de 3 dígitos.`)
    const numero = Number(input('digite o número: '))
    //processo
    const reverso = valor => Number(valor.toString().split('').reverse().join('')) * Math.sign(valor)
    const inverso = reverso(numero)
    const dif =  numero - inverso
    //saida 
    console.log(`[${numero}] - [${inverso}] = [${dif}]`)

}main()