import fs from  'fs';
const input = fs.readFileSync('1134.txt', 'utf8')
const lines = input.split('\n');

function main(){
    let i = 0
    let type_fuel = Number(lines[i++])
    let gasoline = 0
    let alcool = 0
    let diesel = 0

    while(type_fuel !== 4){
        type_fuel = Number(lines[i++])
        
        if(type_fuel === 1){
            alcool++
        }else if(type_fuel === 2){
            gasoline++
        }else if(type_fuel === 3){
            diesel++
        }
    }
    console.log('MUITO OBRIGADO')
    console.log(`Alcool: ${alcool}`)
    console.log(`Gasolina: ${gasoline}`)
    console.log(`Diesel: ${diesel}`)
}
main()