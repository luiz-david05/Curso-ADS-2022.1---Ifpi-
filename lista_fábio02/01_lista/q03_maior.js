// leia 3 numeros verifique e escreva o maior entre eles
import {input} from '../../utils.js'

function main(){
    // entradas
    const numeros = input('digite os 3 números: ').split(" ").map(Number)
    const resultado = maior(numeros[0], numeros[1], numeros[2])
    console.log(`\tmaior: ${resultado}`)
}
main()
function maior (a, b, c){
    if(a > b && a > c){
        return a
    }
    else if (b > c && b > a){
        return b
    }
    else if (c > b && c > a){
        return c
    }
}