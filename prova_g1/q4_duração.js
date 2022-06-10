import { input } from '../utils.js'

function main(){
    const initial_moment = input('digite o momento inicial (hh:mm): ')
    const final_moment = input('digite momento final: ')
    const [hour_1, min_1] = initial_moment.split(':').map(Number)
    const [hour_2, min_2] = final_moment.split(':').map(Number)
    const duracao = tempo(hour_1, min_1, hour_2, min_2)
}
main()
function tempo(hr_1, min_1, hr_2, min_2){
    let duracao_hrs, duracao_mins
    if(hr_1 > hr_2){
        duracao_hrs = (hr_2 + 24) - hr_1
    }else if(hr_1 < hr_2){
        duracao_hrs = hr_2 - hr_1
    }

    if(min_1 > min_2){
        duracao_mins = (min_2 + 60) - min_1
    }else{
        duracao_mins = min_1 = min_2
    }
    console.log(`DUROU ${duracao_hrs} HORA(S) : ${duracao_mins} MINUTO(S)`)
}
