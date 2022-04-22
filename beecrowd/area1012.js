/*Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.
Entrada*/
import {input} from '../utils.js'
function main(){
    const [a, b, c] = input('').split(' ').map(Number)
    const pi = 3.14159
    const triangulo = (a * c) / 2
    const circulo = (pi * c ** 2)
    const quadrado = b ** 2
    const retangulo = a * b
    const trapezio = (a + b) * c / 2

    console.log(`Triângulo: ${triangulo.toFixed(3)}`)
    console.log(`Círculo: ${circulo.toFixed(3)}`)
    console.log(`Trapezio: ${trapezio.toFixed(3)}`)
    console.log(`quadrado: ${quadrado.toFixed(3)}`)
    console.log(`Retangulo: ${retangulo.toFixed(3)}`)
}main()