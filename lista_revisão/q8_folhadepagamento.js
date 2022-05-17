import {input} from '../../utils.js'

function main(){
    const valor_hr = Number(input('valor da sua hora de trabalho: '))
    const qtd_hrs = Number(input('Quantidade de horas no mês: '))
    const exibir = desconto(valor_hr, qtd_hrs)
}
main()
function desconto(valor_hr, qtd_hrs){
    const salario_bruto = valor_hr * qtd_hrs
    let ir = 0
    let taxa_ir
    const inss = salario_bruto * (10 / 100)
    const fgts = salario_bruto * (11 / 100)
    let total_descontos = ir + inss
    let salario_liquido = salario_bruto - total_descontos
    if(salario_bruto <= 900){
        ir = 0
        taxa_ir = 'isento'
    }else if(salario_bruto > 900 && salario_bruto <= 1500){
        taxa_ir = '5%'
        ir = salario_bruto * (5 / 100)
        total_descontos = ir + inss
        salario_liquido = salario_bruto - total_descontos
    }else if(salario_bruto > 1500 && salario_bruto <= 2500){
        taxa_ir = '10%'
        ir = salario_bruto * (10 / 100)
        total_descontos = ir + inss
        salario_liquido = salario_bruto - total_descontos
    }else if(salario_bruto > 2500){
        taxa_ir = '20%'
        ir = salario_bruto * (20 / 100)
        total_descontos = ir + inss
        salario_liquido = salario_bruto - total_descontos
    }
    console.log(`Salário Bruto(${valor_hr} * ${qtd_hrs}): R$ ${salario_bruto.toFixed(2)}`)
    console.log(`(-)IR (${taxa_ir})       : R$ ${ir.toFixed(2)}`)
    console.log(`(-)INSS (10%)            : R$ ${inss.toFixed(2)} `)
    console.log(`FGTS (11%)               : R$ ${fgts.toFixed(2)} `)
    console.log(`Total de descontos       : R$ ${total_descontos.toFixed(2)} `)
    console.log(`Salário líquido          : R$ ${salario_liquido.toFixed(2)}`)    
}
