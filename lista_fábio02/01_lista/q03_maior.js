// leia 3 numeros verifique e escreva o maior entre eles
import {input} from '../../utils.js'

function main(){
    // entradas
    const numeros = input('digite os 3 números: ')
    const [n1, n2, n3] = numeros.split(' ').map(Number)
    // const maior = verificar_maior(n1, n2, n3)
    let maior = Math.max(n1, n2, n3)
    console.log(`maior = ${maior}`)
}
main()
/*
function verificar_maior (a, b, c){
    let maior = Math.max(a, b, c)
    if(a === maior){
        return a
    }else if( b === maior){
        return b  
    }
    return c
}
*/