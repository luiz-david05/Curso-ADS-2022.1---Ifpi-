import fs from 'fs'
const input = fs.readFileSync('1061.txt', 'utf8')
const lines = input.split('\n');

function main(){
    const dia = lines[0].split(' ')
    const n_dia = Number(dia[1])
    const [hr_inicial, min_inicial, seg_inicial] = lines[1].split(':').map(Number)
    const dia_2 = lines[2].split(' ')
    const n_dia_2 = Number(dia_2[1])
    const [hr_final, min_final, seg_final] = lines[3].split(':').map(Number)
    const evento = calcular_duracao(n_dia, hr_inicial, min_inicial,seg_inicial,n_dia_2, hr_final, min_final, seg_final)
    console.log(`${evento[0]} dia(s)`)
    console.log(`${evento[1]} hora(s)`)
    console.log(`${evento[2]} minuto(s)`)
    console.log(`${evento[3]} segundo(s)`)
}
main()
function calcular_duracao(n_dias, hr_init, min_init, seg_init, n_dias_2, hr_end, min_end, seg_end){
    let duracao_dias, duracao_hr, duracao_min, duracao_seg
    duracao_dias = n_dias_2 - n_dias
    duracao_hr = hr_end - hr_init
    duracao_min = min_end - min_init
    duracao_seg = seg_end - seg_init

    if(duracao_seg < 0){
        duracao_seg += 60
        duracao_min --
    }

    if(duracao_min < 0){
        duracao_min += 60
        duracao_hr --
    }

    if(duracao_hr < 0){
        duracao_hr += 24
        duracao_dias --
    }
    return[duracao_dias, duracao_hr, duracao_min, duracao_seg]
}