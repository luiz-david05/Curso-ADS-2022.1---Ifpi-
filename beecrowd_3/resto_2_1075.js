import fs from 'fs';
const input = fs.readFileSync('1075.txt', 'utf8')
const lines = input.split('\n');

function main(){
    const n = Number(lines[0])
    for(let i = 1; i <= 10000; i++){
        if(i % n === 2){
            console.log(i)
        }
    }
    
}
main()