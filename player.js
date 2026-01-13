const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const metadata = document.getElementById("metadata");

// CONTROLES
playBtn.onclick = () => audio.play();
stopBtn.onclick = () => {
  audio.pause();
  audio.currentTime = 0;
};

// URL DE TU WORKER
const METADATA_API = "https://radiometa.abyssradio666.workers.dev/";

let lastSong = "";

async function loadMetadata() {
  try {
    const res = await fetch(METADATA_API);
    const data = await res.json();

    const currentSong = data.song?.trim();

    if (!currentSong) {
      metadata.textContent = "🎧 En vivo";
      return;
    }

    // Detectar cambio de canción
    if (currentSong !== lastSong) {
      metadata.textContent = `🎵 ${currentSong}`;
      lastSong = currentSong;
    }

  } catch (e) {
    metadata.textContent = "🎧 En vivo";
  }
}

// Primera carga + polling
loadMetadata();
setInterval(loadMetadata, 5000);
