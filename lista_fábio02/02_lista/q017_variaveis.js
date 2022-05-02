// leia valores inteiros em duas variaveis distintas e se a % b === 1, escreva a + b + a % b , se for 2 escreva se a e b são pares ou impares, se for igual a 3 multiplique a soma dos valores lidos pelo primeiro, se for igual a 4 divida a soma dos números lidos pelo segundo,se este for diferente de zero. Em qualquer ouutra situação escreva o quadrado dos números lidos.

import {input} from '../../utils.js'

function main(){
    const variaveis = input('valor de A e B: ')
    const [a, b] = variaveis.split(' ').map(Number)
    const todos_causos = all(a, b)
    


}
main()
function all(n1, n2){
    let resultado, resto
    resto = n1 % n2
    if(resto === 1){
        resultado = n1 + n2 + resto
        console.log(`soma das duas variáveis + o resto da divisão = ${resultado}`)
    }
    else if(resto === 2){
        if(par(n1)){
            console.log(`${n1} é par!`)
        }else{
            console.log(`${n1} é ímpar!`)
        }
        
        if(par(n2)){
            console.log(`${n2} é par!`)
        }else{
            console.log(`${n2} é ímpar!`)
        }
    }
    else if(resto === 3){
        resultado = (n1 + n2) * n1
        console.log(`a soma das duas variáveis multiplicada pela primeira: ${resultado} `)
    }
    else if(resto === 4){
        if(n2 === 0){
            console.log(`segunda variável = 0`)
        }else{
            resultado = (n1 + n2) / n2
            console.log(`divisão da soma entre as duas variáveis pela segunda: ${resultado} `)
        }
    }else{
        const n1_quadrado = quadrado(n1)
        const n2_quadrado = quadrado(n2)
        console.log(`quadrado da primeira variável: ${n1_quadrado} \n quadrado da segunda variável: ${n2_quadrado}`)
    }
}
function par (n){
    return n % 2 === 0
}
function quadrado(n){
    return n * n
}

