import fs from 'fs';
const input = fs.readFileSync('distancia.txt', 'utf8')
var lines = input.split('\n');
function main(){
    function main(){
        const [x1, y1] = lines[0].split(' ').map(Number)
        const [x2, y2] = lines[1].split(' ').map(Number)
        const x = x2 - x1
        const y = y2 - y1
        const ao_quadrado = Math.pow(x, 2) + Math.pow(y, 2)
        const distancia = Math.sqrt(ao_quadrado)
        console.log(`${distancia.toFixed(4)}`)
    }
    main()
    
}main()