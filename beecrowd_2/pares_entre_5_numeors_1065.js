import fs from 'fs';
const input = fs.readFileSync('1065.txt', 'utf8')
var lines = input.split('\n');

function main(){
    let count = 0
    let i = 0
    while(i !== 5){
        let value = Number(lines.shift())
        if(value % 2 === 0){
            count ++
        }
        i ++
    }
    console.log(`${count} valores pares`)
}
main()