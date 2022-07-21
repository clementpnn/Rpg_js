let btn_returnMap=document.getElementById("returnB");

//fonction aleatoire
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  
}


let TypeMonstre=localStorage.getItem("MonstrePicture");
var Monstre = document.getElementById("monstre");

if (TypeMonstre==="squelette"){
    inventory[0]=inventory[0]+getRandomInt(2)
    inventory[1]=inventory[1]+getRandomInt(2)
    inventory[2]=inventory[2]+getRandomInt(2)
    inventory[3]=inventory[3]+getRandomInt(3)
    inventory[4]=inventory[4]+getRandomInt(3)
    
}
else if (TypeMonstre==="champi"){
    inventory[0]=inventory[0]+getRandomInt(3)
    inventory[1]=inventory[1]+getRandomInt(4)
    inventory[2]=inventory[2]+getRandomInt(3)
    inventory[3]=inventory[3]+getRandomInt(4)
    inventory[4]=inventory[4]+getRandomInt(4)
    
}
else if (TypeMonstre==="ghoul"){
    inventory[0]=inventory[0]+getRandomInt(5)
    inventory[1]=inventory[1]+getRandomInt(4)
    inventory[2]=inventory[2]+getRandomInt(4)
    inventory[3]=inventory[3]+getRandomInt(5)
    inventory[4]=inventory[4]+getRandomInt(5)
    
} 


let sauvegarde=JSON.stringify(inventory);

localStorage.setItem("inventaire",sauvegarde);


btn_returnMap.addEventListener("click", () => {
    returnMap();
})

function returnMap(){
    document.location.href="map.html"
  
}

