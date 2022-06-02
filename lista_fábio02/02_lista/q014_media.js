// leia 5 numeros, calcule sua média e escreva os que são maiores que a média

import { input, print} from "../../utils.js"

function main (){
    const [n1, n2, n3, n4, n5] = input('5 notas: ').split(' ').map(Number)
    const media = calcular_media(n1, n2, n3, n4, n5)
}
main()
function calcular_media(n1, n2, n3, n4, n5){
    let media = (n1 + n2 + n3 + n4 + n5) / 5
    print(`Média = ${media.toFixed(1)}`)
    if(n1 > media){
        print(`${n1} acima da média!`)
    }if(n2 > media){
        print(`${n2} acima da média!`)
    }if(n3 > media){
        print(`${n3} acima da média!`)
    }if(n4 > media){
        print(`${n4} acima da média!`)
    }if(n5 > media){
        print(`${n5} acima da média!`)
    }
}


