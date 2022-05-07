import { input } from '../../utils.js'
function main(){
    const n = Number(input('digite o número: '))
    const sinal = positivo(n)
}
main()
function positivo(n){
    if(n >= 0){
        console.log(`${n} é positivo!`)
    }else{
        console.log(`${n} é negativo!`)
    }
}