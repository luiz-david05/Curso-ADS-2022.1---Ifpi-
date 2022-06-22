import fs from 'fs';
const input = fs.readFileSync('1074.txt', 'utf8')
const lines = input.split('\n');

function main(){
    let i = 0
    const n = Number(lines[i++])
    let count = 0
    while(n > count){
        let values = Number(lines[i++])
        if(values === 0){
            console.log(`NULL`)
        }else if(values < 0 && values % 2 === 0){
            console.log('EVEN NEGATIVE')
        }else if(values > 0 && values % 2 === 0){
            console.log('EVEN POSITIVE')
        }else if(values > 0 && values % 2 !== 0){
            console.log('ODD POSITIVE')
        }else if(values < 0 && values % 2 !== 0){
            console.log('ODD NEGATIVE')
        }
        count++
    }
}
main()