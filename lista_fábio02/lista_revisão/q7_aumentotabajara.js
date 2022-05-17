import {input} from '../../utils.js'

function main(){
    const salario = Number(input(' Insira seu salário: '))
    const new_sallary = calcular_aumento(salario)
}
main()
function calcular_aumento(salario){
    let aumento, percentual, novo_salario
    if(salario <= 280 ){
        aumento = salario * (2 /  100)
        novo_salario = aumento + salario
        percentual = '20%'
    }else if(salario > 280){
        
    }
}