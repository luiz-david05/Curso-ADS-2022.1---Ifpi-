import {input} from '../../utils.js'
function main(){
    const numero = input('Número para arredondar: ')
    let [int, fra] = numero.split('.').map(Number)
    if(fra >= 5){
        int ++ 
    }else{
        int 
    }
    console.log(`Número arredondado: ${int}`)
}
main()