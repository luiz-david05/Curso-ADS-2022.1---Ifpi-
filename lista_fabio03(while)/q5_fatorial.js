import {input} from '../utils.js'
import {calcular_fatorial} from './funcoes_utils.js'

function main(){
    let fatorial = Number(input('Número: '))

    console.log(`fatorial = ${calcular_fatorial(fatorial)}`)

}
main()
