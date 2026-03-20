const tela = document.querySelector(".tela");
const botoes = document.querySelectorAll("button");

let expressao = "";

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        let valor = botao.innerText;

        if (valor === "C") {
            expressao = "";
            tela.innerText = "";
        } 
        else if (valor === "=") {
            try {
                expressao = eval(expressao);
                tela.innerText = expressao;
            } catch {
                tela.innerText = "Erro";
                expressao = "";
            }
        } 
        else {
            // troca X por *
            if (valor === "X") valor = "*";

            expressao += valor;
            tela.innerText = expressao;
        }
    });
});