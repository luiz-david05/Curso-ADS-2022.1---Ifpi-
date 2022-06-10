import fs from 'fs'
const input = fs.readFileSync('1047.txt', 'utf8')
let lines = input.split('\n');

function main(){
    const [hr_inicial, min_inicial, hr_final, min_final] = lines[0].split(' ').map(Number)
    const duracao_jogo = calcular_tempo_jogo(hr_inicial, min_inicial, hr_final, min_final)
    console.log(`O JOGO DUROU ${duracao_jogo[0]} HORA(S) E ${duracao_jogo[1]} MINUTO(S)`)

}
main()
function calcular_tempo_jogo(hr_init, min_init, hr_end, min_end){
    let duracao_hr = hr_end - hr_init
    let duracao_min = min_end - min_init

    if(duracao_min < 0){
        duracao_min += 60
        duracao_hr --
    }

    if(duracao_hr < 0){
        duracao_hr += 24
    }else if (duracao_hr === 0 && duracao_min === 0){
        duracao_hr = 24
    }

    return[duracao_hr, duracao_min]
}
