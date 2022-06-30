import {print, input} from '../../utils.js'
function main(){
    // start 
    print('conversor de m/s para km/h')
    const speed_ms = Number (input('velocidade em m/s: '))
    // process
    const speed_km = converter_ms_km(speed_ms)
    // output
    console.log(`feita a conversão: ${speed_km.toFixed(2)} km/h`)
}
main()

function converter_ms_km(ms){
    return ms * 3.6
}
