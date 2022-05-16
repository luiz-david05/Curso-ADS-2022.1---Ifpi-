import {input} from '../../utils.js'

function main(){
    // calcular imposto de renda questão 1051 beecrowd
    const renda = Number(input('valor da sua renda: '))
    const calculo_ir = calcular_ir(renda)
}
main()
function calcular_ir(renda){
    let ir = 0
    let dif
    if(renda <= 2000){
        console.log('Isento')
    }else if( renda > 2000 && renda < 3000){
        dif = renda - 2000
        ir = dif * (8 / 100)
        console.log(`R$ ${ir.toFixed(2)}`)
    }else if( renda > 3000 && renda < 4500){
        let ir_1000 = 1000 * (8 / 1000)
        dif = renda - 3000 
        ir = dif * (18 / 1000) + ir_1000
        console.log(`R$ ${ir.toFixed(2)}`)
    }
}