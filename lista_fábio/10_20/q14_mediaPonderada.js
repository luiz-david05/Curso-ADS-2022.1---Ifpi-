import {print , input} from '../../utils.js'
function main(){
    //start
    print('digite 3 notas e seus respectivos pesos')
    const n_1 = Number(input('digite a primeira: '))
    const n_2 = Number(input('digite a segunda: '))
    const n_3 = Number(input('digite a terceira: '))
    const p_1 = Number(input('digite o peso da primeira: '))
    const p_2 = Number(input('digite o peso da segunda: '))
    const p_3 = Number(input('digite o peso da terceira: '))
    //process
    const n = (p_1*n_1) + (p_2*n_2) + (p_3*n_3)
    const p = p_1 + p_2 + p_3
    const media_p = n / p
    //output
    print(`Media = ${media_p.toFixed(1)} `) 
}
main()