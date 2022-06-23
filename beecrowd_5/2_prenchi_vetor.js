import fs from 'fs';
const input = fs.readFileSync('1177.txt', 'utf8')
const lines = input.split('\n')

function main(){
    const N = new Array(1000)
    let x = Number(lines[0])
    let y = 0

    for(let i = 0; i < 1000; i++){
        console.log(`N[${i}] = ${y}`)
        y++

        if (y === x){
            y = 0
        }
    }

}
main()