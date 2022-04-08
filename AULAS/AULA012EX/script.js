let numero = document.getElementById('numero')
let tabela = document.getElementById('tabela')
let resposta = document.getElementById('resposta')
let vetor = []
let soma = 0

function adicionar() {
    resposta.innerHTML = ''
    let num = Number(numero.value)
    if (numero.value.length == 0 || numero.value < 1|| numero.value > 100 || vetor.indexOf(num) != -1) {
        window.alert('[ERROR] Verifique o numero digitado')
    } else {
        var option = document.createElement('option')
        option.text = `adicionamos ${num} a sua lista`
        tabela.appendChild(option)
        vetor.push(num)
    }
    numero.value = ''
    numero.focus()
}

function resolver(){
    if (vetor.length == 0) {
        window.alert('[ERROR] Adicione algum numero')
    } else {
        vetor.sort((a, b) => a - b)
        let menor = Math.min(...vetor)
        let maior = Math.max(...vetor)
        for(let c in vetor){
            soma += vetor[c]
        }
        //window.alert(`${menor}, ${maior}`)
        resposta.innerHTML = `<br>Ao todo temos ${vetor.length} elementos`
        resposta.innerHTML += `<br>O maior numero foi ${maior}`
        resposta.innerHTML += `<br>O menor numero foi ${menor}`
        resposta.innerHTML += `<br>A soma de todos os numero é ${soma}`
        resposta.innerHTML += `<br>E a média deles é de  ${soma/vetor.length}`
    }
   
}

