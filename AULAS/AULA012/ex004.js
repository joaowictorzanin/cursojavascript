function fatorial(n1) {
    let fat = 1
    for(c = n1; c > 1; c --) {
        fat *= c 
    }
    return fat
}

console.log(fatorial(5))