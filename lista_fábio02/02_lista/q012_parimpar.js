// verficar se um numero é par ou impar

import {input} from '../../utils.js'

function main(){
    const n = Number(input('número: '))
    const verificar = par_impar(n)
    console.log(verificar)
}
main()
function par_impar (n){
    if(n % 2 === 0){
        return 'é par'
    }
    else{
        return 'é ímpar'
    }
}
