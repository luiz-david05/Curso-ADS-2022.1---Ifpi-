// verificar respostas e classificar de acordo com os critérios:
// respondeu sim zero vezes: inocente!
// respondeu sim duas vezes : suspeito!
// respondeu sim entre três ou quatro vezes: cúmplice!
// respondeu sim cinco vezes: assassino!
import {input} from '../../utils.js'
function main(){
    console.log('Responda : s para sim ou n para não')
    const a = input('Telefonou para a vítima ? ')
    const b = input('Esteve no local do crime ? ')
    const c = input('Mora perto da vítima ? ')
    const d = input('Devia para a vítima ? ')
    const e = input('Já trabalhou com a vítima ? ')
    const respostas = verificar_respostas(a, b, c, d, e )
}
main()
function verificar_respostas(a, b , c, d, e){
    if(a === 's' && b === a && c === a && d === a && e === a){
        console.log('\nAssassino!')
    }else if(a === 'n' && b === a && c === a && d === a && e === a){
        console.log('\nInocente.')
    }
    else{
        if(a === 's' && b === a && c === 'n ' && d === c && e === c){
            console.log('\nSuspeito.')
        }else if(a === 'n' && b === a && c === 's' && d === c && e === c){
            console.log('\nSuspeito.')
        }else if(a === 's' && b === a && c === a && d === 'n' && e === d){
            console.log('\nCúmplice.')
        }else if(a === 'n' && b === a && c === a && d === 's' && e === d){
            console.log('\nCúmplice.')
        }
    }
}
