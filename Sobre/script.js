// Esperar a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  const music = document.getElementById('background-music');
  const musicToggle = document.getElementById('music-toggle');
  let isPlaying = false;

  // Función para reproducir música
  function playMusic() {
    music.play().then(() => {
      isPlaying = true;
      musicToggle.classList.remove('paused');
    }).catch(error => {
      console.log("Reproducción automática bloqueada por el navegador:", error);
    });
  }

  // Función para pausar música
  function pauseMusic() {
    music.pause();
    isPlaying = false;
    musicToggle.classList.add('paused');
  }

  // Manejar clic en el botón de música
  musicToggle.addEventListener('click', function() {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  });

  // Intentar reproducir música cuando el usuario interactúa con la página
  document.addEventListener('click', function() {
    if (!isPlaying) {
      playMusic();
    }
  }, { once: true });
});
