import fs from 'fs';
const input = fs.readFileSync('1066.txt', 'utf8')
var lines = input.split('\n');

function main(){
    let c = 0
    let count_pares = 0
    let count_impares = 0
    let count_positive = 0
    let count_negative = 0
    while(c !== 5){
        let value = Number(lines.shift())
        if(value % 2 === 0){
            count_pares ++
        }else{
            count_impares ++

        }if(value > 0){
            count_positive ++
        }else if(value < 0){
            count_negative ++
        }
        c ++
    }
    console.log(`${count_pares} valor(es) par(es)`)
    console.log(`${count_impares} valor(es) impar(es)`)
    console.log(`${count_positive} valor(es) positivo(s)`)
    console.log(`${count_negative} valor(es) negativo(s)`)
}
main()