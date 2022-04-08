import {print , input} from '../utils.js'
function main(){
    //start
    print('conversor de minutos para horas e minutos')
    let mins = Number(input('minutos: '))
    //process 
    let hrs = Math.trunc (mins/60)
    let hrs_mins = mins % 60
    //output
    print(`feita a conversão: ${hrs} hora(s) e ${hrs_mins} minuto(s)`)
}
main()