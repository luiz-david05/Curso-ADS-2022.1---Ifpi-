import fs from 'fs';
const input = fs.readFileSync('q7.txt', 'utf8')
const lines = input.split('\n');

function main(){
    let i = 0
    const cotacao_atual = Number(lines[i++])
    const qtd_dolar = Number(lines[i++])
    const valor_total = valor__real(cotacao_atual, qtd_dolar)
    console.log(`Valor total a apagar: R$ ${valor_total.toFixed(2)}`) 
}
main()
function valor__real(cotacao, qtd_dolar){
    let valor = cotacao * qtd_dolar
    let iof = valor * (1.1 / 100)
    let valor_reais = valor + iof
    return valor_reais
}