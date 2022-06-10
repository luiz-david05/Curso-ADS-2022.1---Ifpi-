import fs from 'fs';
const input = fs.readFileSync('1072.txt', 'utf8')
const lines = input.split('\n');

function main(){
    let value = Number(lines[0])
    let inside = 0
    let out = 0
    for(let i = 0; i <= value; i ++){
        value = Number(lines[i + 1])
        if(value >= 10 && value <= 20){
            inside ++
        }else{
            out ++
        }
    }
    console.log(`${inside} in`)
    console.log(`${out} out`)
}
main()