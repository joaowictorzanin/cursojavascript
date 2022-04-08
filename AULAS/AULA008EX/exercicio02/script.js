function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERROR] por favor verifique a data inserida ou se não está vazia!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade > 0 && idade < 10) {
                //criança
                img.setAttribute('src','photos/homemcrianca.png')
            } else if (idade < 21) {
                //adolescente
                img.setAttribute('src','photos/homemjovem.png')
            } else if (idade < 50 ) {
                //adulto
                img.setAttribute('src','photos/homemadulto.png')
            } else{
                //velho
                img.setAttribute('src','photos/homemvelho.png')
            }
                
            
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade > 0 && idade < 10) {
                //criança
                img.setAttribute('src','photos/mulhercrianca.png')
            } else if (idade < 21) {
                //adolescente
                img.setAttribute('src','photos/mulherjovem.png')
            } else if (idade < 50 ) {
                //adulto
                img.setAttribute('src','photos/mulheradulta.png')
            } else{
                //velho
                img.setAttribute('src','photos/mulhervelha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `O sexo é ${genero} e a idade ${idade} anos`
        res.appendChild(img)
    }
}
