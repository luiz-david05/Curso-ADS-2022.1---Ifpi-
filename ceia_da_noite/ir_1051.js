import fs from 'fs'
const input = fs.readFileSync('1051.txt', 'utf8')
var lines = input.split('\n');

function main(){
    const salary = Number(lines[0])
    const lion = calcular_ir(salary)
}
main()
function calcular_ir(salary){
let ir, isento
if(salary <= 2000){
    console.log('Isento')
}else if(salary <= 3000){
    ir = (salary - 2000) * (8 / 100)
    console.log(`R$ ${ir.toFixed(2)}`)
}else if(salary <= 4500){
    ir = (salary - 3000) * (18 / 100) + 1000 * (8 / 100)  
    console.log(`R$ ${ir.toFixed(2)}`)
}else{
    ir = (salary - 4500) * (28 / 100) + 1500 * (18 / 100) + 1000 * (8 / 100)
    console.log(`R$ ${ir.toFixed(2)}`)
}
}