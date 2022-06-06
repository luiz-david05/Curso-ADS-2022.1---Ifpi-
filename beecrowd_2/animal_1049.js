import fs from 'fs';
const input = fs.readFileSync('1049.txt', 'utf8')
var lines = input.split('\n');

function main(){
    const palavra_1 = lines[0]
    const palavra_2 = lines[1]
    const palavra_3 = lines[2]
    const animal = verificar_animal(palavra_1, palavra_2, palavra_3)
    console.log(`${animal}`)
}
main()
function verificar_animal(p1, p2, p3){
    let animal
    if(p1 === 'vertebrado' && p2 === 'ave' && p3 === 'carnivoro'){
        animal = 'aguia'
    }else if(p1 === 'vertebrado' && p2 === 'ave' && p3 === 'onivoro'){
        animal = 'pomba'
    }else if(p1 === 'vertebrado' && p2 === 'mamifero' && p3 === 'onivoro'){
        animal = 'homem'
    }else if(p1 === 'vertebrado' && p2 === 'mamifero' && p3 === 'herbivoro'){
        animal = 'vaca'
    }
    if(p1 === 'invertebrado' && p2 === 'inseto' && p3 === 'hematofago'){
        animal = 'pulga'
    }else if(p1 === 'invertebrado' && p2 === 'inseto' && p3 === 'herbivoro'){
        animal = 'lagarta'
    }else if(p1 === 'invertebrado' && p2 === 'anelideo' && p3 === 'hematofogo'){
        animal = 'sanguessuga'
    }else if(p1 === 'invertebrado' && p2 === 'anelideo' && p3 === 'onivoro'){
        animal = 'minhoca'
    }
    return animal
    
}
