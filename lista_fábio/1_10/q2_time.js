import {print , input} from '../../utils.js'
function main(){
    //start
    print('conversor de horas/minutos para minutos')
    let hrs = Number(input('horas: '))
    const mins = Number(input('minutos: '))
    // process
    const mins_convert = (hrs * 60 + mins)
    //output
    mins_convert > 1 ? 
    print(`feita a conversão: ${mins_convert} minutos`) :
    print(`feita a conversão: ${mins_convert} minuto`) 
    
}    
main()
