import fs from 'fs';
const input = fs.readFileSync('1052.txt', 'utf8')
var lines = input.split('\n');

function main(){
    const numero = Number(lines[0])
    const meses = verificar_mes(numero)
    console.log(`${meses}`)
}
main()

function verificar_mes(valor){
    let mes
    if(valor === 1){
        mes = 'January'
    }else if(valor === 2){
        mes = 'February'
    }else if(valor === 3){
        mes = 'March'
    }else if(valor === 4){
        mes = 'April'
    }else if(valor === 5){
        mes = 'May'
    }else if(valor === 6){
        mes = 'Junes'
    }else if(valor === 7){
        mes = 'July'
    }else if(valor === 8){
        mes = 'August'
    }else if(valor === 9){
        mes = 'September'
    }else if(valor === 10){
        mes = 'October'
    }else if(valor === 11){
        mes = 'November'
    }else if(valor === 12){
        mes = 'December'
    }
    return mes
}