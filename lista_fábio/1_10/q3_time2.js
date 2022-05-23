import {print , input} from '../../utils.js'
function main(){
    //start
    print('conversor de minutos para horas e minutos')
    let mins = Number(input('minutos: '))
    //process 
    let hrs = Math.trunc (mins/60)
    let hrs_mins = mins % 60
    if(hr > 1){
        print(`feita a conversão: ${hrs} hora ${hrs_mins} minutos`)
    }else{
        print(`feita a conversão: ${hrs} horas e ${hrs_mins} minutos`)
    }
    //output
}
main()