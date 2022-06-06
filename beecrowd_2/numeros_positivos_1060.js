import fs from 'fs';
const input = fs.readFileSync('1060.txt', 'utf8')
var lines = input.split('\n');

function main(){
    let c = 0
    let count = 0
    while(c !== 6){
        let numero = Number(lines.shift())
        if(numero > 0){
            count ++
        }
        c ++
    }
    console.log(`${count} valores positivos`)
}
main()