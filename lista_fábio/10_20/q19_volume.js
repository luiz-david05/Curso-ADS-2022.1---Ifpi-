import {print , input} from '../../utils.js'
function main(){
    //start
    print('calcular o volume de uma esfera')
    const ray = Number(input('digite o raio: '))
    //process
    const pi = 3.4
    const ray_3 = Math.pow (ray , 3)
    const volume = (4 * pi * ray_3) / 3
    //output
    print(`o volume é: ${volume.toFixed(1)}`)

}
main()