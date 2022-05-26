import {print , input} from '../../utils.js'
function main(){
    //start
    print('calcular área de um retângulo')
    const base = Number(input('digite o valor da base: '))
    const height = Number(input('digite o valor da altura: '))
    //processo
    const area = base * height
    //output
    print(`Area = ${area}`)

}
main()