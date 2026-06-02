// Aguarda todo o HTML da página carregar antes de executar o código
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona o botão de "Explorar Conteúdo" ou "Saiba Mais" através da classe CSS dele
    const botaoExplorar = document.querySelector(".secao-principal-botao");

    // Verifica se o botão realmente existe na página
    if (botaoExplorar) {
        // Adiciona um evento de "escuta": quando o usuário clicar, algo acontece
        botaoExplorar.addEventListener("click", function() {
            // Exibe uma caixa de alerta na tela do usuário
            alert("🌱 Muito obrigado pelo interesse! Integrar a tecnologia e a sustentabilidade no campo é o nosso objetivo para o Agrinho 2026.");
        });
    }
});
