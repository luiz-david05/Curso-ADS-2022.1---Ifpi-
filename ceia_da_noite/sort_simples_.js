import fs from 'fs';
const input = fs.readFileSync('1042.txt', 'utf8')
var lines = input.split('\n');
function main(){
    const numbers = lines[0].split(' ').map(Number)
    const [n1, n2, n3] = lines[0].split(' ').map(Number)
    numbers.sort((a, b) => a - b)
    console.log(numbers[0])
    console.log(numbers[1])
    console.log(numbers[2])
    console.log('')
    console.log(n1)
    console.log(n2)
    console.log(n3)
    
}
main()