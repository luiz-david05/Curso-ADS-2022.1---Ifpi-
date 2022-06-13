import fs from  'fs';
const input = fs.readFileSync('q1.txt', 'utf8')
const lines = input.split('\n');

function main(){
    let i = 0
    let value = Number(lines[i++])
    while(value !== 0){
        console.log(` numero ${value}`)
        divisores(value)
        value = Number(lines[i++])
    }
}
main()
function divisores(value){
    let divisores_value = value
    while(divisores_value > 0){
        if(value % divisores_value === 0){
           console.log(`divisores do número: [${divisores_value}]`) 
        }
        divisores_value--
    }
}