var inPalavra = document.getElementById("inPalavra")
var outTexto = document.getElementById("outTexto")

var pSalva = []
var pCript = []

function criptografar(){
    var palavra = inPalavra.value
    if(pSalva.length == 1){
        pSalva.shift()
    }
    pSalva.push(palavra)

    var r = ""

    for(var i = 1; i < palavra.length; i+=2){
        r+= palavra.charAt(i)
    }

    for(var j = 0; j < palavra.length; j+=2){
        r+= palavra.charAt(j)
    }
    if (pCript.length == 1){
        pCript.shift()
    }
    pCript.push(r)
    outTexto.textContent = `Resultado: ${r}`

}

function decriptografar(){
    var palavra = inPalavra.value

    if(palavra != pCript[0]){
        alert("Insira a Palavra Correta")
        return
    } else {
    if(pCript.length == 1 && pSalva.length == 1){
        outTexto.textContent = `Resultado: ${pSalva[0]}`
    }
}
    
}




var btDecript = document.getElementById("btDecript").addEventListener("click", decriptografar)
var btCript = document.getElementById("btCript").addEventListener("click", criptografar)