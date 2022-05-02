// leai a quantidade de hrs aulas dadas por dois professores e o valor por hr recebida por cada um. escreva na tela qual dos professores tem salário total maior

import{input} from '../../utils.js'

function main(){
    const nome_1 = input('Nome do Professor: ')
    const horas_1 = Number(input('Total de horas aulas: '))
    const valor_1 = Number(input('Valor das horas aulas R$: '))
    console.log('')
    const nome_2 = input('Nome do Professor: ')
    const horas_2 = Number(input('Total de horas aulas: '))
    const valor_2 = Number(input('Valor das horas aulas R$: '))

    const salario_1 = calcular_salario(horas_1, valor_1)
    const salario_2 = calcular_salario(horas_2, valor_2)

    if(salario_1 > salario_2){
        console.log(`${nome_1} recebe o maior sálario: ${salario_1.toFixed(2)}R$`)
    }else{
        console.log(`${nome_2} recebe o maior sálario: ${salario_2.toFixed(2)}R$`)
    }
}
main()
function calcular_salario(n1, n2){
    return n1 * n2
}

