import { print, input } from './utils.js'
function main(){
    //start
    print('somar de 1 até 200')
    const start = 1
    const end = Number(input('valor: '))
    //process
    const sum = (start+end) * (end/2)
    //output
    print(`a soma é: ${sum}`)
}
main()