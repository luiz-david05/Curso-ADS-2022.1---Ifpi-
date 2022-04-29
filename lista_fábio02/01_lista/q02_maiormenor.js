/* leia 2 numeros, verifique e escreva o menor e o maior  */
import {input} from '../../utils.js'

function main (){
    //entradas
    const [a, b] = input('digite dois números: ').split(" ").map(Number)
    const maior = verificar_maior(a, b)
    const menor = verificar_menor(a, b)
    console.log(`${maior} maior`)
    console.log(`${menor} menor`)
}
main()
function verificar_maior (a, b){
    if(a > b){
        return a
    }
    else {
        return b
    }
}
function verificar_menor (a, b){
    if(b < a){
    return b
    }
    else{
        return a
    }
}