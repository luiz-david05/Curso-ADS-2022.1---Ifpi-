import {print , input} from '../../utils.js'
function main(){
    //start 
    print('soma dos elementos de um número inteiro de 3 digitos (c + d + u) ')
    const n = Number (input('número: '))
    //process
    const c = (n / 100)
    const rest = (n % 100)
    const d = (rest / 10)
    const u = (rest % 10)
    const sum_n = Math.trunc(c + d + u)
    //output
    print(`a soma dos elementos: ${sum_n}`)
}
main()    
