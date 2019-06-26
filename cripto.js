// Importa os Campos do HTML

var inPalavra = document.getElementById("inPalavra") 
var outTexto = document.getElementById("outTexto")

// Cria os vetores para salvaar a palavra normal e encriptada
var pSalva = []
var pCript = []

function criptografar(){
    var palavra = inPalavra.value

    if(pSalva.length == 1){ // Remove a palavra atual no vetor (caso possuir)
        pSalva.shift()
    }
    pSalva.push(palavra) // Adiciona a palavra no vetor

    var r = "" // Concatena a palavra criptografada

    // Laços para obter letras ímpares e pares

    for(var i = 0; i < palavra.length; i+=2){
        r+= palavra.charAt(i).toUpperCase()
    }

    for(var j = 1; j < palavra.length; j+=2){
        r+= palavra.charAt(j).toLowerCase()
    }
    if (pCript.length == 1){ // Remove a palavra criptografada do vetor (caso possuir)
        pCript.shift()
    }
    pCript.push(r) // Adiciona a palavra critografada no vetor
    outTexto.textContent = `Resultado: ${r}` // Exibe o resultado

}

function decriptografar(){
    var palavra = inPalavra.value

    if(palavra != pCript[0]){ // Verifica se a palavra inserida é a palavra criptografada
        alert("Insira a Palavra Correta")
        return
    } else {
        if(pCript.length == 1 && pSalva.length == 1){ // Caso seja, a palavra decriptografada é exibida
            outTexto.textContent = `Resultado: ${pSalva[0]}`
    }
}
    
}



// Importa e adiciona o evento click aos botões
var btDecript = document.getElementById("btDecript").addEventListener("click", decriptografar)
var btCript = document.getElementById("btCript").addEventListener("click", criptografar)