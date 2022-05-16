// pedir o tipo e qtd de carne
//gerar um cupom fiscal:
// tipo e qtd de carne
// preço total, tipo de pagamento
// valor do desconto e valor a pagar
// o cliente só podera levar um tipo de carne na promoção, mas não há limite na qtd de carne q ele pode comprar

import {input} from '../../utils.js'

function main(){
    console.log('[f] para file, [a] para alcatra e [p] para picanha')
    const tipo_carne = input('tipo de carne: ')
    const qtd_carne = Number (input('quantidade de carne em kg: '))
}
main()
function calcular_preço(tipo, qtd){
    const cliente_hyper = input('Tem cartão no Hipermercado Tabajara? [s]sim/[n]não\n')
    let preco_file, preco_alcatra, preco_picanha,preco_bruto 
    if( qtd < 5){
        if(tipo === 'f'){
            preco_file = 4.90 * qtd 
            preco_bruto = preco_file 
        }else if(tipo === 'a'){
            preco_alcatra = 5.90 * qtd
        }else if(tipo === 'p'){
            preco_picanha = 6.90 * qtd
        }
    }
}