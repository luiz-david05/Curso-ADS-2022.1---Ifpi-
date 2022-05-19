// receber qtd(kg) de frutas compradas
// molango: até 5kg, kg = 2.50 e acima de 5kg, kg = 2.20
// maçã : até 5kg, kg = 1.80 e acima de 5kg, kg = 1.50
// verficar se tem direito a desconto
// condição para desconto:
// se o cliente comprar mais de 8 kilos de fruta ou 
// compras acima de 25 reais
// aplicar desconto de 10% sobre o valor da compra
// escrever o valor a ser pago pelo cliente


import {input} from '../../utils.js'

function main(){
    const molango = Number(input('Quantidade de kilos de morango: '))
    const apple = Number(input('Quantidade de kilos de maçã: '))
    const result = verificar_preco(molango, apple)
}
main()
function verificar_preco(molango, apple){
    let total_after, total_before, desconto, total_frutas
    total_frutas = molango + apple
    if(total_frutas < 5){
        total_before = (molango * 2.50) + (apple * 1.80)
        console.log(`Total: R$ ${total_before.toFixed(2)}`)
    }else{
        total_before = (molango * 2.20) + (apple * 1.50)
        if(total_frutas >= 8 || total_before > 25){
            desconto = total_before * (10 / 100)
            total_after = total_before - desconto
            console.log(`Total: R$ ${total_before.toFixed(2)}`)
            console.log(`Valor do desconto: R$ ${desconto.toFixed(2)}`)
            console.log(`Total: R$ ${total_after.toFixed(2)}`)

        }
    }
}