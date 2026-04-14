let btnSoma = document.querySelector ("#btnSoma")
let primeiroNumero = document.querySelector("#primeiroNumero")
let segundoNumero = document.querySelector("#segundoNumero")

function soma() {
    let resultado = Number(primeiroNumero.value) + Number(segundoNumero.value)
    alert(resultado)
}

btnSoma.addEventListener("click", soma) 