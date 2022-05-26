import fs from 'fs';
const input = fs.readFileSync('1038.txt', 'utf8')
var lines = input.split('\n');


function main(){
    const [cod, qtd] = lines[0].split(' ').map(Number)
    const total = pedido(cod, qtd)
    console.log(`Total: R$ ${total.toFixed(2)}`)
}
main()
function pedido(cod, qtd){
    let total
    if(cod === 1){
       total = qtd * 4.0
    }else if(cod === 2){
       total = qtd * 4.50
    }else if(cod === 3){
       total = qtd * 5.0
    }else if(cod === 4){
        total = qtd * 2.0
    }else{
       total = qtd * 1.50
    }
    return total
}