/*leia data atual (dia, mês e ano) e data de nascimento de uma pessoa, calcule e escreva sua idade exata (em anos) */
import {input} from '../../utils.js'
function main(){
    const data_atual = input('digite a data (separada por barra, ex : 29/04/2022): ')
    const data_nascimento = input('data de nascimento: ')
    const [dia_atual, mes_atual, ano_atual] = data_atual.split('/').map(Number)
    const [dia_nascimento, mes_nascimento, ano_nascimento] = data_nascimento.split('/').map(Number)
    const idade = calcular_idade (dia_atual, mes_atual, ano_atual, dia_nascimento, mes_nascimento, ano_nascimento)
    console.log(`idade: ${idade} anos`)

    if(dia_atual === dia_nascimento && mes_atual === mes_nascimento ){
        console.log('\t !Feliz Aniversário!')
    }
    

}main()
function calcular_idade (dia_1, mes_1, ano_1, dia_2, mes_2, ano_2){
    const diferenca_anos = ano_1 - ano_2
    const diferenca_meses = mes_1 - mes_2
    const diferenca_dia = dia_1 - dia_2
    let idade = diferenca_anos
    if(diferenca_meses <= 0) idade -= 1
    else if (diferenca_dia < 0) idade -= 1
    return idade
}