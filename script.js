function carregar () {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    msg.innerHTML = `Agora são ${hora}:${minutos}.`
    if (hora >= 0 && hora < 6) {
        // BOA MADRUGADA!
        img.src = 'madrugada.png'
        document.body.style.background = '#4b2424'
    } else if (hora >= 6 && hora < 12) {
        // BOM DIA!
        img.src= 'fotomanha.png';
        document.body.style.background = '#e2cfa8';
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src= 'fototarde.png';
        document.body.style.background = '#e8763b'
    } else {
        // BOA NOITE!
        img.src= 'noite.png';
        document.body.style.background = '#24383f'
    }
}
