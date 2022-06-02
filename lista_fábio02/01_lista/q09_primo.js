// leia um numero entre (0 e 100), verifique e escreva se é primo ou n primo
import {input} from '../../utils.js'

function main (){
    const n = Number (input('digite o número: '))
    const primo = eh_primo(n)
    if(primo === true){
        console.log(`${n} é primo`)
    }else{
    console.log(`${n} não é primo`)
    }
}
main()
function eh_primo (num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) {
        return false
        }
    return num > 1
}

