import {input} from '../utils.js'
import {impares_entre_numeros} from './funcoes_utils.js'

function main(){
    const limite_superior = Number(input('Limite superior: '))
    const limite_inferior = Number(input('Limite inferior: '))

    console.log('Ímpares entre os limites: ')

    impares_entre_numeros(limite_superior, limite_inferior)
}
main()

