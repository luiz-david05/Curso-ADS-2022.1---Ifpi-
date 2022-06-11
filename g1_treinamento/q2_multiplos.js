import fs from 'fs';
const input = fs.readFileSync('q2.txt', 'utf8')
var lines = input.split('\n');

function main(){
    let i = 0
    let a = Number(lines[i ++])
    let b = Number(lines[i ++])
    let count_pares = 0
    let count_impares = 0
    let count_positive = 0
    let count_negative = 0
    a % 2 === 0 ? count_pares++ : count_impares++
    b % 2 === 0 ? count_pares++ : count_impares++
    a >= 0 ? count_positive++ : count_negative++
    b >= 0 ? count_positive++ : count_negative++
    while(!(a % b === 0)){
        a = Number(lines[i ++])
        b = Number(lines[i ++])
        a % 2 === 0 ? count_pares++ : count_impares++
        b % 2 === 0 ? count_pares++ : count_impares++
        a >= 0 ? count_positive++ : count_negative++
        b >= 0 ? count_positive++ : count_negative++
    }
    console.log(`\n${count_pares} valor(es) par(es)`)
    console.log(`${count_impares} valor(es) impar(es)`)
    console.log(`${count_positive} valor(es) positivo(s)`)
    console.log(`${count_negative} valor(es) negativo(s)`)
}
main()
