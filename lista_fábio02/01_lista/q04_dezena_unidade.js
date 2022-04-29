/* leia um numero de 2 digitos, verifique e escreva se o numero da dezena é igual ou diferente ao da unidade*/
import {input} from '../../utils.js'

function main(){
    const numero = input('digite o número: ').split("").map(Number)
    const resultado = igual_diferente(numero[0], numero[1])
    console.log(`${resultado}`)    
}
main()
function igual_diferente (a, b){
    if(a > b || b > a){
        return 'diferentes!'
    }
    else{
        return 'iguais!'
    }
}