import {input} from '../utils.js'
import {pares_entre_numeros} from './funcoes_utils.js'

function main(){
    const limite_superior = Number(input('Limite superior: '))
    const limite_inferior = Number(input('Limite inferior: '))

    console.log('Pares entre os limites: ')

    pares_entre_numeros(limite_superior, limite_inferior)
}
main()
