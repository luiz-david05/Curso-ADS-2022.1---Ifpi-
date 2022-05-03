// leia 2 valores e uma das das seguintes operações a serem executadas da seguinte forma (1 - adição, 2 - subtração, 3 - multiplicação e 4 - divisão) calcule e escreva o resultado dessa operação sobre os valores lidos

import {input} from '../../utils.js'

function main(){
    const [n1, n2] = input('digite dois valores: ').split(" ").map(Number)
    const resultado = operacoes(n1, n2)
 
}main()
function operacoes(n1, n2){
    console.log(` 1 - adição \n 2 - subtração \n 3 - multiplicação \n 4 - divisão`)
    const operacao = Number(input('operação que deseja realizar: '))
    if(operacao === 1){
        let soma = n1 + n2
        console.log(`${n1} + ${n2} = ${soma}`)
    }else if(operacao === 2){
        let subtração = n1 - n2
        console.log(`${n1} - ${n2} = ${subtração}`)
    }else if(operacao === 3){
        let multiplicação = n1 * n2
        console.log(`${n1} * ${n2} = ${multiplicação}`)
    }else if(operacao === 4){
        let divisão = n1 / n2
        console.log(`${n1} / ${n2} = ${divisão}`)
    }else{
        console.log(`erro! \n digite novamente!`)
    }
}