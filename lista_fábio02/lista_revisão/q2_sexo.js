import { input } from "../../utils.js"
function main(){
    const sexo = input('digite o sexo(F e M): ')
    const sexo_2 = verificar_sexo(sexo)
}
main()
function verificar_sexo(letra){
    if(letra === 'F'){
        console.log(`${letra} - Feminino`)
    }else if(letra === 'M'){
        console.log(`${letra} - Masculino`)
    }else{
        console.log('opções possíveis: Feminino e Masculino - F e M ')
    }
}