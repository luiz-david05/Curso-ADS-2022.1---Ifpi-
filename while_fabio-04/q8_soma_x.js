import fs from  'fs';
const input = fs.readFileSync('q8.txt', 'utf8')
const lines = input.split('\n');

function main(){
    let i = 0
    const numero = Number(lines[i++])
    let x = Number(lines[i++])
    let y = Number(lines[i++])
    let soma = x + y
    while(!(soma === numero)){
        x = Number(lines[i++])
        y = Number(lines[i++])
        soma = x + y
    }
    console.log(`numero : ${numero}`)
    console.log(`valor x: ${x} valor y: ${y}`)
    console.log(`soma = ${soma}`)
}
main()
