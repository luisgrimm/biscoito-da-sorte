const phrases = [
"A simplicidade é o último grau de sofisticação.",
"O sucesso é a soma de pequenos esforços repetidos dia após dia.",
"Acredite que você pode, e você já está no meio do caminho.",
"A cada amanhecer, nascem novas oportunidades.",
"Quem planta bondade, colhe felicidade.",
"A melhor maneira de prever o futuro é criá-lo.",
"Seu sorriso é seu melhor acessório.",
"A gratidão transforma o que temos em suficiente.",
"A felicidade é uma jornada, não um destino.",
"O melhor ainda está por vir.",
"A sorte favorece os audazes.",
"A vida é curta, aproveite cada momento."
]

const screen1 = document.querySelector(".first")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector(`#cookie`)
const btnReset = document.querySelector(`.btnReset`)
let randomNumber = Math.round(Math.random() * 10)

btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)

function handleTryClick() {
    screen2.querySelector("#message").innerText = phrases[randomNumber]
    toggleScreen()
}

function handleResetClick() {
    toggleScreen()
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}