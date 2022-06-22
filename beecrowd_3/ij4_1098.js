function main(){
    let j = 0
    let k = 1
    for(let i = 0; i < 3; i++){
        console.log(`I=${j} J=${k}`)
        k = k + 1
    }
    j += 0.2
    k -= 3
    k += 0.2
    for(let i = 0; i < 3; i++){
        console.log(`I=${j} J=${k}`)
        k = k + 1
    }
    j += 0.2
    k -= 3
    k += 0.2
    for(let i = 0; i < 3; i++){
        console.log(`I=${j} J=${k.toFixed(1)}`)
        k = k + 1
    }
    j += 0.2
    k -= 3
    k += 0.2
    for(let i = 0; i < 3; i++){
        console.log(`I=${j.toFixed(1)} J=${k.toFixed(1)}`)
        k = k + 1
        if(j > 1){
            
        }
    }
    j += 0.2
    k -= 3
    k += 0.2
    for(let i = 0; i < 3; i++){
        console.log(`I=${j.toFixed(1)} J=${k.toFixed(1)}`)
        k = k + 1
    }
    j += 0.2
    k += 0.2
    k = 1
    for(let i = 0; i < 3; i++){
        if(j === 1){
            k = k + 1
            j = 1
            console.log(`I=${j} J=${k}`)
        }
    }
    k -= 2
    j += 0.2
    k += 0.2
    for(let i = 0; i < 3; i++){
        console.log(`I=${j.toFixed(1)} J=${k.toFixed(1)}`)
        k = k + 1
    }
    j += 0.2
    k += 0.2
    k -= 3
    for(let i = 0; i < 3; i++){
        console.log(`I=${j.toFixed(1)} J=${k.toFixed(1)}`)
        k = k + 1
    }
    j += 0.2
    k += 0.2
    k -= 3
    for(let i = 0; i < 3; i++){
        console.log(`I=${j.toFixed(1)} J=${k.toFixed(1)}`)
        k = k + 1
    }
    j += 0.2
    k += 0.2
    k -= 3
    for(let i = 0; i < 3; i++){
        console.log(`I=${j.toFixed(1)} J=${k.toFixed(1)}`)
        k = k + 1
    }
    k = 2
    j = 2
    for(let i = 0; i < 3; i++){
        if(j === 2){
            k = k + 1
            console.log(`I=${j} J=${k}`)
        }
    }

}
main()