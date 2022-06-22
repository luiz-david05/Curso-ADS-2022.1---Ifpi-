import fs from 'fs';
const input = fs.readFileSync('1072.txt', 'utf8')
const lines = input.split('\n');

function main(){
    let i = 0
    let n = Number(lines[i++])
    let count = 0
    let inside = 0
    let out = 0
    while(n > count){
        let values = Number(lines[i++])
        values >= 10 && values <= 20
        ? inside++ : out++
        count++
    }
    console.log(`${inside} in`)
    console.log(`${out} out`)
}
main()