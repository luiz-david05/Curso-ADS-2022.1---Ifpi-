import fs from 'fs';
const input = fs.readFileSync('q4.txt', 'utf8')
const lines = input.split('\n');

function main(){
    let i = 0
    const rendimento_alcool = Number(lines[i++])
    const rendimento_gasolina = Number(lines[i++])
    const distancia = Number(lines[i++]) 
    const [litro_alcool, litro_gasolina] = lines[i++].split(' ').map(Number)
    const valor_alcool = calcular_valor(rendimento_alcool, distancia, litro_alcool)
    const valor_gasolina = calcular_valor(rendimento_alcool, distancia, litro_gasolina)
    console.log(`Valor se usar álcool: R$ ${valor_alcool.toFixed(2)}`)
    console.log(`Valor se usar gasolina: R$ ${valor_gasolina.toFixed(2)}`)
}
main()
function calcular_valor(rendimento,  distancia, valor_litro){
    let valor_a_pagar = (distancia / rendimento) * valor_litro
    return valor_a_pagar
}