import {input} from '../../utils.js'

function main(){
    const senha = Number(input('password: '))
    const password = verificar_password(senha) 
}
main()

function verificar_password(msg){
    if(msg === 1234){
        console.log('Acesso autorizado!')
    }else{
        console.log('Acesso negado!')
    }
}