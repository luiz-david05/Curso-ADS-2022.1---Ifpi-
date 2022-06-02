// leia 5 valores e escreva o maior e o menor entre eles, considerando que todos os valores são diferentes

import {input} from '../../utils.js'

function main (){
    const numeros = input('digite os 5 números: ')
    const [n1, n2, n3, n4, n5] = numeros.split(' ').map(Number)
    const maior = Math.max(n1, n2, n3, n4, n5)
    const menor = Math.min(n1, n2, n3, n4, n5)
   // const maior = verificar_maior(n1, n2, n3, n4, n5)
    // const menor = verificar_menor(n1, n2, n3, n4, n5)

    console.log(`Maior: ${maior}`)
    console.log(`Menor: ${menor}`)

}
main()
/*
function verificar_maior (a, b, c, d, e){
    if(a > b && a > c && a > d && a > e){
        return a
    }
    else if(b > a && b > c && b > d && b > e) {
        return b
    }
    else if(c > a && c > b && c > d && c > e) {
        return c
    }
    else if(d > a && d > b && d > c && d > e) {
        return d
    }
    else if(e > a && e > b && e > c && e > d){
        return e
    }
}
function verificar_menor (a, b, c, d, e){
    if(a < b && a < c && a < d && a < e){
        return a
    }
    else if (b < a && b < c && b < d && b < e){
        return b
    }
    else if (c < a && c < b && c < d && c < e){
        return c
    }
    else if (d < a && d < b && d < c && d < e){
        return d
    }
    else if (e < a && e < b && e < c && e < d){
        return e
    }
}
*/