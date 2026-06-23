// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    console.log("Projeto Agrinho 2026 carregado com sucesso!");

    // 1. Criação dinâmica do botão de Modo Escuro (Acessibilidade)
    const headerContainer = document.querySelector('.hero .container');
    const toggleButton = document.createElement('button');
    toggleButton.innerText = '🌙 Alternar Contraste';
    toggleButton.classList.add('btn-toggle');
    headerContainer.appendChild(toggleButton);

    // Evento de clique para mudar o tema
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            toggleButton.innerText = '☀️ Modo Claro';
        } else {
            toggleButton.innerText = '🌙 Alternar Contraste';
        }
    });

    // 2. Efeito visual minimalista nos cards de solução
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = '#E67E22'; // Cor de terra cozida ao passar o mouse
        });
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'var(--accent-color)'; // Volta ao verde mandacaru
        });
    });
});