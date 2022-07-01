import { input } from '../utils.js'
import {soma_inteiros} from './funcoes_utils.js'


function main(){
    const numero = Number(input('Número: '))
    
    console.log(`Soma entre todos os inteiros entre 1 e ${numero}\nsoma = ${soma_inteiros(numero)}`)

}
main()
