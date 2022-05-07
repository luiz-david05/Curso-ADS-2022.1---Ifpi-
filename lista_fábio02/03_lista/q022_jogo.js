import { input } from "../../utils.js"
function main(){
    const inicio = input('digite a hora e minuto em que se iniciou o jogo(ex: 2:31): ')
    const [hr, min] = inicio.split(':').map(Number)
    const fim = input('digite a hora e minuto em que se encerrou o jogo: ')
    const [hr_2, min_2] = fim.split(':').map(Number)
}
main()
function duracao (hr, min, hr_2, min_2){
    if(hr + hr_2 === 24){
        return 'ultrapassou a duração máxima'
    }
}
function all_in_hours(min){
    min / 60
    return min
}