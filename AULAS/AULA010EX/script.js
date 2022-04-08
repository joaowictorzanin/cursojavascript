function contar() {
    var i = document.getElementById('inicio')
    var f = document.getElementById('fim')
    var p = document.getElementById('passo')
    var inicio = Number(i.value)
    var fim = Number(f.value)
    var passo = Number(p.value)
    var preparar = document.getElementById('preparar')
    var resposta = document.getElementById('resposta')

    //preparar.innerText = 'Contando'
    //resposta.innerHTML = `${inicio} + ${fim} + ${passo} = ${inicio+fim+passo}`
    
    if (inicio >= 0 && fim > inicio && passo > 0) {
        preparar.innerText = 'Contando!!'
        resposta.innerText = ''
        while (inicio < fim) {
            resposta.innerText += `${inicio} \u25B6`
            inicio = inicio + passo
        }
        resposta.innerText += `\u2705`
    } else if (inicio > fim && fim >= 0 && passo > 0){
        preparar.innerText = 'Contando!!'
        resposta.innerText = ''
        while (inicio > fim) {
            resposta.innerText += `${inicio} \u25B6`
            inicio = inicio - passo
        }
        resposta.innerText += `\u2705`
    }else{
        preparar.innerText = '[ERROR]Verifique os numeros digitados'
    }
}   
