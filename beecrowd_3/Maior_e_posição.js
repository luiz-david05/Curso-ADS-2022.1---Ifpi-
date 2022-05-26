import fs from 'fs';
const input = fs.readFileSync('1131.txt', 'utf8')
var lines = input.split('\n');

function main(){

    let contador = 1
    let valor
    let maior = Number(lines[0])
    let posicao_maior = 1

    while(contador < 100){
        contador ++ 
        valor = Number(lines[contador-1])
        
        if (valor > maior){
            maior = valor
            posicao_maior = contador
        }
    }

    console.log(maior)
    console.log(posicao_maior)

}

main()
