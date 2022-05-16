import {input} from '../utils.js'
// questão média 3 bee1040
function main(){
    const n1 = Number(input('Primeira nota: '))
    const n2 = Number(input('Segunda nota: '))
    const n3 = Number(input('Terceira nota: '))
    const n4 = Number(input('Quarta nota: '))
    const result = mediap(n1, n2, n3, n4)
}
main()
function mediap(n1, n2, n3, n4){
    const soma = (n1*2) + (n2 * 3) + (n3 * 4) + (n4 * 1)
    const media_ponderada = soma / 10
    if(media_ponderada >= 7.0 ){
        console.log(`Media: ${media_ponderada.toFixed(1)}`)
        console.log('Aluno aprovado.')
    }else if(media_ponderada < 5.0){
        console.log(`Media: ${media_ponderada.toFixed(1)}`)
        console.log('Aluno reprovado.')
    }else{
            console.log(`Media: ${media_ponderada.toFixed(1)}`)
            console.log('Aluno em exame.')
            const nota_exame = Number(input('Nota do exame: '))
            const media_exame = (media_ponderada + nota_exame) / 2
        if (media_exame >= 5.0){
            console.log('Aluno Aprovado.') 
            console.log(`Media final: ${media_exame. toFixed(1)}`)
        }else{
            console.log('Aluno reprovado.')
            console.log(`Media final: ${media_exame.toFixed(1)}`)
        }
    }
    }
