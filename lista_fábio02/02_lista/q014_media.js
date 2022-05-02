// leia 5 numeros, calcule sua média e escreva os que são maiores que a média

import { input, print} from "../../utils.js"

function main (){
    const n1 = Number(input('digite a primeira nota: '))
    const n2 = Number(input('digite a segunda nota: '))
    const n3 = Number(input('digite a terceira nota: '))
    const n4 = Number(input('digite a quarta nota: '))
    const n5 = Number(input('digite a quinta nota: '))
    const media = calcular_media(n1, n2, n3, n4, n5)
    print(`Média = ${media.toFixed(1)}`)
    const acima_da_media = acima_media(n1, n2, n3, n4,n5)
}
main()
function calcular_media(n1, n2, n3, n4, n5){
    const media = (n1 + n2 + n3 + n4 + n5) / 5
    return media
}
function acima_media(n1, n2, n3, n4, n5){
    if(n1 > calcular_media(n1, n2, n3, n4, n5)){
        print(`${n1} acima da média!`)
    }if(n2 > calcular_media(n1, n2, n3, n4, n5)){
        print(`${n2} acima da média!`)
    }if(n3 > calcular_media(n1, n2, n3, n4, n5)){
        print(`${n3} acima da média!`)
    }if(n4 > calcular_media(n1, n2, n3, n4, n5)){
        print(`${n4} acima da média!`)
    }if(n5 > calcular_media(n1, n2, n3, n4, n5)){
        print(`${n5} acima da média!`)
    }
}


