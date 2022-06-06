import fs from 'fs';
const input = fs.readFileSync('1114.txt', 'utf8')
var lines = input.split('\n');

function main(){
    let i = 0
    let senha = Number(lines[i++])
    while(senha !== 2002){
        console.log('Senha Invalida')
        senha = Number(lines[i++])
    }
    console.log('Acesso Permitido')
}
main()