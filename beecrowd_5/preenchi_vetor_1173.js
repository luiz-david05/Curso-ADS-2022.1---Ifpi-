import fs from 'fs';
const input = fs.readFileSync('1173.txt', 'utf8')
const lines = input.split('\n')

function main(){
    const N = new Array(10)

    for(let i = 0; i < 10; i++){
        N[i] = Number(lines[0])
        console.log(`N[${[i]}] = ${lines[0]}`)
        lines[0] = Number(lines[0] * 2)
    }

}
main()