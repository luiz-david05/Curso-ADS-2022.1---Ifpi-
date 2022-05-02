// leia duas notas de um aluno e escreva na tela 'aprovado!' se a média das duas notas for maior ou igual a 7, o programa deve ler a nota do exame e calcule a média final. se esta media for maior ou igual a 5, escreva 'aprovado!', caso contrário 'reprovado!'

import {input} from '../../utils.js'

function main(){
    const nota_1 = Number(input('primeira nota: '))
    const nota_2 = Number(input('segunda nota: '))
    const media = calcular_media(nota_1, nota_2)


    if(media >= 7){
        console.log(`Média = ${media.toFixed(1)} \n aprovado!`)
    }
    else{
        const exame = Number(input('Não aprovado, insira a nota do exame de recuperação: '))
        const media_final = calcular_media(media, exame)
        if(media_final >= 5){
            console.log(`Média final = ${media_final.toFixed(1)} \n aprovado!`)
        }else{
            console.log('reprovado!')
        }
        
    }
}
    main()
function calcular_media (n1, n2){
    return (n1 + n2) / 2
}