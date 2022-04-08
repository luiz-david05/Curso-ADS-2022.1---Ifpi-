import {print , input} from '../../utils.js'
function main(){
    //start
    print('calcular a área de um triângulo')
    const base = Number(input('digite o valor da base: '))
    const height = Number(input('digite o valor da altura: '))
    //process
    const area = (base * height) / 2
    //output
    print(`a área do triângulo é: ${area}`)

}
main()