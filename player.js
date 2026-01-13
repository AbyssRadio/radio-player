const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const metadata = document.getElementById("metadata");

// Botones
playBtn.onclick = () => audio.play();
stopBtn.onclick = () => {
  audio.pause();
  audio.currentTime = 0;
};

// ⚠️ METADATOS DEL STREAM
// Esto funciona con Icecast / Shoutcast
const METADATA_URL = "https://s1.free-shoutcast.com/stream/18104/status-json.xsl";

async function loadMetadata() {
  try {
    const res = await fetch(METADATA_URL);
    const data = await res.json();

    // Icecast típico
    const source = data.icestats.source;
    const song = Array.isArray(source)
      ? source[0].title
      : source.title;

    metadata.textContent = song || "Transmisión en vivo";
  } catch (e) {
    metadata.textContent = "En vivo";
  }
}

// Actualiza cada 10 segundos
setInterval(loadMetadata, 10000);
loadMetadata();
