/*Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, segundo a fórmula: */
import {input} from '../utils.js'
function main(){
    const [x1, y1] = input('x1 e y1: ').split(" ").map(Number)
    const [x2, y2] = input('x2 e y2: ').split(" ").map(Number)
    const parcial = Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2)
    const distancia = Math.sqrt(parcial) 
    console.log(`${distancia.toFixed(4)}`)
}main()