import {input} from '../../utils.js'

function main(){
    const valor_hr = Number(input('valor da sua hora de trabalho: '))
    const qtd_hrs = Number(input('quantidades de horas no mês: '))
}
main()
function desconto_ir(valor_hr, qtd_hrs){
    let salario = valor_hr * qtd_hrs
    if(salario <= 900){
        console.log(`Salário Bruto(${valor_hr} * ${qtd_hrs}  : R$: ${salario.toFixed(2)})/n IR(isento)`)
    }else if(salario > 900 && salario <= 1500){
        let desconto_5percent = salario * 0.15
    }
    // terminar dps, mas a base tá ai
}
