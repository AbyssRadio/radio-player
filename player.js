const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const volumeSlider = document.getElementById("volume");

// Volumen inicial
audio.volume = volumeSlider.value;

// Play
playBtn.addEventListener("click", () => {
  audio.play();
});

// Stop
stopBtn.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
});

// Volumen
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});
