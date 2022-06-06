import fs from 'fs';
const input = fs.readFileSync('1064.txt', 'utf8')
var lines = input.split('\n');

function main(){
    let count = 0 
    let c = 0
    let media 
    let load = 0
    while(c !== 6){
        let value = Number(lines.shift())
        if(value > 0){
            count ++
            load += value 
            media = load / count  
        }
        c ++
    }
    console.log(`${count} valores positivos`)
    console.log(`${media.toFixed(1)}`)
}
main()