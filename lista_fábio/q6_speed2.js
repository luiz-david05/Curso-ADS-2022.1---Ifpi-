import {print , input} from '../utils.js'
function main(){
    //start
    print('conversor de km/h para m/s')
    const speed_km = Number(input('km/h: '))
    //process
    const speed_ms = speed_km / 3.6
    //output
    print(`feita a conversão: ${speed_ms.toFixed(0)} m/s`)
}
main()