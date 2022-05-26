import fs from 'fs';
const input = fs.readFileSync('1041.txt', 'utf8')
var lines = input.split('\n');

function main(){
    const [x, y] = lines[0].split(' ').map(Number)
    const quadrantes = verificar_quadrantes(x,y)
}
main()

function verificar_quadrantes(x, y){
    if(x === 0){
        if(y === 0){
            console.log('Origem')
        }else{
            console.log('Eixo Y')
        }
    }else if(y === 0){
        if(x !== 0){
            console.log('Eixo X')
        }
    }else if(x > 0){
        if(y > 0){
            console.log('Q1')
        }else{
            console.log('Q4')
        }
    }else if(x < 0){
        if(y > 0){
            console.log('Q2')
        }else{
            console.log('Q3')
        }
    }
}