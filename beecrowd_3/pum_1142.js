import fs from 'fs';
const input = fs.readFileSync('1142.txt', 'utf8')
const lines = input.split('\n');

function main(){
    let entrada = Number(lines[0])
    for(let i = 1; i <= entrada * 4; i = i + 4){
        console.log(`${i} ${i + 1} ${i + 2} PUM`)
    }
}
main()


