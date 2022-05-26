import {print, input} from '../../utils.js'
function main(){
    //start
    print('calcular a área de um quadrado')
    let side = Number(input('digite o valor do lado: '))
    //process
    let ao_quadrado = Math.pow(side, 2) 
    //output
    print(`a área desse quadrado é: ${side}`)
}
main()