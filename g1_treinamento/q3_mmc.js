import fs from 'fs';
const input = fs.readFileSync('q3.txt', 'utf8')
const lines = input.split('\n');

function main(){
    let [a, b] = lines[0].split(' ').map(Number)
    const mmc = calcular_mmc(a, b)
    console.log(`mmc = ${mmc}`)
}
main()
function calcular_mmc(a, b){
    let c = a > b ? a : b
    while(!(c % a === 0 && c % b === 0)){
        c++
    }
    return c
}