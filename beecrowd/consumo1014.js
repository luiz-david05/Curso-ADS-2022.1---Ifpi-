/*Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km) e o total de combustível gasto (em litros*/
import {input} from '../utils.js'
function main(){
    const distancia = Number(input('distancia: '))
    const combustivel = Number(input('combustivel gasto k/m: '))
    const consumo = (distancia / combustivel)
    console.log(`consumo = ${consumo.toFixed(3)} km/l`)
}main()