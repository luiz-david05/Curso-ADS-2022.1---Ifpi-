/* leia 3 números e os escreva em ordem crescente */

import {input} from '../../utils.js'
function main(){
    const [n1, n2, n3] = input('digite os 3 números: ').split(' ').map(Number)
    const [a, b, c] = ordem_crescente(n1, n2, n3)
    console.log('em ordem crescente:', c, b, a)
}
main()
function ordem_crescente(v1, v2, v3){
    if (v1 > v2){
        if (v2 > v3){
            return [v1, v2, v3]
        }else if (v3 > v1){
            return [v3, v1, v2]
        }else{
            return [v1, v3, v2]
        }
    }else{
        if (v1 > v3){
            return [v2, v1, v3]
        }else if (v3 > v2){
            return [v3, v2, v1]
        }else{
            return [v2, v3, v1]
        }
    }
}
