import {input} from '../../utils.js'

function main(){
    const n = Number(input('digite o número: '))
    const n_convertido = inteiro(n)
}
main()
function inteiro (n){
    if(n % 1 === 0){
    console.log(`${n} é inteiro`)
    }else{
    console.log(`${n} é decimal`)
    }
}