//Leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso.
import {print,input} from '../../utils.js'
function main(){
    //entrada
    print(`digite um número de 3 dígitos.`)
    const n = (input('digite o número: '))
    //processo
    const inverso = n.split('').reverse().join('')
    const diferença = n - inverso
    //saida
    print(`diferença entre o número ${n} e seu inverso ${inverso} : ${diferença}`)

}main()