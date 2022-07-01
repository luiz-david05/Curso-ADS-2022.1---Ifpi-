import {input} from '../utils.js'
import {PG} from './funcoes_utils.js'

function main(){
    const termo_inicial = Number(input('Termo inicial: '))
    const razao_pg = Number(input('Razão da PG: '))
    const limite = Number(input('Mostrar até qual termo? : '))

    PG(termo_inicial, razao_pg, limite)
}
main()

