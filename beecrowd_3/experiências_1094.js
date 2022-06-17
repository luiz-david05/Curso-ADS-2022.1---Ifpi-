import fs from 'fs';
const input = fs.readFileSync('1094.txt', 'utf8')
const lines = input.split('\n');

function main(){
    let i = 0
    const qtd_casos = Number(lines[i++])
    let count = 0
    let qtd_coelho = 0
    let qtd_ratos = 0
    let qtd_sapos = 0
    let qtd_total = 0
    while(qtd_casos > count){
        let animal = lines[i++].split(' ')
        let qtd = Number(animal[0])
        let tipo = animal[1]
        qtd_total += qtd
        if(tipo === 'C'){
            qtd_coelho += qtd
        }else if(tipo === 'R'){
            qtd_ratos += qtd
        }else{
            qtd_sapos += qtd
        }
        count++
    }
    const percentual_coelhos = calcular_percentual(qtd_coelho, qtd_total)
    const percentual_ratos = calcular_percentual(qtd_ratos, qtd_total)
    const percentual_sapos = calcular_percentual(qtd_sapos, qtd_total)
    console.log(`Total: ${qtd_total} cobaias`)
    console.log(`Total de coelhos: ${qtd_coelho}`)
    console.log(`Total de ratos: ${qtd_ratos}`)
    console.log(`Total de sapos: ${qtd_sapos}`)
    console.log(`Percentual de coelhos: ${percentual_coelhos.toFixed(2)} %`)
    console.log(`Percentual de ratos: ${percentual_ratos.toFixed(2)} %`)
    console.log(`Percentual de sapos: ${percentual_sapos.toFixed(2)} %`)
}
main()
function calcular_percentual(qtd, qtd_total){
    return (qtd / qtd_total) * 100
}