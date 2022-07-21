/* event click new partie */

const nouvellePartie = document.getElementById("nouvelle-partie");
const credit = document.getElementById("credit");

const role = document.getElementsByClassName("role")[0];
const menuButton = document.getElementById("menuButton");

/* event click new partie */

nouvellePartie.addEventListener("click", (event) => {
  document.location.href = "map.html"
  localStorage.clear();
  let inventory = [0, 0, 0, 0, 0];
  let sauvegarde=JSON.stringify(inventory);
  localStorage.setItem("inventaire",sauvegarde);
  

});

/* event click afficher/cacher menu */

function afficherMenu() {
  credit.style.display = "block";
  nouvellePartie.style.display = "block";
  quitter.style.display = "block";

}

function cacherMenu() {
  credit.style.display = "none";
  nouvellePartie.style.display = "none";
  quitter.style.display = "none";

}

/* event click afficher/cacher credit, menuButton */

function afficherCredit() {
  role.style.display = "grid";
  menuButton.style.display = "block";
}

function cacherCredit() {
  role.style.display = "none";
  menuButton.style.display = "none";
}

/* event click sound */

let audio = document.getElementById("audio");
let playStop = document.getElementById("playStop");
let sound = document.getElementById("sound");

/* music Menu */

let isPlaying = true;
const soundIcon = document.getElementById("sound");

function playPause() {
  isPlaying = !isPlaying;

  if (isPlaying) {
    audio.pause();
    soundIcon.setAttribute("src", "/assets/imgMenu/mute.png");
  } 
  
  else {
    audio.play();
    soundIcon.setAttribute("src", "/assets/imgMenu/volume.png");
  }
}

// adjust sound

audio.volume = 0.1;

//Button exit

function quitterPartie() {

  close();
}
