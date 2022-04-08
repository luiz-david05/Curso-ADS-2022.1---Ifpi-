import {print , input} from '../../utils.js'
function main(){
    //start
    const v = Number(input('digite o valor do seu salário em reais: '))
    //process
    const pay = (v * 0.25) + v
    //output
    print(`salário com aumento de 25%: ${pay.toFixed(2)}R$`) 
}
main()