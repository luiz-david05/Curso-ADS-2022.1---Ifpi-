import {print , input} from '../utils.js'
function main(){
    //start
    print('digite 3 números')
    const n_1 = Number(input(''))
    const n_2 = Number(input(''))
    const n_3 = Number(input(''))
    //process
    const sum = n_1 + n_2
    const sub = n_2 - n_3
    //output
    print(`a soma do primeiro com o segundo número: ${sum}`)
    print(`a subtração do segundo pelo terceiro número: ${sub}`)
}
main()