import {input} from '../utils.js'
import {PA} from './funcoes_utils.js'

function main(){
    const termo_inicial = Number(input('Termo inicial: '))
    const razao_pa = Number(input('Razão da PA: '))
    const limite = Number(input('Mostrar até qual termo? : '))

    PA(termo_inicial, razao_pa, limite)
    
}
main()
