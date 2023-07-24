
// Variáveis
const btnTry = document.querySelector("#btnTry");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnReset = document.querySelector("#btnReset");
const fortuneText = document.querySelector(".message");
const fortunePhrases = [
    'O sucesso é a soma de pequenos esforços persistentes',
    'Acredite nos seus sonhos, pois são a chave para a realização',
    'Sorria sempre, pois a felicidade contagia a alma',
    'Seja gentil com todos que encontrar, a gentileza é um presente valioso',
    'Enxergue os desafios como oportunidades disfarçadas',
    'A gratidão transforma momentos simples em memórias preciosas',
    'Aprenda com o passado, viva o presente e sonhe com o futuro',
    'A verdadeira beleza está na autenticidade de ser você mesmo',
    'Nunca é tarde demais para começar algo novo',
    'Seja a mudança que deseja ver no mundo',
]


//Eventos
btnTry.addEventListener('click', toogleScreen)
btnReset.addEventListener('click', toogleScreen)

// Funções
function toogleScreen() {
    novaFrase()
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function novaFrase() {
    const allFortunes = fortunePhrases.length;
    const randomNumber = Math.floor(Math.random() * allFortunes);
    fortuneText.innerHTML = fortunePhrases[randomNumber];
}