//ler n de litros vendidos, o tipo de combustivel 
// A(alcool) - G(gasolina)
// calcular e mostrar o valor a ser pago pelo cliente
// preço litro: gasolina = 2.50 R$ kkkkkk sonho dms
// ate 20 litros desconto de 4% por litro
// acima de 20 litros desconto de 6% por litro
// preço litro alcool = 1,90 R$
// ate 20 litros, desconto de 3% por litro
// acima de 20 litros desconto de 5% por litro

import {input} from '../../utils.js'

function main(){
    console.log('[1] para Álcool e  [2] para Gasolina:')
    const type_fuel = Number(input('Tipo de combustível: '))
    const qtd_litros = Number(input('Quantidade de litros: '))
    const pagar = Verificar_typefuel(type_fuel, qtd_litros)
}
main()
function Verificar_typefuel(fuel,litro){
    let custo, desconto,total
    
    if(fuel === 1 && litro <= 20){
        custo = litro * 1.90
        desconto = custo * (3 / 100)
        total = custo - desconto
    }else if(fuel === 1 && litro > 20){
        custo = litro * 1.90
        desconto = custo * (5 / 100)
        total = custo - desconto
    }
    if(fuel === 2 && litro <= 20){
        custo = litro * 2.50
        desconto = custo * (4 / 100) 
        total = custo - desconto
    }else if(fuel === 2 && litro > 20){
        custo = litro * 2.50
        desconto = custo * (6 / 100)
        total = custo - desconto
    }
    console.log(`Total: ${custo.toFixed(2)}\nDesconto: R$ ${desconto.toFixed(2)}\nTotal a pagar: R$ ${total.toFixed(2)}`)
}