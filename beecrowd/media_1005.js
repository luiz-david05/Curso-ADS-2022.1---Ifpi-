/* Leia 2 valores de ponto flutuante de dupla precisão A e B,
que correspondem a 2 notas de um aluno. A seguir, calcule a média do aluno,
sabendo que a nota A tem peso 3.5 e a nota B tem peso 7.5 
(A soma dos pesos portanto é 11). 
Assuma que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.*/

import {input} from '../utils.js'
function main(){
    //entradas
    console.log('calcular media ponderada')
    const nota1 = Number(input('nota 1: '))
    const nota2 = Number(input('nota 2: '))
    //processo
    const peso1 = 3.5
    const peso2 = 7.5
    const mp = ((nota1 * peso1) + (nota2 * peso2)) / (peso1 + peso2)
    //saidas
    console.log(`MEDIA = ${mp.toFixed(5)}`)    

}main()