import fs from  'fs';
const input = fs.readFileSync('q2.txt', 'utf8')
const lines = input.split('\n');

function main(){
    const n = Number(lines[0])
    let i = 0

    while(i < n){
        if(i % 2 === 0){
            console.log(`pares[${i}]`)
        }
        i++
    }
}
main()