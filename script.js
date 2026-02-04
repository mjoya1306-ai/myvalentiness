const btnNo = document.getElementById('btn-no');
const btnYes = document.getElementById('btn-yes');
const quizSection = document.getElementById('quiz-section');
const successSection = document.getElementById('success-section');

let moveCount = 0;

// Hacer que el botón "No" se escape
btnNo.addEventListener('mouseover', () => {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const btnRect = btnNo.getBoundingClientRect();
    
    // Calculamos límites seguros dentro del contenedor o ventana
    const maxWidth = window.innerWidth - btnRect.width - 20;
    const maxHeight = window.innerHeight - btnRect.height - 20;

    const x = Math.random() * maxWidth;
    const y = Math.random() * maxHeight;

    // Usamos position fixed para asegurar que se mueva libremente por la pantalla
    btnNo.style.position = 'fixed'; 
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;

    moveCount++;
    btnYes.style.transform = `scale(${1 + moveCount * 0.1})`;
});

// Acción al dar clic en SÍ
btnYes.addEventListener('click', () => {
    quizSection.classList.add('hidden');
    successSection.classList.remove('hidden');
});

let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player("yt-player", {
        videoId: "wAv_2WO2rHE", // TU ID DE VIDEO AQUÍ
        playerVars: {
            autoplay: 1,        // Auto-reproducción activada
            controls: 1,        // Controles visibles por si quieren pausar
            loop: 1,
            playlist: "wAv_2WO2rHE",
            rel: 0              // No sugerir videos de otros canales
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // Intentar reproducir y activar sonido inmediatamente
    event.target.playVideo();
    event.target.unMute();
    event.target.setVolume(100);
}