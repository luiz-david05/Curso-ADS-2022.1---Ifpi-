import fs from  'fs';
import { mostrar_numeros_inteiros } from './funcoes_utils.js';
const input = fs.readFileSync('q1.txt', 'utf8')
const lines = input.split('\n');

function main(){
    const n = Number(lines[0])
    const inteiros = mostrar_numeros_inteiros(n)
}
main()

