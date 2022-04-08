import {print , input} from '../../utils.js'
function main(){
    //start
    print('digite dois números')
    const n_1 = Number(input(''))
    const n_2 = Number(input(''))

    //process
    const sum = n_1 + n_2
    const sub = n_1 - n_2
    const div = Math.trunc (sum / sub)
    //output
    print(`a divisão da soma pela subtração desses números é: ${div}`)
}
main()