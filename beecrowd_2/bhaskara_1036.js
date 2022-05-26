import fs from 'fs';
const input = fs.readFileSync('1036.txt', 'utf8')
var lines = input.split('\n');

function main(){
    const [a, b, c] = lines[0].split(' ').map(Number)
    const raizes = bhaskara(a, b, c)
    
    
}
main()
function bhaskara(a, b, c){
    const delta = Math.pow(b, 2) - (4 * a * c)
    const x1 = ((-b) + Math.sqrt(delta)) / (2 * a) 
    const x2 = ((-b) - Math.sqrt(delta)) / (2 * a)
    if(delta < 0){
        console.log('Impossivel calcular')
    }else if(isNaN(x1) || isNaN(x2)){
        console.log('Impossivel calcular') 
    }else{
        console.log(`R1 = ${x1.toFixed(5)}`)
        console.log(`R2 = ${x2.toFixed(5)}`)       
    } 
}