function gerador() {
    var f = document.getElementById('fatorp')
    var select = document.getElementById('tabuada')

    if (f.value.length == 0) {
        window.alert('[ERROR] Favor digite um numero!')
    } else {
        var fatorp = Number(f.value)
        select.innerHTML = ''
        for (var multiplicador = 0; multiplicador <=10; multiplicador++) {
            var item = document.createElement('option')//cria a option na tabela
            item.text = `${fatorp} x ${multiplicador} = ${fatorp * multiplicador}`
            item.value = `select${multiplicador}`
            select.appendChild(item)//faz aparecer na lista
        }
        
    }
}
