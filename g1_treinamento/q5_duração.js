import fs from 'fs';
const input = fs.readFileSync('q5.txt', 'utf8')
const lines = input.split('\n');

function main(){
    let i = 0
    const momento_inicial = lines[i++]
    const momento_final = lines[i++]
    const [hr_inicial, min_inicial] = momento_inicial.split(':').map(Number)
    const [hr_final, min_final] = momento_final.split(':').map(Number) 
    const duracao = duracao_momento(hr_inicial, min_inicial, hr_final, min_final)
    console.log(`Duração do momento: ${duracao[0]} Hora(s) ${duracao[1]} Minuto(s)`)
}
main()
function duracao_momento(hr_init, min_init, hr_end, min_end){
    let duracao_hr = hr_end - hr_init
    let duracao_min = min_end - min_init

    if(duracao_min < 0){
        duracao_min += 60
        duracao_hr--
    }

    if(duracao_hr < 0){
        duracao_hr += 24
    }

    // caso especial
    if(duracao_hr === 0 && duracao_min === 0){
        duracao_hr = 24
    }
    return [duracao_hr, duracao_min]
}