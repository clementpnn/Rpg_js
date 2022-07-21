//definition de la class personnage et monstre
let audio = document.getElementById("audio");

audio.volume = 0.1;

class personnage {
  constructor(name, DMG, HP, MAXHP, shield,potionVie,potionPoison) {
    this.name = name;
    this.dmg = DMG;
    this.hp = HP;
    this.maxhp = MAXHP;
    this.shield = shield;
    this.potionVie=potionVie;
    this.potionPoison=potionPoison;
  }
}

//sauvegarde des objets entre les js
var  local =localStorage.getItem("inventaire");
let inventory = JSON.parse(local);


var Personnage = new personnage("hero", 15+inventory[0], 100+inventory[1], 100+inventory[1], 5+inventory[2],inventory[3],inventory[4]);

class Monster {
  constructor(name, DMG, HP, MAXHP) {
    this.name = name;
    this.dmg = DMG;
    this.hp = HP;
    this.maxhp = MAXHP;
  }
}


// change l'img et le mob en fonction du monstre affronté 
let TypeMonstre=localStorage.getItem("MonstrePicture");
var PictureMonstre = document.getElementById("monstre");
if (TypeMonstre==="squelette"){
    PictureMonstre.src="assets/imgMonstre/squelette.png";
    var Monstre = new Monster("squelette", 10, 90, 90);
}
else if (TypeMonstre==="champi"){
    PictureMonstre.src="assets/imgMonstre/champi.png";
    var Monstre = new Monster("champi", 11, 100, 100);
}
else if (TypeMonstre==="ghoul"){
    PictureMonstre.src="assets/imgMonstre/ghoul.png";
    var Monstre = new Monster("ghoul", 12, 120, 120);
} 




//Reagir en fonction des boutons cliquer

let btn_attaquer = document.getElementById("attaque");
let btn_bouclier = document.getElementById("bouclier");
let btn_potionvie = document.getElementById("potionvie");
let btn_potionpoison = document.getElementById("potionpoison");
var chat = document.getElementById("chat");

btn_attaquer.addEventListener("click", () => {
  attaquer();
  buttonOff(0);
});
btn_bouclier.addEventListener("click", () => {
  bouclier();
  buttonOff(0);
});
btn_potionvie.addEventListener("click", () => {
  potionVie();
  buttonOff(0);
  
});
btn_potionpoison.addEventListener("click", () => {
  potionPoison();
  buttonOff(0);
});

//activer ou désactiver les boutons pour que le joueur ne spawn pas 
function buttonOff(off) {
  if (off === 0) {
    btn_attaquer.disabled = true;
    btn_bouclier.disabled = true;
    btn_potionpoison.disabled = true;
    btn_potionvie.disabled = true;
  } else if (off === 1) {
    btn_attaquer.disabled = false;
    btn_bouclier.disabled = false;
    btn_potionpoison.disabled = false;
    btn_potionvie.disabled = false;
  }
}

//Barre de vie du hero et monstre

const monstreM = document.querySelector("#barHero");
const heroH = document.querySelector("#barMonster");

const sword = document.querySelector(".sword");
const armor = document.querySelector(".armor");
const shield = document.querySelector(".shield");
const potlife = document.querySelector(".potlife");
const potpois = document.querySelector(".potpois");

const loop2 = () => {
  monstreM.value = Monstre.hp;
  monstreM.max = Monstre.maxhp;

  heroH.value = Personnage.hp;
  heroH.max = Personnage.maxhp;

  sword.textContent = inventory[0];
  armor.textContent = inventory[1];
  shield.textContent = inventory[2];
  potlife.textContent = inventory[3];
  potpois.textContent = inventory[4];
    
};



//fonction de gameplay
// potion permet de verifier si tu as deja utilisé une potion
//settimeout permet de faire des timeur entre les messages
var Potion=0;
var TourPoison=0;
function attaquer() {
  Potion=0;
  
if (TourPoison>0){
  Monstre.hp = Monstre.hp - Personnage.dmg+5;
  chat.textContent = "Tu attaque et inflige " + Personnage.dmg+" plus 5 degats de poison";
  TourPoison=TourPoison-1;
  
  
  if (Monstre.hp < 0 || Monstre.hp === 0) {
    chat.textContent = "WIN";
    setTimeout(function () {
      document.location.href = "win.html";
      return hero;}, 1000);
  } 
  else if (Monstre.hp > 0) {
    setTimeout(function () {chat.textContent = "Le monstre vous attaque.";}, 1000);
    
    setTimeout(function () {
      chat.textContent = "Il vous a infligé " + Monstre.dmg + " degats.";
      Personnage.hp = Personnage.hp - Monstre.dmg;
      }, 2000);
    
      if (Personnage.hp === 0 || Personnage.hp < 0) {
        setTimeout(function () {(chat.textContent = "LOSE"), 2150;});
      } 
      else if (Personnage.hp > 0) {
      setTimeout(buttonOff, 2151, 1);
      }

    }
  }

else if (TourPoison===0){
  Monstre.hp = Monstre.hp - Personnage.dmg;
  chat.textContent = "Tu attaque et inflige " + Personnage.dmg;
  
  if (Monstre.hp < 0 || Monstre.hp === 0) {
    chat.textContent = "WIN";
    setTimeout(function () {
      document.location.href = "win.html";
      return hero;}, 1000);
  } 
  else if (Monstre.hp > 0) {
    setTimeout(function () {chat.textContent = "Le monstre vous attaque.";}, 1000);
    
    setTimeout(function () {
      chat.textContent = "Il vous a infligé " + Monstre.dmg + " degats.";
      Personnage.hp = Personnage.hp - Monstre.dmg;
      }, 2000);
    
      if (Personnage.hp === 0 || Personnage.hp < 0) {
        setTimeout(function () {(chat.textContent = "LOSE"), 2150;});
      } 
      else if (Personnage.hp > 0) {
      setTimeout(buttonOff, 2151, 1);
      }

    }
  }
}

//fonction bouclier (pour ce defendre)
function bouclier() {
  if (TourPoison>0){
    Potion=0;
    var degats = Monstre.dmg - Personnage.shield;
    TourPoison=TourPoison-1;
    Monstre.hp = Monstre.hp - 5;
    
    setTimeout(function () {chat.textContent = "Le monstre attaque", 2050;})
    
    if (degats === 0 || degats < 0) {
      setTimeout(function () {
        chat.textContent =
          "Ton bouclier est trop fort ! Tu as encaissé tout les degats du monstre";
      }, 2000);
      setTimeout(buttonOff, 3050, 1);
    } else if (degats > 0) {
      setTimeout(function () {
        chat.textContent =
          "Même avec le bouclier, le monstre t'inflige " +
          degats;
        Personnage.hp = Personnage.hp - degats;
      }, 3000);
  
      if (Personnage.hp === 0 || Personnage.hp < 0) {
        chat.textContent = "LOSE";
        setTimeOut(function () {
          document.location.href = "lose.html";
        }, 2000);
      } else if (Personnage.hp > 0) {
        setTimeout(buttonOff, 1151, 1);
      }
    }
  }
  
  
  
  
  
  
  else if (TourPoison===0){ 
    
    Potion=0;
    var degats = Monstre.dmg - Personnage.shield;
    chat.textContent = "Tu utilise ton bouclier";
    setTimeout(function () {(chat.textContent = "Le monstre attaque"), 1000;});
    
    if (degats === 0 || degats < 0) {
      setTimeout(function () {
        chat.textContent =
          "Ton bouclier est trop fort ! Tu as encaissé tout les degats du monstre";
      }, 2000);
      setTimeout(buttonOff, 2050, 1);
    } else if (degats > 0) {
      setTimeout(function () {
        chat.textContent =
          "Ton bouclier n'a pas pu tout encaisser, le monstre t'inflige " +
          degats;
        Personnage.hp = Personnage.hp - degats;
      }, 1000);
  
      if (Personnage.hp === 0 || Personnage.hp < 0) {
        chat.textContent = "LOSE";
        setTimeOut(function () {
          document.location.href = "lose.html";
        }, 2000);
      } else if (Personnage.hp > 0) {
        setTimeout(buttonOff, 1151, 1);
      }
    }
    
  }
 
}



//Fonction de potion de vie 
function potionVie() {
  if (Potion===1){
    chat.textContent="Tu as deja utilisé une potion de vie ou de poison"
    setTimeout(buttonOff,1050,1);
  }
  else if (Personnage.potionVie===0){
    chat.textContent="Tu n'as pas de potion";
    setTimeout(buttonOff,1050,1);
  }
  else if (Personnage.hp===100 ){
    chat.textContent="Tu es deja full hp"
    setTimeout(buttonOff,1050,1);
    

  }
  else if (Personnage.potionVie>0 && Personnage.potionVie<100){
    chat.textContent = "Tu utilise ta potion de vie, 20hp";
    Personnage.hp=Personnage.hp+20;
    if (Personnage.hp===100 && Personnage.hp>0){
      Personnage.hp=100;
    }
    Personnage.potionVie=Personnage.potionVie-1;
    inventory[3]=inventory[3]-1;
    Potion=1
    setTimeout(buttonOff,1050,1);
    

  }
  
 
}


//fonction de poison, faire des degats pendant plusieurs tour
function potionPoison() {
  
  if (Potion===1){
    chat.textContent="Tu as deja utilisé une potion de vie ou de poison"
    setTimeout(buttonOff,1050,1);
  }
  else if (Personnage.potionPoison===0){
    chat.textContent="Tu n'as pas de potion";
    setTimeout(buttonOff,1050,1);
  }
else if (TourPoison===0 && Potion===0 && Personnage.potionPoison>0){
    TourPoison=4;
    Personnage.potionPoison=Personnage.potionPoison-1;
    inventory[3]=inventory[4]-1;
    chat.textContent = "Tu utilise ta potion de poison pendant 4 tours";
    Monstre.hp = Monstre.hp - 5;
    setTimeout(buttonOff,1050,1);

}
  else if (TourPoison>0){
    chat.textContent="Tu es deja une potion de poison en cours"
    setTimeout(buttonOff,1050,1);
  }
  

}





// setTimeout(loop2, 33);
setInterval(loop2, 33);