import {print , input} from '../../utils.js'
function main(){
    //start
    const v = Number(input('digite o valor em reais: '))
    //process
    const v_70 = v * 0.70
    //output
    print(`70% desse valor é: ${v_70.toFixed(2)}R$`)
}
main()