import {input} from '../../utils.js'

function main(){
    const salario = Number(input(' Insira seu salário: '))
    const new_sallary = calcular_aumento(salario)
}
main()
function calcular_aumento(salario){
    let aumento, percentual, novo_salario
    if(salario <= 280 ){
        aumento = salario * 0.2
        novo_salario = aumento + salario
        percentual = '20%'
        console.log(` salário antes do aumento: ${salario.toFixed(2)}R$\n percentual do aumento aplicado: ${percentual}\n o valor do aumento: ${aumento.toFixed(2)}R$\n novo salário, após o aumento: ${novo_salario.toFixed(2)}R$`)
    }
}