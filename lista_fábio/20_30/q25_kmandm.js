//Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.
import {print,input} from '../../utils.js'
function main(){
    //start
    let m = Number(input('valor em metros: '))
    //process 
    const km = Math.trunc( m / 1000)
    const m_final = m % 1000
    //output
    print(`resultado: ${km} km e ${m_final} m `)
}main()