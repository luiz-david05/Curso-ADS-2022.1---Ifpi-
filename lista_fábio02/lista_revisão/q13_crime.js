import {input} from '../../utils.js'

function main(){
    console.log('Responda : Sim(s) ou Não(n)')
    const a = input('Telefonou para a vítima ? ')
    const b = input('Esteve no local do crime ? ')
    const c = input('Mora perto da vítima ? ')
    const d = input('Devia para a vítima ? ')
    const e = input('Já trabalhou com a vítima ? ')
    const respostas = verificar_respostas(a, b, c, d, e )
}
main()
function verificar_respostas(a, b , c, d, e){
    if(a === b && c === d && e === a){
        console.log('Assassino!')
    }else if(a === 's' && b === 's' || a === c ){
        console.log('Suspeito!')
    }else if(a === b && b === c ){
        console.log('Cúmplice!')
    }else{
        console.log('Inocente!')
    }
}
