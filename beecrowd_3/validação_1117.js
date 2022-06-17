import fs from 'fs';
const input = fs.readFileSync('1117.txt', 'utf8')
const lines = input.split('\n');

function main(){
    let i = 0
    let a = Number(lines[i++])
    while(a < 0 || a > 10){
        console.log('nota invalida')
        a = Number(lines[i++])
    }
    let b = Number(lines[i++])
    while(b < 0 || b > 10){
        console.log('nota invalida')
        b = Number(lines[i++])
    }
    let media = (a + b) / 2
    console.log(`media = ${media.toFixed(2)}`)
}   
main()
