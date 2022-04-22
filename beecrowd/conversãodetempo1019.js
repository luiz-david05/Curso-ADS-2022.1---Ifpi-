/*Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos. */
import {input} from '../utils.js'
function main(){
    const segundos = Number(input('tempo em segundos: '))
    const n_s = 36 * 100
    const horas = Math.trunc(segundos / n_s)
    const minutos = Math.trunc(segundos / 60) % 60 
    const resto_segundos = segundos % 60
    console.log(`${horas}:${minutos}:${resto_segundos}`)
}main()