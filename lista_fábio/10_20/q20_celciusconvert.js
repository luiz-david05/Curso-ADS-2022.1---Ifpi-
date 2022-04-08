import {print , input} from '../../utils.js'
function main(){
    //start
    print('conversor °C para °F')
    const celsius = Number(input('digite a temperatura em °C: '))
    //process
    const fahrenheit = (celsius * 9 + 160)/5
    //output
    print(`temperatura em °F: ${fahrenheit.toFixed(1)}`)
}
main()