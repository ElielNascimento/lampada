const lampOn = document.getElementById("on");
const lampOff = document.getElementById("off");
const lampada = document.getElementById("lamp")

function ligar (){
   lampada.src = './img/ligada.jpg'
}

lampOn.addEventListener('click', ligar);