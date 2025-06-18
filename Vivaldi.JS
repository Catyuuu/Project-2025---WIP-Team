function loadSeason(season) {
  const titles = {
    spring: "Vivaldi's Spring",
    summer: "Vivaldi's Summer",
    autumn: "Vivaldi's Autumn",
    winter: "Vivaldi's Winter"
  };

  const descriptions = {
    spring: "Enjoy the cheerful sounds of Spring.",
    summer: "Feel the heat with Vivaldi's Summer.",
    autumn: "Experience the fall with Autumn's tune.",
    winter: "Chill out to Vivaldi's Winter."
  };

  // Update content
  document.getElementById('main-title').textContent = titles[season];
  document.getElementById('season-description').textContent = descriptions[season];

  // Set audio source
  const audioSrc = `audio/${season}.mp3`;
  document.getElementById('audio-source').src = audioSrc;
  const audioPlayer = document.getElementById('audio-player');
  audioPlayer.load();
  audioPlayer.play();

  // Show season content and hide buttons
  document.getElementById('season-buttons').classList.add('hidden');
  document.getElementById('season-content').classList.remove('hidden');

  // Optional: change background color
  document.body.style.backgroundColor = {
    spring: "#e0ffe0",
    summer: "#fffacd",
    autumn: "#ffe4b5",
    winter: "#e0f7fa"
  }[season];
}

function goBack() {
  // Reset title
  document.getElementById('main-title').textContent = "Choose a Season";
  
  // Pause music
  document.getElementById('audio-player').pause();
  
  // Hide season content and show buttons
  document.getElementById('season-content').classList.add('hidden');
  document.getElementById('season-buttons').classList.remove('hidden');
  
  // Reset background
  document.body.style.backgroundColor = "#f0f0f0";
}
