var agora = new Date() //busca hora e data do sistema
var hora = agora.getHours() // busca hora do sistema
var minutes = agora.getMinutes() //busca os minutos
var seconds = agora.getSeconds() // busca os segudso

console.log(`Agora são ${hora}:${minutes}:${seconds}`)

if (hora < 12 && hora >= 5) {
    console.log('Bom dia!!')
} else if (hora <= 18 && hora >= 12) {
    console.log('Boa tarde!!')
}else{
    console.log('Boa noite!!')
}
