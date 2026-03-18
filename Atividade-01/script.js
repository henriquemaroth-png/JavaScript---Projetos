const lampada = document.querySelector("img");
const ligar = document.querySelector(".ligar");
const desligar = document.querySelector(".desligar");

ligar.addEventListener("click", () => {
    lampada.src = "./Img/Ligada.png";
    lampada.classList.add("ligada");
});

desligar.addEventListener("click", () => {
    lampada.src = "./Img/Desligada.png";
    lampada.classList.remove("ligada");
});