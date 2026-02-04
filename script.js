const btnNo = document.getElementById('btn-no');
const btnYes = document.getElementById('btn-yes');
const quizSection = document.getElementById('quiz-section');
const successSection = document.getElementById('success-section');

let moveCount = 0;

// Hacer que el botón "No" se escape
btnNo.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
    
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
    
    // Opcional: El botón de SI se hace más grande cada vez que intentan darle a NO
    moveCount++;
    btnYes.style.transform = `scale(${1 + moveCount * 0.1})`;
});

// Acción al dar clic en SÍ
btnYes.addEventListener('click', () => {
    quizSection.classList.add('hidden');
    successSection.classList.remove('hidden');
});