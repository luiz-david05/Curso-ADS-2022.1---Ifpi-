/* leia 2 numeros, verifique e escreva o menor e o maior  */
import {input} from '../../utils.js'

function main (){
    //entradas
    const [a, b] = input('digite dois números: ').split(' ').map(Number)
     // const maior = verificar_maior(a, b)
    let maior = Math.max(a, b)
    if(a === maior){
        console.log(`Maior = ${a}\nMenor = ${b}`)
    }
    console.log(`Maior = ${b}\nMenor = ${a}`)
}
main()
/*
function verificar_maior (a, b){
    let maior = Math.max(a, b)
    if(a === maior){
        console.log(`maior = [${a}]\nmenor = [${b}]`) 
    }else{
    console.log(`maior = [${b}]\nmenor = [${a}]`)
    }
}
*/
