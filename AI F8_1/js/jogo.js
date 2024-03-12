function checkAnswer(option, isCorrect, pergunta) {
  if (option.classList.contains('answered')) {
    return;
  }

  const options = document.querySelectorAll(`.options${pergunta} .option`);

  options.forEach((opt) => {
    opt.classList.add('answered');

    if (opt.getAttribute('data-correct') === 'true') {
      opt.style.backgroundColor = '#2ecc71'; // Resposta correta fica verde
    } else {
      opt.style.backgroundColor = '#e74c3c'; // Respostas erradas ficam vermelhas
    }

    opt.removeEventListener('click', () => {});
  });

  const respostaMessage = document.createElement('div');
  respostaMessage.classList.add('resposta-message');
  respostaMessage.innerText = isCorrect ? 'Resposta correta!' : 'Resposta errada';
  document.querySelector(`.options${pergunta}).appendChild(respostaMessage`);

  if (isCorrect) {
    pontos += 5;
    document.getElementById('pontos').innerText = pontos;
    showMessage('Resposta correta!');
  } else {
    pontos = Math.max(0, pontos - 2);
    document.getElementById('pontos').innerText = pontos;
    showMessage('Resposta incorreta!');
  }

  perguntasRespondidas++;
  checkEndGame();
}