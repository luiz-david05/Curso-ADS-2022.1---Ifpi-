import fs from  'fs';
const input = fs.readFileSync('q4.txt', 'utf8')
const lines = input.split('\n');

function main(){
    let numero = Number(lines[0])
    let divisao_sucessiva = dividir_por_2(numero)
}
main()

function dividir_por_2(value){
    let count = 0
    while(!(value < 1)){
        value /= 2
        count = value
        if(count < 1){
            console.log(`resultado da última divisão por 2 = ${count}`)
        }
    }
}
