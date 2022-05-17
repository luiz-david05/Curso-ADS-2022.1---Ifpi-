import {input} from '../../utils.js'

function main(){
    const data_1 = input('insira a data(dd/mm/aaaa): ')
    const data_2 = input('insira a data: ')
    const [dia, mes, ano] = data_1.split('/').map(Number)
    const [dia_2, mes_2, ano_2] = data_2.split('/').map(Number)
    const data_mais_recente = data_recente(dia, mes, ano, dia_2, mes_2, ano_2)
}
main()
function data_recente(dia,mes,ano,dia_2,mes_2,ano_2){
    if(ano > ano_2){
        console.log(`data mais recente: ${dia}/${mes}/${ano}`)
    }else{
        console.log(`data mais recente: ${dia_2}/${mes_2}/${ano_2}`)
    }
}