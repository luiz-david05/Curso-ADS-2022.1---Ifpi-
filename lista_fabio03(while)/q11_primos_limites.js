import {input} from '../utils.js'
import {primos_entre_limites} from './funcoes_utils.js'

function main(){
    const limite_superior = Number(input('Limite superior: '))
    const limite_inferior = Number(input('Limite inferior: '))

    console.log('Primos entre os limites: ')

    primos_entre_limites(limite_superior, limite_inferior)

}
main()
