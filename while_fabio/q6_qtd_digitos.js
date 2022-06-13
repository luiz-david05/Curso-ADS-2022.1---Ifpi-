import fs from  'fs';
const input = fs.readFileSync('q6.txt', 'utf8')
const lines = input.split('\n');

function main(){
    const value = lines[0]
    console.log(` numero ${value}\n quantidade de digitos = ${value.length}`)
}
main()