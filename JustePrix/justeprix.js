import { Confetti } from "../lib/confetti.js";
// Générer un chiffre en aléatoire
// L'utilisateur fera ,des propositions
// Continuer tant que le prix n'est pas bon

let NumberToFind = 0;
const resultDiv = document.getElementById("resultDiv");
const reboursDiv = document.getElementById("compteARebours");
const GamePropalDiv = document.getElementById("GamePropalDiv");
let TempsRestant = 0;
let compteurInterval = null;

document.getElementById("beginGame").addEventListener("click", function () {
  // Lancer la partie
  // Récuperer un chiffre aléatoire
  launchGame();
});

document
  .getElementById("checkPropalButton")
  .addEventListener("click", function () {
    checkPropal();
  });

document
  .getElementById("userPropalInput")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      checkPropal();
    }
  });

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function checkPropal() {
  let numberPropal = document.getElementById("userPropalInput").value;
  if (NumberToFind > numberPropal) {
    // C'est plus
    resultDiv.innerHTML = "C'est plus !";
    let audio = new Audio("audio/plus.mp3");
    audio.play();
  } else if (NumberToFind < numberPropal) {
    // C'est moins
    resultDiv.innerHTML = "C'est moins !";
    let audio = new Audio("audio/moins.mp3");
    audio.play();
  } else if (NumberToFind == numberPropal) {
    // Gagné
    resultDiv.innerHTML = "C'est gagné !";

    endGame(true);
  }
}

function launchGame() {
  Confetti.stopAnimationConfeti();
  NumberToFind = getRandomInt(1000);
  // Compte a rebours
  console.log(NumberToFind);
  TempsRestant = 30;
  GamePropalDiv.style.display = "block";
  if (compteurInterval != null) {
    clearInterval(compteurInterval);
  }
  compteurInterval = setInterval(() => {
    reboursDiv.innerHTML = TempsRestant;
    TempsRestant--;

    if (TempsRestant >= 20) {
      reboursDiv.classList.add("cool");
      reboursDiv.classList.remove("warning");
      reboursDiv.classList.remove("danger");
    } else if (TempsRestant > 10) {
      reboursDiv.classList.add("warning");
      reboursDiv.classList.remove("cool");
      reboursDiv.classList.remove("danger");
    } else if (TempsRestant >= 0) {
      reboursDiv.classList.add("danger");
      reboursDiv.classList.remove("cool");
      reboursDiv.classList.remove("warning");
    } else if (TempsRestant < 0) {
      clearInterval(compteurInterval);
      // Partie terminer
      endGame(false);
    }
  }, 1000);
}


function endGame(gagne) {
  if (gagne) {
    Confetti.launchAnimationConfeti();
    let audio = new Audio("audio/gagné.mp3");
    audio.play();
    setTimeout(() => {
      Confetti.stopAnimationConfeti();
    }, 5000);
  } else {
    let audio = new Audio("audio/tes_mauvais_jack.mp3");
    audio.play();
  }
  GamePropalDiv.style.display = "none";
  clearInterval(compteurInterval);
}
