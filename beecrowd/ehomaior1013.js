import fs from 'fs';
const input = fs.readFileSync('ehmaior.txt', 'utf8')
var lines = input.split('\n');
function main(){
    const [a, b, c] = lines[0].split(" ").map(Number)
    const maior = Math.max(a, b, c)
    console.log(`${maior} eh o maior`)
}main()