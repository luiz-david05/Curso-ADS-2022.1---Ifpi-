import {input} from '../utils.js'
function main(){
    const [a, b, c] = input('').split(" ").map(Number)
    const resultado = Math.max(a, b, c)
    console.log(`${resultado} é o maior`)
}main()