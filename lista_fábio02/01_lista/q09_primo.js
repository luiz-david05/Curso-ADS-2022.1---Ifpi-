// leia um numero entre (0 e 100), verifique e escreva se é primo ou n primo
import {input} from '../../utils.js'

function main (){
    const n = Number (input('digite o número: '))
    const primo = e_primo(n)
    console.log(primo)
}
main()
function e_primo (n){
    if( n % n ===  1 && n % 1 === n ){
        return 'é primo'
    }
    else{
        return 'não é primo'
    }
}
