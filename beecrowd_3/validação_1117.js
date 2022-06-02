import fs from 'fs';
const input = fs.readFileSync('1117.txt', 'utf8')
var lines = input.split('\n');

function main(){
let media
let num1 = Number(lines[0])
let num2 = Number(lines[1])
let i = 0
while(num1 < 0 || num1 > 10){
        console.log('nota invalida')
        num1 = Number(lines[i ++])
        i ++
}
while(num2 < 0 || num2 > 10){
        console.log('nota invalida')
        num1 = Number(lines[i ++])
        i ++
}
media = (num1 + num2) / 2
console.log(`media = ${media.toFixed(2)}`)
}
main()
