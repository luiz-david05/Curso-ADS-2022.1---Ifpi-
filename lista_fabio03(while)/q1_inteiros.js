import fs from  'fs';
const input = fs.readFileSync('q1.txt', 'utf8')
const lines = input.split('\n');

function main(){
    const n = mostrar_numeros_inteiros()
}
main()

function mostrar_numeros_inteiros(){
    const n = Number(lines[0])
    let i = 1
    console.log(`Numeros inteiros de 1 a ${n}`)
    
    while(i !== n){
        n > 0 ? 
        i++ :
        i--
        console.log(`${i}`)
    }
    return n 

}

