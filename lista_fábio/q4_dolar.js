import {print , input} from '../utils.js'
function main(){
    //start
    print('conversor de real para dólar ')
    const v_dollar = Number(input('cotação  do dólar hoje: '))
    let dollar = Number(input('valor em dólar: '))
    //process 
    dollar *= v_dollar
    //output
    print(`valor em reais: ${dollar .toFixed(2)}R$`)
}
main()