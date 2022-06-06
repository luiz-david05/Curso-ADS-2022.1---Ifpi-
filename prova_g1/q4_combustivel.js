import {input} from '../utils.js'

function main(){
    const rendimento_alcool = Number(input('rendimento do veiculo utilizando álcool(km/litro): '))
    const rendimento_gasolina = Number(input('rendimento do veiculo utilizando gasolina(km/litro): '))
    const distancia = Number(input('Distância a ser percorrida(km): '))
    const litro_alcool = Number(input('valor do litro de álcool: '))
    const litro_gasosa = Number(input('valor litro de gasolina: '))
    const valor_alcool = calcular_valor(rendimento_alcool, distancia, litro_alcool)
    const valor_gasosa = calcular_valor(rendimento_gasolina, distancia, litro_gasosa)

    console.log(`\nvalor se usar gasolina: R$ ${valor_gasosa.toFixed(2)}`)
    console.log(`valor se usar álcool: R$ ${valor_alcool.toFixed(2)}`)
}
main()
function calcular_valor(rendimento,  distancia, valor_litro){
    let valor_a_pagar = (distancia / rendimento) * valor_litro
    return valor_a_pagar
}
