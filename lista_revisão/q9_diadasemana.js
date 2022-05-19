import { input } from '../../utils.js'

function main(){
    console.log(' 1- domingo\n 2-Segunda \n 3-Terça\n 4-Quarta \n 5-Quinta\n 6-Sexta \n 7- Sábado\n  ')
    const dia = Number(input('digite o número: '))
    const dia_digitado = dia_da_semana(dia)
    console.log(dia_digitado)
}
main()
function dia_da_semana(dia){
    if(dia > 7){
        return 'digite um valor válido!'
    }else if(dia === 1){
        return 'Domingo!'
    }else if(dia === 2){
        return 'Segunda!'
    }else if(dia === 3){
        return 'Terça!'
    }else if(dia === 4){
        return 'Quarta!'
    }else if(dia === 5){
        return 'Quinta!'
    }else if(dia === 6){
        return 'Sexta'
    }else if(dia === 7){
        return 'Sábado!'
    }
}