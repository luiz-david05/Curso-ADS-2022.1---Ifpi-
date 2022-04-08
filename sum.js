import { print, input } from './utils.js'

function main(){
    //inicio
    print('somar de 1 até 200')
    const start = 1
    const end = Number(input('valor: '))

    //processo
    const sum = (start+end) * (end/2)

    print(`a soma é: ${sum}`)
}
main()