import {input} from '../utils.js'
// questão 1041 do becroowd

function main(){
    const entradas = input('x, y: ')
    const [x, y] = entradas.split('').map(Number)
    const result = verificacao_quadrantes(x,y)
}
main()

function verificacao_quadrantes(x, y){
    if(x === 0 && y === 0){
        console.log('Origem')
    }else if(y === 0){
        console.log('Eixo y')
    }else if(x === 0){
        console.log('Eixo x')
    }else if(x > 0 && y > 0){
        console.log('Q1')
    }else if(x < 0 && y > 0){
        console.log('Q2')
    }else if(x < 0 && y < 0){
        console.log('Q3')
    }else if(x > 0 && y < 0){
        console.log('Q4')
    }
}