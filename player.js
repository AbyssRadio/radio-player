const audio = document.getElementById("audio");
const playToggle = document.getElementById("playToggle");
const muteBtn = document.getElementById("mute");
const volumeSlider = document.getElementById("volume");
const logo = document.getElementById("logoContainer");

let isPlaying = false;

// Volumen inicial
audio.volume = volumeSlider.value;

// PLAY / STOP TOGGLE
playToggle.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    playToggle.textContent = "⏹";
    logo.classList.add("playing");
  } else {
    audio.pause();
    audio.currentTime = 0;
    playToggle.textContent = "▶";
    logo.classList.remove("playing");
  }
  isPlaying = !isPlaying;
});

// MUTE
muteBtn.addEventListener("click", () => {
  audio.muted = !audio.muted;
  muteBtn.textContent = audio.muted ? "🔈" : "🔇";
});

// VOLUMEN
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
  audio.muted = volumeSlider.value == 0;
});
