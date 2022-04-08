function carregar() {
    var msg = document.getElementById('hora')
    var foto = document.getElementById('fotodia') 
    var data = new Date()
    var hora = data.getHours()
    //var hora = 15

    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        foto.src = 'fotos/manha.png'
        document.body.style.background = '#CAE1FF'

    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        foto.src = 'fotos/tarde.png'
        document.body.style.background = '#FFD700'
        
    } else {
        // BOA NOITE
        foto.src = 'fotos/noite.png'
        document.body.style.background = '#00688B'
    }
        
}
