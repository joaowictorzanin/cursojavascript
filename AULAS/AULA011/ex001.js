console.log('------------------------------')

let num = [1, 2, 3, 4, 5]
console.log(`Nosso vetor é o: ${num}`)

num[5] = 6
console.log(`Agora adicionamos mais um item: ${num}`)

num.push(7)
console.log(`Outra forma de adicionamos mais um item: ${num}`)

num[4] = 7
console.log(`Agora alteramos a variavel ${num}`)

num = [7, 6, 5, 4, 3, 2, 1]
console.log(`Agora mudamos completamente os numeros ${num}`)

// num.length = diz o tamanho do meu array
// num.sort() = vai organizar os elementos em ordem crescente

console.log(`O nosso vetor(array) tem ${num.length} posiçoes`)
console.log(`Dessa forma organizamos eles em forma crescente: ${num.sort()}`)

console.log('--------------------')

//mostrando uma variavel por vez em tres metodos

// 1- usando o console.log()
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])
console.log(num[6])

console.log('--------------------')

// utilizando o for
for (var pos01 = 0; pos01 < num.length; pos01++) {
    console.log(`Metodo 2: ${num[pos01]}`)
}

console.log('--------------------')

//utilizando o for (in)
for (var pos02  in num) {
    console.log(`Metodo 3: ${num[pos02]}`)
}

console.log('--------------------')

// retornando a chave que o valor se encontra
console.log(`O valor ${num[6]} fica indexado no lugar: ${num.indexOf(7)}`)

console.log(`Se o valor não existe ele retorna: ${num.indexOf(9)}`)


console.log('------------------------------')
console.log('------- BY: JOAO ZANIN -------')
console.log('------------------------------')
