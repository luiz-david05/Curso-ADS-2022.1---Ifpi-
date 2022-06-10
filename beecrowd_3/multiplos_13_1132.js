import fs from 'fs';
const input = fs.readFileSync('1132.txt', 'utf8')
const lines = input.split('\n');

function main(){
    const x = Number(lines[0])
    const y = Number(lines[1])
    let valores = 0
    if(x < y){
        for(let i = x; i <= y; i ++){
            if(i % 13 !== 0){
                valores += i
            }
        }
        console.log(valores)
    }else{
        for(let i = y; i <= x; i ++){
            if(i % 13 !== 0){
                valores += i
            }
        }
        console.log(valores) 
}
}
main()