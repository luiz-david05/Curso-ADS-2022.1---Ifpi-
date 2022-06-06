import fs from 'fs';
const input = fs.readFileSync('1070.txt', 'utf8')
var lines = input.split('\n');

function main(){
    let x = Number(lines[0])
    if(x % 2 === 0){
        x ++
    }
    for(let i = x; i < x + 11; i = i + 2){
        console.log(i)
    }
}
main()