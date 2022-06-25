import fs from  'fs';
const input = fs.readFileSync('1133.txt', 'utf8')
const lines = input.split('\n');

function main(){
    const x = Number(lines[0])
    const y = Number(lines[1])
    const maior = Math.max(x, y)
    const menor = Math.min(x, y)

    for(let i = (menor + 1); i < maior; i++){
        if(i % 5 === 2 || i % 5 === 3){
            console.log(i)
        }
    }
}
main()