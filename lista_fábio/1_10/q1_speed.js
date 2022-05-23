import {print, input} from '../../utils.js'
function main(){
    // start 
    print('conversor de m/s para km/h')
    let speed_ms = Number (input('velocidade em m/s: '))
    // process
    let speed_km = speed_ms * 3.6
    // output
    print(`feita a conversão: ${speed_km.toFixed(2)} km/h`)
}
main()