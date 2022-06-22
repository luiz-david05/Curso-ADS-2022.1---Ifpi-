import fs from 'fs';
const input = fs.readFileSync('1078.txt', 'utf8')
const lines = input.split('\n');

function main(){
    const n = Number(lines[0])
    for(let i = 0; i < 10; i++){
        console.log(`${i + 1} x ${n} = ${(i + 1) * n}`)
    }
}
main()