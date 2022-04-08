import {print , input} from '../utils.js'
function main(){
    //start
    print('digite dois números')
    const n_1 = Number(input(''))
    const n_2 = Number(input(''))
    //process
    const quo = Math.trunc (n_1 / n_2)
    const rest = Math.trunc (n_1 % n_2)
    //output
    print(`o quociente: ${quo}`)
    print(`o resto da divisão: ${rest}`)
}
main()