import fs from  'fs';
const input = fs.readFileSync('q5.txt', 'utf8')
const lines = input.split('\n');

function main(){
    let x = Number(lines[0])
    let n = Number(lines[1])
    let div = 0
    while(!(n === 2)){
        div = x / n
        console.log(`resultados das divisões x / n : [${div}]`)
        x = div
        console.log(`valores de x [${x}]`)
        n--
        console.log(`valor de n [${n}]`)
    }
}
main()
