// Script de interatividade para o site de Grace Hopper

document.addEventListener('DOMContentLoaded', () => {

  // 1. Lógica do Simulador do Compilador
  const btnCompile = document.getElementById('btn-compile');
  const codeInput = document.getElementById('code-input');
  const codeOutput = document.getElementById('code-output');

  btnCompile.addEventListener('click', () => {
    const text = codeInput.value.trim();
    if (!text) {
      codeOutput.textContent = "Por favor, digite uma instrução.";
      return;
    }

    // Converte o texto digitado em uma representação binária simples (código de máquina)
    let binaryResult = '';
    for (let i = 0; i < text.length; i++) {
      binaryResult += text[i].charCodeAt(0).toString(2).padStart(8, '0') + ' ';
    }

    codeOutput.textContent = binaryResult;
  });

  // 2. Lógica do Mini-Jogo "Caça ao Bug"
  const relayGrid = document.getElementById('relay-grid');
  const bugStatus = document.getElementById('bug-status');
  const totalRelays = 8;
  const bugIndex = Math.floor(Math.random() * totalRelays);
  let gameFinished = false;

  for (let i = 0; i < totalRelays; i++) {
    const btn = document.createElement('button');
    btn.classList.add('relay-btn');
    btn.textContent = `Relé #${i + 1}`;
    
    btn.addEventListener('click', () => {
      if (gameFinished) return;

      if (i === bugIndex) {
        btn.classList.add('found');
        btn.textContent = '🦋 BUG!';
        bugStatus.textContent = 'Você encontrou a mariposa presa no relé #70! "Debugging" concluído com sucesso!';
        bugStatus.style.color = '#4ade80';
        gameFinished = true;
      } else {
        btn.classList.add('clear');
        btn.textContent = '✓ OK';
      }
    });

    relayGrid.appendChild(btn);
  }

});