import { input } from "../../utils.js"

function main(){
    console.log('Formato da hora: 24horas')
    const inicio_jogo = input('Hora do inicio do jogo. ex 12:30 : ')
    const fim_jogo = input('Hora do fim do jogo: ')
    const [hr_inicio, min_inicio] = inicio_jogo.split(':').map(Number)
    const [hr_fim, min_fim] = fim_jogo.split(':').map(Number)
    const duracao = duracao_jogo(hr_inicio,min_inicio, hr_fim, min_fim)
}
main()
function duracao_jogo(hr_inicio,min_inicio, hr_fim, min_fim){
    let duracao_hrs, duracao_mins
    if(hr_inicio > hr_fim && hr_inicio > hr_fim){
        duracao_hrs = hr_inicio - hr_fim
        duracao_mins = min_inicio - min_fim 
    }else{
        duracao_hrs = hr_fim - hr_inicio
        duracao_mins = min_fim - min_inicio
    }
    if(duracao_mins >= 60){
        duracao_mins /= 60
        duracao_hrs += duracao_mins
        console.log(`Duração do jogo: ${duracao_hrs} horas`)
    }
    if(duracao_hrs > 1 && duracao_mins > 1){
        console.log(`Duração do jogo: ${duracao_hrs} horas e ${duracao_mins} minutos`)
    }else{
        console.log(`Duração do jogo: ${duracao_hrs} hora e ${duracao_mins} minutos`)
    }

}