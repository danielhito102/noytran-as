document.getElementById("botao").addEventListener("click", function () {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Você clicou no botão! Obrigado.";
    mensagem.style.color = "green";
});