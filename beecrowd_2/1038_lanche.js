import {input} from '../utils.js'
function main(){
    const codigo = Number(input('codigo: '))
    const qtd = Number(input('quantidade: '))
    const valor_a_pagar = lanche(codigo, qtd)
    console.log(`Total: R$ ${valor_a_pagar.toFixed(2)}`)
}
main()
function lanche(codigo, qtd){
    let total 
    if(codigo === 1) total = qtd * 4
    else if(codigo === 2) total = qtd * 4.5
    else if(codigo === 3) total = qtd * 5
    else if(codigo === 4) total = qtd * 2
    else if(codigo === 5) total = qtd * 1.5
    return total

}