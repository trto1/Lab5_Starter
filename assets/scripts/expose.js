// expose.js

window.addEventListener('DOMContentLoaded', init);

let confetti = false;
const jsConfetti = new JSConfetti();

function init() {
  let hornChoice = document.getElementById("horn-select");
  hornChoice.addEventListener("change", selectImgAndAudio);

  let volume = document.getElementById("volume");
  volume.addEventListener("input", volumeUpdate);

  let audioClicked = document.querySelector("button")
  let audio = document.querySelector("audio.hidden");
  audioClicked.addEventListener("click", () => {
    audio.play();
    if (confetti == true) {
      jsConfetti.addConfetti();
    }
  })
}

function selectImgAndAudio (e) {
  let img = document.querySelector('img[alt="No image selected"]');
  let audio = document.querySelector("audio.hidden");
  if (e.target.value === "air-horn") {
    img.src = "assets/images/air-horn.svg";
    audio.src = "assets/audio/air-horn.mp3";
  }
  else if (e.target.value === "car-horn") {
    img.src = "assets/images/car-horn.svg";
    audio.src = "assets/audio/car-horn.mp3";
  }
  else {
    img.src = "assets/images/party-horn.svg";
    audio.src = "assets/audio/party-horn.mp3";
    confetti = true;
  }
}

function volumeUpdate (e) {
  let img = document.querySelector('img[alt="Volume level 2"]');
  let value = Number(e.target.value);
  let audio = document.querySelector("audio.hidden");
  audio.volume = value / 100;

  if (value == 0) {
    img.src = "assets/icons/volume-level-0.svg";
  }
  else if (value >= 1 && value <= 33) {
    img.src = "assets/icons/volume-level-1.svg";
  }
  else if (value >= 33 && value <= 67) {
    img.src = "assets/icons/volume-level-2.svg";
  }
  else {
    img.src = "assets/icons/volume-level-3.svg";
  }
}