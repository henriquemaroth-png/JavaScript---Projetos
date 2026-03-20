const mais = document.querySelector(".mais");
const menos = document.querySelector(".menos");
const retangulo = document.getElementById("retangulo");

let total = 0;

mais.addEventListener("click", () => {
    total = total + 1;
    atualizar();
});

menos.addEventListener("click", () => {
    if (total > 0) {
        total = total - 1;
        atualizar();
    }
});

function atualizar() {
    retangulo.innerHTML = total;
}