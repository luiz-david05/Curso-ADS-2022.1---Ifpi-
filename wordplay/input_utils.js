import {input} from '../utils.js'

export function enter_to_continue(){
    input('<enter> para continuar...')
    console.clear()
}
export function pegar_texto(msg){
    const valor = input(msg)
    if (valor.length === 0){
        console.log('Texto vazio, digite algo.')
        return pegar_texto(msg)
    }
    return valor
}