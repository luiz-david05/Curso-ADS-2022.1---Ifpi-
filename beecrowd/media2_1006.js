import {input} from '../utils.js'
function main(){
    //entradas
    console.log('calcular media ponderada')
    const nota1 = Number(input('nota 1: '))
    const nota2 = Number(input('nota 2: '))
    const nota3 = Number(input('nota 3: '))
    //processo
    const peso1 = 2
    const peso2 = 3
    const peso3 = 5
    const mp = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3)
    //saidas
    console.log(`MEDIA = ${mp.toFixed(2)}`)    

}main()