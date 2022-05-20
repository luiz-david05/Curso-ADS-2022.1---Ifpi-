import {input} from '../utils.js'
function main(){
    let entrada = Number(input('Numero: '))
    let contador = 1
    for(let i = 1; i <= entrada; i++){
        for(let j = 1; j <= 3; j++ ){
        console.log(`${contador ++}`)
        }
        contador ++
        console.log('PUM\n')
    }
}
main()
// entender a lógica depois