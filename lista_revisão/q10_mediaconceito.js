import {input} from '../../utils.js'

function main(){
    const nota_1 = Number(input('digite a primeira nota: '))
    const nota_2 = Number(input('digite a segunda nota: '))
    const exibir = media_com_conceitos(nota_1, nota_2)
}
main()
function media(a, b){
    const media = (a + b) / 2
    return media
}
function media_com_conceitos(a,b){
    let valor_media = media(a,b)
    if(valor_media >= 9){
        console.log(` Primeira nota: ${a} \n Média = ${valor_media.toFixed(1)} \n Conceito A \n aprovado!`)
    }else if(valor_media >= 7.5 && valor_media < 9){
        console.log(`Primeira nota: ${a} \n Segunda nota ${b} \n Média = ${valor_media.toFixed(1)} \n Conceito B \n aprovado!`)
    }else if(valor_media < 7.5 && valor_media > 6.5){
        console.log(`Primeira nota: ${a} \n Segunda nota ${b} \n Média = ${valor_media.toFixed(1)} \n Conceito C \n aprovado!`)
    }else if(valor_media < 6 && valor_media > 4){
        console.log(`Primeira nota: ${a} \n Segunda nota ${b} \n Média = ${valor_media.toFixed(1)} \n Conceito D \n reprovado!`)
    }else if(valor_media > 4 && valor_media < 0){
        console.log(`Primeira nota: ${a} \n Segunda nota ${b} \n Média = ${valor_media.toFixed(1)} \n Conceito E \n reprovado!`)
    }
}