// explore.js

window.addEventListener('DOMContentLoaded', init);

let voices = [];
function populateVoiceList() {
  voices = speechSynthesis.getVoices();
  for (let i = 0; i < voices.length; i++) {
    let option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }
}
populateVoiceList();
if (typeof speechSynthesis !== "undefined" && speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

let speech;
let selectedVoice;

function init() {
  let voice = document.getElementById("voice-select");
  voice.addEventListener ("change", (e) => {
    selectedVoice = e.target.selectedOptions[0].getAttribute("data-name");  
  })

  let text = document.getElementById("text-to-speak");
  text.addEventListener ("change", (e) => {
    speech = e.target.value;
  })

  let clicked = document.querySelector("button");
  clicked.addEventListener ("click", speakNow);
}

function speakNow (e) {
  let face = document.querySelector ('img[alt="Smiling face"]');
  let utterance = new SpeechSynthesisUtterance(speech);
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedVoice) {
      utterance.voice = voices[i];
    }
  }
  speechSynthesis.speak(utterance); 
  utterance.addEventListener ("start", () => {
    face.src = "assets/images/smiling-open.png";
  })
  utterance.addEventListener ("end", () => {
    face.src = "assets/images/smiling.png";
  })
}