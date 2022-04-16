//Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e
//ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo.
// d = math.pow(x2-x1)2 + (y2-y1)2
import {print,input} from '../../utils.js'
function main(){
    //entradas
    print(`calcular a distãncia entre dois pontos quaisquer no plano cartesiano `)
    const x1 = Number(input('valor de x1: '))
    const y1 = Number(input('valor de y1: '))
    const x2 = Number(input('valor de x2: '))
    const y2 = Number(input('valor de y2: '))
    //processo
    const parcial = Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2)
    const distancia = Math.sqrt(parcial) 
    //saida
    print(`a distância entre os pontos é : ${distancia}`)
}main()