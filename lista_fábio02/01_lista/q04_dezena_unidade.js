/* leia um numero de 2 digitos, verifique e escreva se o numero da dezena é igual ou diferente ao da unidade*/
import {input} from '../../utils.js'

function main(){
    const [n1, n2] = input('digite o número: ').split('').map(Number)
    const verificar = igual_diferente(n1, n2)
    if(verificar === true){
        console.log(`${n1} != ${n2}`)
    }else{
    console.log(`${n1} = ${n2}`)
    }
}
main()
function igual_diferente (a, b){
    return a > b || b > a
}