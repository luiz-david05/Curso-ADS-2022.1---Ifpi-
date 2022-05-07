import { input } from "../../utils.js"
function main(){
    const data_1 = input('data(dd/mm/ano): ')
    const [dia, mes, ano] = data_1.split('/').map(Number)
    const data_2 = input('digite a outra data: ')
    const [dia_2, mes_2, ano_2] = data_2.split('/').map(Number)
}main()
function recente (dia, mes, ano, dia_2, mes_2, ano_2){
    let dia_recente
    if(dia > dia_2) dia_recente = dia
    else if(dia < dia_2) dia_recente = dia_2
    
}