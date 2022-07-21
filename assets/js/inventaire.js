


const sword = document.querySelector(".sword");
const armor = document.querySelector(".armor");
const shield = document.querySelector(".shield");
const potlife = document.querySelector(".potlife");
const potpois = document.querySelector(".potpois");



let local = localStorage.getItem("inventaire");
inventory = JSON.parse(local);




const item = () => {

    sword.textContent = inventory[0];
    armor.textContent = inventory[1];
    shield.textContent = inventory[2];
    potlife.textContent = inventory[3];
    potpois.textContent = inventory[4];
    
};

setInterval(item, 33);