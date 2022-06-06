import fs from 'fs';
const input = fs.readFileSync('1067.txt', 'utf8')
var lines = input.split('\n');

function main(){
    let numero = Number(lines[0])
    for(let i = 1; i <= numero; i = i + 2){
    console.log(i)
    }
}
main()