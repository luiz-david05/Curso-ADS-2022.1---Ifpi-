//leia uma data (dia, mes e ano) e verifique se a data é ou n válida

import {input} from '../../utils.js'
function main(){
    const data = input('digite a data no fomato dd/mm/aaaa: ')
    const [dia, meses, anos] = data.split('/').map(Number)
    const data_correta = formato_correto(dia, meses, anos)
    console.log(data_correta)

}main()
function formato_correto(dia, mes, ano){
    if(dia < 31 && mes < 13 && ano > 1000 ){
        return 'data válida'
    }else if(dia === 0 || mes === 0 || ano === 0){
        return 'data inválida'
    }
    else{
        return 'data inválida'
    }
}