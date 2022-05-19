import { input } from '../../utils.js'

function main(){
    const nota = Number(input('digite a primeira nota: '))
    const nota_2 = Number(input('digite a segunda nota: '))
    const media = calcular_media(nota, nota_2)
    if(media >= 7 && media > 10){
        console.log(`Média = ${media.toFixed(1)} \n - aprovado!`)
    }else if (media === 10){
        console.log(`Média = ${media.toFixed(1)}
        \n - aprovado com distinção!`)
    }else[
        console.log(`Média = ${media.toFixed(1)} \n - reprovado!`)
    ]
}main()
function calcular_media(n,n2){
    const media = (n + n2) / 2
    return media
}
