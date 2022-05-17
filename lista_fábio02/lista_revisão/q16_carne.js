// pedir o tipo e qtd de carne
//gerar um cupom fiscal:
// tipo e qtd de carne
// preço total, tipo de pagamento
// valor do desconto e valor a pagar
// o cliente só podera levar um tipo de carne na promoção, mas não há limite na qtd de carne q ele pode comprar

import {input} from '../../utils.js'

function main(){
    console.log('[1] para file, [2] para alcatra e [3] para picanha')
    const tipo_carne = Number(input('tipo de carne: '))
    const qtd_carne = Number (input('quantidade de carne em kg: '))
    const result = calcular_preco(tipo_carne, qtd_carne)
}
main()
function calcular_preco(tipo, qtd){
    let total, desconto, preco_final, tipo_pagmento
    if(tipo === 1){
        tipo = 'File'
        if(qtd >= 5){
        total = 5.80 * qtd  
        }else{
        total = qtd * 4.90
        }
    }else if(tipo === 2){
        tipo = 'Alcatra'
        if(qtd >= 5){
            total = qtd * 6.80
        }else{
            total = qtd * 5.90
        }
    }else if(tipo === 3){
        tipo = 'Picanha'
        if(qtd >= 5){
            total = qtd * 7.80
        }else{
            total = qtd * 6.90
        }
    }else{
        console.log('opção inválida!\n digite novamente')
    }
    const cartao = input('O cliente possue o cartão tabajara ? [s]sim/[n]não: ')
    if(cartao === 's'){
        tipo_pagmento = 'Cartão Hipermercado Tabajara'
        desconto = total * (5 / 100)
        preco_final = total - desconto
    }else{
        tipo_pagmento = 'Dinheiro'
        preco_final = total
        desconto = 0
    }
        console.log(`Tipo de carne comprada: ${tipo}`)
        console.log(`Quantidade de carne comprada: ${qtd} kg`)
        console.log(`Valor total : R$ ${total.toFixed(2)}`)
        console.log(`Tipo de pagamento: ${tipo_pagmento}`)
        console.log(`Valor do desconto: R$ ${desconto.toFixed(2)}`)
        console.log(`Valor a pagar: R$ ${preco_final.toFixed(2)}`)
}