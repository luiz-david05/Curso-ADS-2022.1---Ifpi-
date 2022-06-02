import {input} from '../utils.js'

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