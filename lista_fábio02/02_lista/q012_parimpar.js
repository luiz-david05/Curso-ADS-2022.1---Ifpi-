// verficar se um numero é par ou impar

import {input} from '../../utils.js'

function main(){
    const n = Number(input('número: '))
    const n_verificado = eh_par(n)
    if(n_verificado === true){
        console.log(`[${n}] é par`)
    }else{
    console.log(`[${n}] é ímpar`)
    }
}
main()
function eh_par(n){
    return n % 2 === 0
}
