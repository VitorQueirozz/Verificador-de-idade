function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var res = window.document.getElementById('res')
    var text = window.document.getElementById('txtano')
    if (text.value == 0 || Number(text.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        //var fsex = window.document.getElementsByTagName('radsex')
        var radius = document.querySelectorAll("input[type='radio']")
        var idade = ano - Number(text.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (radius[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <=14) {
                img.setAttribute('src', 'imagens/menino.png' )
                document.body.style.background = '#CECEF6'
            } else if (idade < 30) {
                img.setAttribute('src', 'imagens/jovemm.png')
                document.body.style.background = '#8181F7'
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/aadulto.png')
                document.body.style.background = '#5858FA'
            } else {
                img.setAttribute('src', 'imagens/idoso.png')
                document.body.style.background = '#8258FA'
            }
        } else if (radius[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <=14) {
                img.setAttribute('src', 'imagens/menina.png')
                document.body.style.background = '#F8E0E6'
            } else if (idade < 30) {
                img.setAttribute('src', 'imagens/jovem.png')
                document.body.style.background = '#F5A9BC'
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulta.png')
                document.body.style.background = '#FA5882'
            } else {
                img.setAttribute('src', 'imagens/idosa.png')
                document.body.style.background = '#FE2E9A'
            }
        }  
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
        res.appendChild(img)                               
    }
}