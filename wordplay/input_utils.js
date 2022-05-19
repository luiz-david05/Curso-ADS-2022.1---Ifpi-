import {input} from '../utils.js'

export function enter_to_continue(){
    input('<enter> para continuar...')
    console.clear()
}
export function pegar_numero_positivo(msg){
    return pegar_numero_no_intervalo(msg, 0, Number.valor_max)
}

export function pegar_numero_no_intervalo(msg, min, max){
    let numero = pegar_numero(msg)
    
    while (!(numero >= min && numero <= max)){
        console.log(`O número (${numero}) está fora da faixa [${min}-${max}]`)
        numero = pegar_numero(msg)
    }

    return numero
}

export function pegar_numero(msg){
    let valor = Number(input(msg))
    if (isNaN(valor)){
        console.log('Digite um valor numérico')
        valor = pegar_numero(msg)
    }
    return valor
}

export function pegar_texto(msg){
    const valor = input(msg)
    if (valor.length === 0){
        console.log('Texto vazio, digite algo.')
        return pegar_texto(msg)
    }
    return valor
}