const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const metadata = document.getElementById("metadata");

// Controles
playBtn.onclick = () => audio.play();
stopBtn.onclick = () => {
  audio.pause();
  audio.currentTime = 0;
};

// SHOUTCAST METADATA
const STATS_URL = "https://s1.free-shoutcast.com/stats?sid=1&json=1";

// Proxy CORS
const PROXY = "https://api.allorigins.win/raw?url=";

async function loadMetadata() {
  try {
    const res = await fetch(PROXY + encodeURIComponent(STATS_URL));
    const data = await res.json();

    const song = data.streams[0].songtitle;
    const listeners = data.streams[0].listeners;

    metadata.textContent = song
      ? `🎵 ${song} | 👥 ${listeners}`
      : "🎧 En vivo";

  } catch (e) {
    metadata.textContent = "🎧 En vivo";
  }
}

// Cada 10 segundos
loadMetadata();
setInterval(loadMetadata, 10000);
