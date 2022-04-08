import {print , input} from '../../utils.js'
function main(){
    //start
    print('digite um número de 3 digitos')
    const n = Number(input(''))
    //process
    const c = Math.trunc(n / 100)
    const rest = Math.trunc(n % 100)
    const d = Math.trunc(rest / 10)
    const u = Math.trunc(rest % 10)
    //output
    print(`o inverso é: ${u}${d}${c}`)
}
main()