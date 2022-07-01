import { input } from '../utils.js'
import {multiplos_de_N_entre_limites} from './funcoes_utils.js'


function main(){
    const numero = Number(input('Número: '))
    const limite_superior = Number(input('Limite superior: '))
    const limite_inferior = Number(input('Limite inferior: '))
    
    console.log(`Múltiplos de ${numero} entre ${limite_superior} e ${limite_inferior}`)
    
    multiplos_de_N_entre_limites(numero, limite_superior, limite_inferior)
}
main()
