import fs from 'fs';
const input = fs.readFileSync('area.txt', 'utf8')
var lines = input.split('\n');

function main(){
    const [a, b, c] = lines[0].split(' ').map(Number)
    const triangulo = (a * c) / 2
    const pi = 3.14159
    const circulo = pi * (Math.pow(c, 2))
    const trapezio = ((a + b) * c) / 2
    const quadrado = Math.pow(b, 2)
    const retangulo = a * b
    
    console.log(`TRIANGULO: ${triangulo.toFixed(3)}`)
    console.log(`CIRCULO: ${circulo.toFixed(3)}`)
    console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`)
    console.log(`QUADRADO: ${quadrado.toFixed(3)}`)
    console.log(`RETNGULO: ${retangulo.toFixed(3)}`)
}
main()